import "./App.css";
import { BrowserRouter, Link, Route, Switch } from "react-router-dom";
import LoginPage from "./pages/loginpage";
import SignUp from "./components/SignUp";

import ViewProductsCategory from "./components/ViewProductsCategory";
import AdminHome from "./pages/adminhome";
import ManagerHome from "./pages/managerhome";
import EmployeeHome from "./pages/employeehome";
import ViewProducts from "./components/ViewProducts";

import UpdateProduct from "./components/UpdateProduct";
import AddCategory from "./components/AddCategory";
import AddProduct from "./components/AddProduct";
import ViewStaff from "./components/ViewStaff";
import ViewOrders from "./components/ViewOrders";
import ViewReviews from "./components/ViewReviews";
import AddStaff from "./components/AddStaff";
import ManagerViewOrders from "./components/ManagerViewOrders";
import ViewCustomers from "./components/ViewCustomers";
import ViewCustomisedProductRequests from "./components/ViewCustomisedProductRequests";
import { useSelector } from "react-redux";
import ViewPurchases from "./components/ViewPurchases";
import StaffOrders from "./pages/StaffOrders";
import LoginButton from "./components/LoginButton";
import Home from "./pages/Home";

function App() {
  const name = useSelector((state) => state.firstName);
  const id = useSelector((state) => state.cid);

  console.log(name);
  console.log(id);
  const isLoggedIn = id !== 0;
  console.log(isLoggedIn);
  return (
    <>
     <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
  <a class="navbar-brand" href="#"> Steel Fabrication </a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNav">
    <ul class="navbar-nav">
     
      <li class="nav-item active">
    
     <a class="nav-link" href="#">Welcome ,{name}<span class="sr-only"></span></a> 
      </li>
    </ul>
  </div>
</nav>

      <div className="container">
        
        <div className="row">
          <div className="col">
            <BrowserRouter>
              <nav className="navbar navbar-expand-sm navbar-light bg-light">
                <div className="container-fluid">
                  <a className="navbar-brand" href="#">
                   Admin Portal
                  </a>
                  <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarNav"
                    aria-controls="navbarNav"
                    aria-expanded="true"
                    aria-label="Toggle navigation"
                  >
                    <span className="navbar-toggler-icon"></span>
                  </button>
                  <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                      <li className="nav-item"></li>
                      <li className="nav-item">
                        <LoginButton status={isLoggedIn} />
                      </li>
                    </ul>
                  </div>
                </div>
              </nav>
              <div className="container">
                <Switch>
                  
                  <Route path="/login" component={LoginPage} />
                  <Route path="/signup" component={SignUp} />
                  <Route path="/admin" component={AdminHome} />
                  <Route path="/manager" component={ManagerHome} />
                  <Route path="/employee" component={EmployeeHome} />
                  <Route path="/view-products" component={ViewProducts} />
                  {/* <Route path="/" component={Home}/> */}
                  <Route
                    path="/viewproducts-category/:id"
                    component={ViewProductsCategory}
                  />
                  <Route
                    path="/customer-products/:id"
                    component={ViewPurchases}
                  />
                  <Route path="/update-product/:id" component={UpdateProduct} />
                  <Route path="/add-category" component={AddCategory} />
                  <Route path="/add-product" component={AddProduct} />
                  <Route path="/view-orders" component={ViewOrders} />
                  <Route path="/view-staff" component={ViewStaff} />
                  <Route path="/view-reviews" component={ViewReviews} />
                  <Route path="/add-staff" component={AddStaff} />
                  <Route path="/view-customers" component={ViewCustomers} />
                  <Route
                    path="/view-customised"
                    component={ViewCustomisedProductRequests}
                  />
                  <Route
                    path="/view-orders-manager"
                    component={ManagerViewOrders}
                  />

                  <Route path="/staff-orders" component={StaffOrders}></Route>
                </Switch>
              </div>
            </BrowserRouter>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
