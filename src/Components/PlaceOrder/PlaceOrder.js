import React, { useContext } from 'react';
import { UserContext } from '../../App';

const PlaceOrder = () => {
  const [loggedInUser,setLoggedInUser]=useContext(UserContext);
  return (
    <div>
      <h4>Order placed successfully for: {loggedInUser.email}</h4>
      
    </div>
  );
};

export default PlaceOrder;