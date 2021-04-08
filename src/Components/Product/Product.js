import React from "react";
import { Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import './product.css'
const Product = (props) => {
  const { name, price, imageURL,_id} = props.item;
  return (
    <div className="col-md-3 my-3">
      <div className='card card-body h-100'>
        <Card.Img variant="top" src={imageURL} />
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <div>
            <Card.Text className='d-flex justify-content-between align-items-center '>
              <p>${price}</p>
              <Button  variant="danger"><Link className='button-text' to={`/checkout/${_id}`}>Buy Now</Link></Button>
            </Card.Text>
          </div>
        </Card.Body>
      </div>
    </div>
  );
};

export default Product;
