import  React from "react";
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import HomeSlider from "./HomeSlider";
import { useAppSelector, useAppDispatch } from './../store/hooks'
import { increment, decrement } from '../store/slices/testSlice'
import Blog from "./Blog";
import Button from 'react-bootstrap/Button'

const Home = () => {
  const count = useAppSelector((state) => state.test.value)
  const dispatch = useAppDispatch()
  return (
    <>
      <Row>
        <Col md={12}>
          <HomeSlider />
        </Col>
      </Row>
      <Blog textPosition={1} />
      <Blog textPosition={2} />
      Count: {count}
      <Button className="mt-5" variant="light" onClick={() => dispatch(increment())}>+</Button>
      <Button className="mt-5" variant="light" onClick={() => dispatch(decrement())}>-</Button>
    </>
  )
}
export default Home