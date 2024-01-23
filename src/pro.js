import React, { useEffect, useState } from "react";
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

export default function ApiPro() {
  const [value, setValue] = useState();

  const apiCall = () => {
    fetch("https://fakestoreapi.com/products?limit=12")
      .then((res) => res.json())
      .then((json) => {setValue(json); 
        console.log(value);
      });
  };

  useEffect(() => {
    apiCall();
  }, []);

  console.log(value);

  if (value) {
    return (
      <div className="container mt-5"> 
        <Row xs={1} md={4} className="g-4">
      {value.map((products) => (
        <Col >
          <Card  variant="primary">
            <Card.Img className="p-4" variant="top" src={products.image} width="150" height="300"/>
            <Card.Body>
              <Card.Title><u>No.{products.id}</u><br/> {products.title}</Card.Title>
              <Card.Text>
              Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
       </div>
    );
  } else {
    return <></>;
  }
}