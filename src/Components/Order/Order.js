import React, { useContext, useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import { useParams } from 'react-router';
import { UserContext } from '../../App';


const Order = () => {
  const[loggedInUser,setLoggedInUser]=useContext(UserContext)

  const { id } = useParams();
 
  
  const handleCheckOut= () => {
    alert(`Order placed successfully for ${loggedInUser.email}`)
    const orderInfo={...loggedInUser,...product}
    fetch('https://still-harbor-76163.herokuapp.com/order',{
      method:'POST',
      headers:{"Content-Type":"application/json"},
      body:JSON.stringify(orderInfo)
    })
    .then(res => res.json())
    .then(data => console.log(data));
  }
  const [product, setProduct] = useState([]);
  useEffect(() => {
    const url = `https://still-harbor-76163.herokuapp.com/${id}`
    fetch(url)
      .then(res => res.json())
      .then(data => setProduct(data))
  }, [id])
  return (
    <div className='container mt-5'>
      {
        product.map(pd =>
          <div className='container'>
            <h3>Name: {pd.name}</h3>
            <h4>Quantity: 1</h4>
            <h5>Price: {pd.price}</h5>
            <Button  variant="danger" onClick={handleCheckOut}>Place Order</Button>
          </div>
        )
      }
    </div>
  );
    }
export default Order;