import React, { useState } from "react";
import axios from "axios";
import { useForm } from "react-hook-form";
import { Button, Col, Nav, Navbar, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
///npm install react-hook-form@6.13.1
const AdminPage = () => {
  const [imageURL, setImageURL] = useState(null);
  const { register, handleSubmit} = useForm();
  const onSubmit = (data) => {
    const formData = {
      name: data.name,
      price: data.price,
      imageURL: imageURL,
    };

    const url = `https://still-harbor-76163.herokuapp.com/addFormData`;

    fetch(url, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(formData),
    }).then((res) => console.log("server side connected"));
  };

  const handleImageUpload = (event) => {
    const imageData = new FormData();
    imageData.set("key", "fcc1a0bf90a04b096cc420be501cf558");
    imageData.append("image", event.target.files[0]);
    axios
      .post("https://api.imgbb.com/1/upload", imageData)
      .then(function (response) {
        setImageURL(response.data.data.display_url);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  return (
    <div>
<Navbar bg="dark" variant="dark" expand="lg">
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="m-auto">
    <Link className='link-white' to="/manage">Manage Product</Link>
      <Link className='link-white' href="/adminPage">Add Product</Link>
      <Link className='link-white' href="/adminPage/edit">Edit Product</Link>
    </Nav>
  </Navbar.Collapse>
</Navbar>


      <form className="container my-5" onSubmit={handleSubmit(onSubmit)}>
        <Row className="my-5">
          <Col>
            {" "}
            <label>Product Name</label>
            <br />
            <input
              name="name"
              placeholder="Enter Name"
              ref={register({ required: true })}
            />
          </Col>
          <Col>
            {" "}
            <label>Price</label>
            <br />
            <input
              name="price"
              placeholder="Enter Price"
              type="number"
              ref={register({ required: true, maxLength: 10 })}
            />
          </Col>
        </Row>
        <Row>
          <Col>
            <label>Add Photo</label>
            <br />
            <input name="file" type="file" onChange={handleImageUpload} />
          </Col>
          <Col>
          <br />
            <input type="submit" />
          </Col>
        </Row>
      </form>
    </div>
  );
};

export default AdminPage;
