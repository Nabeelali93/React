import Carousel from 'react-bootstrap/Carousel';

import img7 from '../assets/fashion7.jpg'

import img1 from '../assets/fashion1.jpg'
import img2 from '../assets/fashion2.jpg'
import img3 from '../assets/fashion3.jpg'
import img4 from '../assets/fashion4.jpg'
import img5 from '../assets/fashion5.jpg'
import img6 from '../assets/fashion6.jpg'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


function Slider() {
  return (
    <>
  <div  style={{marginTop:"50px"}}>
  <Carousel >
      <Carousel.Item  style={{ maxHeight: '500px' }}>
        <img
          className="d-block w-100"
          src={img5}
          alt="First slide"
        />
        
      </Carousel.Item>


      <Carousel.Item   style={{ maxHeight: '500px' }}>
        <img
        style={{height:"10"}}
          className="d-block w-100 "
          src={img6}
          alt="Second slide"
        />

        
      </Carousel.Item>


      <Carousel.Item style={{ maxHeight: '500px', objectFit:"contain" }}>
        <img
          className="d-block w-100 "
          src={img7}
          alt="Third slide"
        />

        
      </Carousel.Item>


    </Carousel>


<div style={{marginTop:"50px"}}>
<div className="container">


            <div className="row">


            <div className="col" lg-3 md-4 sm-6 col-12>
                <Card style={{ width: '18rem' }}>
    <Card.Img variant="top" src={img1} />
    <Card.Body>
      <Card.Title>30% OFF</Card.Title>
      <Card.Text>
       New Fashion
      </Card.Text>
      <Button variant="primary">Order Now</Button>
    </Card.Body>
  </Card>
                </div>

                <div className="col" lg-3 md-4 sm-6 col-12>
                <Card style={{ width: '18rem' }}>
    <Card.Img variant="top" src={img2} />
    <Card.Body>
      <Card.Title>40% OFF</Card.Title>
      <Card.Text>
      New Fashion
      </Card.Text>
      <Button variant="primary">Order Now</Button>
    </Card.Body>
  </Card>
                </div>

                <div className="col" lg-3 md-4 sm-6 col-12>
                <Card style={{ width: '18rem' }}>
    <Card.Img variant="top" src={img3} />
    <Card.Body>
      <Card.Title>10% OFF UPTO</Card.Title>
      <Card.Text>
      New Fashion
      </Card.Text>
      <Button variant="primary">Order Now</Button>
    </Card.Body>
  </Card>
                </div>




            </div>
        </div>
        </div>
  </div>

        </>

  );
}

export default Slider;