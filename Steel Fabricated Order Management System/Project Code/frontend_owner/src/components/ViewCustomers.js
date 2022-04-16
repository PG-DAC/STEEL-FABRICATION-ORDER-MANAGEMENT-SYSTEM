import { useState } from "react";

import axios from "axios";

import { useHistory } from "react-router";

import { useEffect } from "react";
import { url } from "../constants/url";

const ViewCustomers = () => {
  let history = useHistory();

  const [customers, setCustomers] = useState([]);
  useEffect(() => {
    getCustomers();
  }, []);

  const getCustomers = () => {
    axios.get(url + "/customers").then((response) => {
      const result = response.data;
      console.log(result);
      setCustomers(result);
    });
  };

  return (
    <div>
      <div className="container-fluid">
        <div className="row">
          <div className="col-xs- col-sm- col-md- col-lg-"></div>
          <h1>Customers</h1>
          <table className="table table-stripped">
            <thead>
              <tr>
                <th>Name</th>
                <th>Contact</th>
                <th>Address</th>
                <th>Email</th>
                <th>Date of Birth</th>
                <th>Purchases</th>
              
              </tr>
            </thead>
            <tbody>
              {customers.map((customer) => {
                if (customer.orders.length > 0) {
                  return (
                    <tr>
                      <td>
                        <tr>
                          {customer.firstName}
                          {customer.lastName}
                        </tr>
                      </td>
                      <td>{customer.phone}</td>
                      <td>
                        <tr>{customer.street}</tr>

                        <tr>{customer.state}</tr>
                      </td>
                      <td>{customer.mail}</td>
                      <td>{customer.bod}</td>
                      <td>
                        {/* <button
                          className="btn btn-primary"
                          onClick={() => {
                            let id = customer.id;
                            let path = "/customer-products/" + id;
                            console.log(path);
                            history.push(path);

                            
                          }}
                        >
                          View Purchases
                        </button> */}

                        <tr>
                          {" "}
                          {customer.orders.map((item) => {
                            return (
                              <div>
                                <div>
                                  {console.log(customer.orders)}
                                  Product Name : {item.product.name}
                                </div>
                                <div>
                                  {console.log(item.status)}
                                  Status: {item.status}
                                </div>
                                <div>
                                  <img
                                    style={{ height: "200px", width: "200px" }}
                                    src={
                                      url + "/storage/" + item.product.thumbnail
                                    }
                                  />
                                </div>
                                <div>Price: {item.product.price}</div>
                                <hr />
                              </div>
                            );
                          })}
                        </tr>
                      </td>
                     
                    </tr>
                  );
                }
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ViewCustomers;
