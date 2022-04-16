import axios from "axios";
import { useHistory } from "react-router-dom";
import { useState, useEffect } from "react";
import { url } from "../constants/url";

const ViewPurchases = (props) => {
  let id = props.match.params.id;

  const [products, setProducts] = useState([]);
  let history = useHistory();

  useEffect(() => {
    getProducts();
  }, []);

  const getProducts = () => {
    axios.get(url + "/orders/custid/" + id).then((response) => {
      const result = response.data;
      setProducts(response.data);
      console.log(result);
      console.log(products);
    });
  };

  return (
    <div>
      <div className="container-fluid">
        <div className="row">
          <div className="col-xs- col-sm- col-md- col-lg-">
            <div>
              <div className="table-responsive">
                <table className="table table-striped">
                  <thead>
                    <tr>
                      <td>Title</td>
                      <td>Image</td>
                      <td>Price</td>
                      <td>Status</td>
                    </tr>
                  </thead>
                  <tbody>
                    {products.map((item) => {
                      return (
                        <tr>
                          <td>{item.name}</td>
                          <td>
                            <img
                              style={{ height: "200px", width: "200px" }}
                              src={url + "/storage/" + item.thumbnail}
                              className="product-image"
                            />
                          </td>
                          <td>{item.price}</td>
                          <td>{item.status}</td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ViewPurchases;
