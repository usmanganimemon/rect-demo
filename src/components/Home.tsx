import  React from "react";
import Carousel from 'react-bootstrap/Carousel'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import Image from 'react-bootstrap/Image'
const SlideImage = require('../assets/img/slide_2.jpg')
const categoryImage = require('../assets/img/cat_1.png')

const Home = () => {
  return (
    <>
      <Row>
        <Col md={12}>
          <Carousel variant="dark">
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={SlideImage}
                alt="First slide"
              />
              <Carousel.Caption>
                <h5>First slide label</h5>
                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={SlideImage}
                alt="First slide"
              />
              <Carousel.Caption>
                <h5>First slide label</h5>
                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </Col>
      </Row>
      <Row className="mt-5 category-wrap">
        <Col md={6} className="category-text first-order">
          <div className="categoryContent">
            <h1 className="mt-5">First Category</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut sunt unde necessitatibus ipsam ad error? Dolor aliquam nostrum veniam repellendus!</p>
            <Button className="mt-5" variant="light">View More</Button>
          </div>
        </Col>
        <Col md={6} className="second-order">
          <Image src={categoryImage} height={400} width={600} />
        </Col>
      </Row>
      <Row className="mt-5 category-wrap">
        <Col md={6} className="category-text second-order">
          <div className="categoryContent">
            <h1 className="mt-5">Second Category</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut sunt unde necessitatibus ipsam ad error? Dolor aliquam nostrum veniam repellendus!</p>
            <Button className="mt-5" variant="light">View More</Button>
          </div>
        </Col>
        <Col md={6} className="first-order">
          <Image src={categoryImage} height={400} width={600} />
        </Col>
      </Row>
    </>
  )
}
export default Home