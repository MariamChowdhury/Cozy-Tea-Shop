import React, { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import './Manage.css'

const Manage = () => {
  const[items, setItems]=useState([])
useEffect(() => {
  fetch('https://still-harbor-76163.herokuapp.com/products')
  .then(res => res.json())
  .then(data => setItems(data));
},[])
const handleDelete=(id) => {
  console.log(id)
  fetch(`https://still-harbor-76163.herokuapp.com/${id}`,{
    method:'DELETE'
  })
  .then(res => res.json())
  .then(result=>{
  })
}
  return (
    <div className='container '>
    {
      items.map(item => <div className='mx-4 design'>
        <h5>Name: {item.name}</h5>
        <h5>Price: {item.price}</h5>
        <Button variant='danger' onClick={() => {handleDelete(item._id)}}>Delete</Button>
      </div>
      )
    }
    </div>
  );
};

export default Manage;