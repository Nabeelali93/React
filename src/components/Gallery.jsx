import React from 'react'
import img1 from '../assets/fashion1.jpg'
import img2 from '../assets/fashion2.jpg'
import img3 from '../assets/fashion3.jpg'
import img4 from '../assets/fashion4.jpg'
import img5 from '../assets/fashion5.jpg'
import img6 from '../assets/fashion6.jpg'





import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
export default function Gallery() {
  return (
    <div style={{marginTop:"100px"}}>
        
        <div className="container">
            <div className="row">
                <div className="col" lg-3 md-4 sm-6 col-12>
                <Card style={{ width: '18rem' }}>
    <Card.Img variant="top" src={img1} />
    <Card.Body>
      <Card.Title>Card Title</Card.Title>
      <Card.Text>
        Some quick example text to build on the card title and make up the
        bulk of the card's content.
      </Card.Text>
      <Button variant="primary">Go somewhere</Button>
    </Card.Body>
  </Card>
                </div>

                <div className="col" lg-3 md-4 sm-6 col-12>
                <Card style={{ width: '18rem' }}>
    <Card.Img variant="top" src={img2} />
    <Card.Body>
      <Card.Title>Card Title</Card.Title>
      <Card.Text>
        Some quick example text to build on the card title and make up the
        bulk of the card's content.
      </Card.Text>
      <Button variant="primary">Go somewhere</Button>
    </Card.Body>
  </Card>
                </div>


                <div className="col" lg-3 md-4 sm-6 col-12>
                <Card style={{ width: '18rem' }}>
    <Card.Img variant="top" src={img3} />
    <Card.Body>
      <Card.Title>Card Title</Card.Title>
      <Card.Text>
        Some quick example text to build on the card title and make up the
        bulk of the card's content.
      </Card.Text>
      <Button variant="primary">Go somewhere</Button>
    </Card.Body>
  </Card>
                </div>


                <div className="col" lg-3 md-4 sm-6 col-12>
                <Card style={{ width: '18rem' }}>
    <Card.Img variant="top" src={img4} />
    <Card.Body>
      <Card.Title>Card Title</Card.Title>
      <Card.Text>
        Some quick example text to build on the card title and make up the
        bulk of the card's content.
      </Card.Text>
      <Button variant="primary">Go somewhere</Button>
    </Card.Body>
  </Card>
                </div>

                <div className="col" lg-3 md-4 sm-6 col-12>
                <Card style={{ width: '18rem' }}>
    <Card.Img variant="top" src={img5} />
    <Card.Body>
      <Card.Title>Card Title</Card.Title>
      <Card.Text>
        Some quick example text to build on the card title and make up the
        bulk of the card's content.
      </Card.Text>
      <Button variant="primary">Go somewhere</Button>
    </Card.Body>
  </Card>
                </div>

                <div className="col" lg-3 md-4 sm-6 col-12>
                <Card style={{ width: '18rem' }}>
    <Card.Img variant="top" src={img6} />
    <Card.Body>
      <Card.Title>Card Title</Card.Title>
      <Card.Text>
        Some quick example text to build on the card title and make up the
        bulk of the card's content.
      </Card.Text>
      <Button variant="primary">Go somewhere</Button>
    </Card.Body>
  </Card>
                </div>

            </div>
        </div>
   
  
  

  


  
  </div>
  )
}
