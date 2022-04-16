import Dropdown from 'react-bootstrap/Dropdown'
import Industry from './images/industry.jpg'
import './App.css';
import { BrowserRouter, Link, Route, Switch } from 'react-router-dom';
import Login from './pages/Login';
import SignUp from './components/SignUp';
import ProductDetails from './components/ProductDetails';
import Home from './pages/Home';
import Shop from './pages/Shop';
import CustomerServices from './pages/CustomerServices';
import { useSelector } from 'react-redux';
import LoginButton from './components/LoginButton';
import React from 'react';




import { useState } from 'react';
import ViewProfile from './components/ViewProfile';
import UpdateProfile from './components/UpdateProfile';
import { Row } from 'react-bootstrap';
import { Col } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import { addToCart } from './actions/cartActions';
import ViewCart from './pages/ViewCart';
import Popup from './components/popup';
import ViewOrders from './components/viewOrders';
import Payment from './pages/Payment';
import AddCustomisedProduct from './components/AddCustomisedProduct';
import Home1 from './pages/Home1';

function App() {
  const [buttonPopup, setButtonPopup] = useState(false);
  const [buttonPopup1, setButtonPopup1] = useState(false);

  const name = useSelector((state) => state.loggedUser.firstName)
  const id = useSelector((state) => state.loggedUser.cid)

  const isLoggedIn = id !== 0
  console.log(isLoggedIn)

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




    <div>
      <div className="container-fluid">
        
      <BrowserRouter>
        <nav className="navbar navbar-expand-sm navbar-light bg-light">
          <div className="container-fluid">
            <a className="navbar-brand" href="#">
              Customer Portal
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="true"
              aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav">
              
                <li>
                  <Link className="nav-link" to="/shop">
                    Shop
                  </Link>
                </li>
                <li>
                <Dropdown>
                  <Dropdown.Toggle variant="white" id="dropdown-basic" >  
                    Customer Services
                  </Dropdown.Toggle>
                  <Dropdown.Menu>
                    <Link to="/view-profile">
                      <Dropdown.Item href="#/action-1">View Profile</Dropdown.Item>
                    </Link >
                    <Link to="/view-cart">
                    <Dropdown.Item href="#/action-2">View Cart</Dropdown.Item>
                    </Link>
                    <Link to = "view-orders">
                    <Dropdown.Item href="#/action-3">View Orders</Dropdown.Item>
                    </Link>
                    <Link to = "add-customised-product">
                    <Dropdown.Item href="#/action-4">Add Customised Product</Dropdown.Item>
                    </Link>
                  </Dropdown.Menu>
                </Dropdown>
                </li> 
                  <LoginButton status = {isLoggedIn} />
                <li>

                </li>
              </ul>
            </div>
          </div>
        </nav>
    {/* <Shop/>  */} 
        <div className='container'>
          <Switch>
         
            <Route path = '/login' component = {Login}/ >
            <Route path = '/signup' component = {SignUp}/ >
            <Route path = '/home' component = {Home}/ >
            <Route path = '/shop' component = {Shop}/ >
            <Route path = '/cust-service' component = {CustomerServices}/ >
            <Route path = '/view-profile' component = {ViewProfile}/ >
            <Route path = '/update-profile' component = {UpdateProfile}/ >
            <Route path = '/product-details/:id' component ={ProductDetails}></Route>
            <Route path = '/view-cart' component ={ViewCart}></Route>
            <Route path = '/popup' component ={Popup}></Route>
            <Route path = '/view-orders' component ={ViewOrders}></Route>
            <Route path = '/payment' component = {Payment} ></Route>
            
            <Route path = '/add-customised-product' component ={AddCustomisedProduct}></Route>
            <Route path = '/' component = {Home1}/ >
          </Switch>
        </div>
      </BrowserRouter>
      
    </div>
    </div>

    
    </>
  )
}
export default App