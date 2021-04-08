import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../App';

const OrderPage = () => {
  const [loggedInUser,setLoggedInUser]=useContext(UserContext)
  const [order,setOrder]=useState([])
  useEffect(() => {
    fetch('https://still-harbor-76163.herokuapp.com/order')
    .then(res => res.json())
    .then(data => setOrder(data))
  },[])
  console.log(order)
  return (
    <div className='container text-center mt-5'>
      <h4>Order Summary of: {loggedInUser.email}</h4>
      <h3>You have: {order.length} orders.</h3>
      {
        order.map(order => <div>
          <li>Product name: {order.name}</li>
          <li>Price: {order.price}</li>
        </div>)
      }
    </div>
  );
};

export default OrderPage;