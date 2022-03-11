import React from "react";
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import Image from 'react-bootstrap/Image'
const categoryImage = require('../assets/img/cat_1.png')
type BlogType = {
    textPosition: number
}
const BlogItem = ({ textPosition }: BlogType) => {
  return (
    <>
      <Row className="mt-5 category-wrap">
        <Col md={6} className={`category-text ${textPosition === 1 ? 'order-1' : 'order-2'}`}>
          <div className="categoryContent">
            <h1 className="mt-5">First Category</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut sunt unde necessitatibus ipsam ad error? Dolor aliquam nostrum veniam repellendus!</p>
            <Button className="mt-5" variant="light">View More</Button>
          </div>
        </Col>
        <Col md={6} className={`category-text ${textPosition === 1 ? 'order-2' : 'order-1'}`}>
          <Image src={categoryImage} height={400} width={600} />
        </Col>
      </Row>
    </>
  )
}
export default BlogItem