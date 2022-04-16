import axios from "axios";
import { useState, useEffect } from "react";
import { useHistory } from "react-router";
import { url } from "../constants/url";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {Success_toast} from '../config/Success_toast'

const ManagerViewOrders = () => {
  const [orders, setOrders] = useState([]);
  const [staff, setStaff] = useState([]);
  const [allStaff, setAllStaff] = useState([]);
  const [customer, setCustomer] = useState([]);
  useEffect(() => {
    getOrders();
    getAllStaff();
  }, []);

  const getAllStaff = () => {
    axios.get(url + "/staff/employee").then((response) => {
      console.log();
      const result = response.data;
      setAllStaff(result);
    });
  };

  const getOrders = () => {
    axios.get(url + "/orders").then((response) => {
      console.log();
      const result = response.data;

      setOrders(result);
    });
  };

  return (
    <div>
      <table className="table table-stripped ">
        <thead>
          <tr>
            <th>Product</th>
            <th>Customer</th>
            <th>Staff</th>
            <th>...</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((order) => {
            return (
              <div>
                <tr>
                  <td>
                    <div>
                      <img
                        src={url + "/storage/" + order.product.thumbnail}
                        className="product-image"
                      />
                    </div>
                    <div className="item-detail">{order.product.name}</div>

                    <div className="item-detail">{order.product.details}</div>
                  </td>

                  <td>
                    <div>
                      {" "}
                      Customer Id: {order.cId}
                      <br></br>
                      <button
                        onClick={() => {
                          console.log(url + "customers/" + order.cId);
                          axios
                            .get(url + "customers/" + order.cId)
                            .then((response) => {
                              console.log(response.data);
                              setCustomer(response.data);
                            });
                        }}
                        className="btn btn-primary"
                      >
                        Get Customer
                      </button>
                    </div>
                    <div>
                      <div>
                        <div>
                          {customer.firstName}
                          {customer.lastName}
                          <br></br>
                          {customer.street}
                          {customer.landmark}
                          {customer.city}
                          {customer.state}
                          <br></br>
                          {customer.phone}
                        </div>
                      </div>
                    </div>
                  </td>

                  <td>
                    <div>
                      <label htmlFor="">Assign Staff</label>
                      <select
                        onChange={(e) => {
                          setStaff(e.target.value);
                        }}
                        className="form-control"
                      >
                        {allStaff.map((staffPerson) => {
                          return (
                            <option value={staffPerson.staff_id}>
                              {staffPerson.firstName}
                              {staffPerson.lastName}
                            </option>
                          );
                        })}
                      </select>
                    </div>
                    <br></br>
                  </td>

                  <td>
                    <button
                      onClick={() => {
                        order.staff_id = staff;
                        console.log(order.staff_id);
                        console.log(staff);
                        console.log(order);
                        axios
                          .put(url + "orders/assignstaff/" + order.cId, order)
                          .then((response) => {
                            console.log(response.data);
                            Success_toast("staff assigned successfully")
                          });
                      }}
                      className="btn btn-primary"
                    >
                      Submit
                    </button>
                    <ToastContainer />
                  </td>
                </tr>
              </div>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};
export default ManagerViewOrders;
