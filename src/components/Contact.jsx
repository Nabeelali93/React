import { Formik } from 'formik';
import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
function Contact() {
  return (

  <div style={{marginTop:"70px"}}>
    

    <Container>
      <Row>
<Col>



<Form>
      <Form.Group as={Row} className="mb-3" controlId="formHorizontalEmail">
        <Form.Label column sm={2}>
          Email
        </Form.Label>
        <Col sm={10}>
          <Form.Control type="email" placeholder="Email" />
        </Col>
      </Form.Group>

      <Form.Group as={Row} className="mb-3" controlId="formHorizontalPassword">
        <Form.Label column sm={2}>
          Password
        </Form.Label>
        <Col sm={10}>
          <Form.Control type="password" placeholder="Password" />
        </Col>
      </Form.Group>
      <fieldset>
        <Form.Group as={Row} className="mb-3">
          <Form.Label as="legend" column sm={2}>
            Gander
          </Form.Label>
          <Col sm={10}>
            <Form.Check
              type="radio"
              label="Male"
              name="formHorizontalRadios"
              id="formHorizontalRadios1"
            />
            <Form.Check
              type="radio"
              label="Female"
              name="formHorizontalRadios"
              id="formHorizontalRadios2"
            />
           
          </Col>
        </Form.Group>
      </fieldset>
      <Form.Group as={Row} className="mb-3" controlId="formHorizontalCheck">
        <Col sm={{ span: 10, offset: 2 }}>
          <Form.Check label="Remember me" />
        </Col>
      </Form.Group>

      <Form.Group as={Row} className="mb-3">
        <Col sm={{ span: 10, offset: 2 }}>
          <Button type="submit">Sign in</Button>
        </Col>
      </Form.Group>
    </Form>

</Col>

<Col>

<iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14416.854808272847!2d68.3642777!3d25.3976563!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x394c71b4e570aba5%3A0x44ff37858d6da3f3!2sSMIT%20Hyderabad!5e0!3m2!1sen!2s!4v1683839263369!5m2!1sen!2s" width="600" height="350" style={{border:0, allowfullscreen:"", loading:"lazy", referrerpolicy:"no-referrer-when-downgrade"}}></iframe>

</Col>

      </Row>
    </Container>


    <div className="container" style={{marginTop:"20px"}}>
      <h1 style={{textAlign:"center"}}>Contact Us</h1>
      <br />

         
 
    </div>

    </div>
  );
}


export default Contact


