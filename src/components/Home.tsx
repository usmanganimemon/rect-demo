import  React from "react";
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import HomeSlider from "./HomeSlider";
import Blog from "./Blog";

const Home = () => {
  return (
    <>
      <Row>
        <Col md={12}>
            <HomeSlider />
        </Col>
      </Row>
      <Blog textPosition={1} />
      <Blog textPosition={2} />
    </>
  )
}
export default Home