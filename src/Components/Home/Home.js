
import React, { useContext, useEffect, useState } from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { UserContext } from '../../App';
import Product from '../Product/Product';
import './Home.css'

const Home = () => {
const [loggedInUser,setLoggedInUser]=useContext(UserContext);
const[items, setItems]=useState([])
useEffect(() => {
  fetch('https://still-harbor-76163.herokuapp.com/products')
  .then(res => res.json())
  .then(data => setItems(data));
},[])


  return (
    <div className='container' >
     <Navbar className='container' bg="light" expand="lg">
  <Navbar.Brand href="#home">Cozy Tea Shop</Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="ml-auto link-nav-bar">
      <Link className='links' to="/">Home</Link>
      <Link className='links' to="/order">Orders</Link>
      <Link className='links' to="/adminPage">Admin</Link>
      <Link className='links' to="/login">{loggedInUser.email ? loggedInUser.email : 'Log In'}</Link>
    </Nav>
  </Navbar.Collapse>
</Navbar>
<div className='row'>
  {
    items.map(item => <Product  key={item._id} item ={item}></Product>)
  }

</div>
    </div>
  );
};

export default Home;