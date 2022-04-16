import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import { url } from "./../constants/url";
import { useSelector, useDispatch } from "react-redux";
import { removeFromCart } from "../actions/cartActions";
import Icon from "react-crud-icons";
import { useHistory } from "react-router";
import Modal from "react-modal";
import Shop from "./Shop";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {Warn_toast} from '../config/Warn_toast'

const ViewCart = () => {
  const id = useSelector((state) => state.loggedUser.cid);
  const history = useHistory();
  const cartproducts = useSelector((state) => state.cartProducts.cart);
  const dispatch = useDispatch();
  useEffect(() => {
    getCustomer();
  }, [cartproducts, id]);
  const [customer, setCustomer] = useState({});
  const [paymentOption, setPaymentOption] = useState("Cash on Dilevery");
  const [modalIsOpen, setModalIsopen] = useState(false);
  const paymentoptions = ["Cash on Dilevery", "Wallet Payment"];
  console.log(cartproducts);
  let isCartEmpty;
  console.log(cartproducts.length);
  if (cartproducts.length === 0) {
    isCartEmpty = true;
  } else isCartEmpty = false;

  let today = new Date();
  today.setDate(today.getDate() + 5);
  let month = today.getMonth() + 1;
  let date = today.getFullYear() + "-" + month + "-" + today.getDate();
  let ddate = new Date();
  let total = 0;
  ddate.setDate(ddate.getDate() + 5);

  const placeOrder = () => {
    if (paymentOption === "") {
      alert("Please select payment mode");
    } else {
      console.log(customer);
      if (paymentOption === "Wallet Payment") {
        if (customer.walletBalance < total) {
          setModalIsopen(true);
        } else {
          const transaction = {
            amount: -total,
            cid: id,
          };

          axios.post(url + "customers/pay", transaction).then((response) => {
            console.log(transaction);
          });
          cartproducts.map((product) => {
            const order = {
              pId: product.id,
              cId: id,
              qty: 1,
              oDate: today,
              ddate: ddate,
              status: "yet to be delivered",
              paymentmode: paymentOption,
            };
            axios.post(url + "orders/putorder", order);
            dispatch(removeFromCart(product));
          });
        }
      } else {
        cartproducts.map((product) => {
          const order = {
            pId: product.id,
            cId: id,
            qty: 1,
            oDate: today,
            ddate: ddate,
            status: "yet to be delivered",
            paymentmode: paymentOption,
          };
          axios.post(url + "orders/putorder", order);
          dispatch(removeFromCart(product));
        });
      }
    }
  };
  const getCustomer = () => {
    axios.get(url + "customers/" + id).then((response) => {
      setCustomer(response.data);
      console.log(response.data);
    });
    console.log(customer);
  };

  return (
    <div>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={() => {
          setModalIsopen(false);
        }}
        style={{
          overlay: {
            backgroundColor: "black",
            opacity: "0.75",
          },
          content: {
            top: "25%",
            left: "40%",
            position: "fixed",
            backgroundColor: "white",
            color: "Black",
            width: "250px",
            height: "200px",
          },
        }}
      >
        <h3>Message !!!!!!</h3>
        <p>Insufficient wallet ballance!!!</p>
        <div>
          <button
            onClick={() => {
              setModalIsopen(false);
            }}
          >
            {" "}
            Close{" "}
          </button>
        </div>
      </Modal>
      
      {isCartEmpty ? (
          <>
        {/* <div className="empty-cart">Cart is empty, First add something to cart</div> */}
        {Warn_toast("Cart is empty, First add something to cart")}
        <ToastContainer />
        <Shop/>
        </>
      ) : (
        <div className="container cart-container">
          {cartproducts.map((product) => {
            total = total + product.price;
            return (
              <div className="row cart-item">
                <div className="col">
                  <img
                    src={url + "/storage/" + product.thumbnail}
                    className="product-image"
                  />
                </div>
                <div className="col">
                  <div>{product.name}</div>
                  <div>Price: {product.price} Rs</div>
                  <div>Delivery date: {date} </div>
                  <div className="icon">
                    <Icon
                      name="delete"
                      theme="light"
                      size="tiny"
                      onClick={() => {
                        dispatch(removeFromCart(product));
                      }}
                    />
                  </div>
                </div>
              </div>
            );
          })}
          <div className="row cart-container">
            <div className="col" style={{ display: "flex" }}>
              <div>
                <div>
                  <span style={{ fontWeight: "bolder" }}>Adress </span>:{" "}
                  {customer.landmark}, {customer.city}, {customer.state}
                </div>
                <div>
                  <span style={{ fontWeight: "bolder" }}>Mobile Number </span>:{" "}
                  {customer.phone}
                </div>
              </div>
              <div
                className="icon"
                style={{ textAlign: "right", marginLeft: "40px" }}
              >
                <Icon
                  name="edit"
                  theme="light"
                  size="small"
                  onClick={() => {
                    history.push("/view-profile");
                  }}
                />
              </div>
            </div>
            <div className="col">
              <span style={{ fontWeight: "bolder" }}> total</span>: {total}
            </div>
            <div className="col">
              <div style={{ display: "flex" }}>
                <span style={{ fontWeight: "bolder" }}>Wallet Balance </span>:{" "}
                {customer.walletBalance} Rs
                <div
                  className="icon"
                  style={{ textAlign: "right", marginLeft: "40px" }}
                >
                  <Icon
                    name="add"
                    theme="light"
                    size="small"
                    onClick={() => {
                      history.push("payment");
                    }}
                  />
                </div>
              </div>
              <div>
                <span style={{ fontWeight: "bolder" }}>Payment Option</span>
                <select
                  onChange={(e) => {
                    setPaymentOption(e.target.value);
                  }}
                >
                  {paymentoptions.map((option) => {
                    return <option value={option}>{option} </option>;
                  })}
                </select>
              </div>
            </div>
            <div style={{ textAlign: "center" }}>
              <button className="btn btn-primary" onClick={placeOrder}>
                Place Order
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ViewCart;
