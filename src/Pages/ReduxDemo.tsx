import React from 'react'
import { fetchPost } from '../store/slices/testSlice'
import { useAppDispatch } from '../store/hooks'
const ReduxDemo = () => {
  const dispatch = useAppDispatch()
  dispatch(fetchPost())
  return (
    <>
      <h1>Redux demo</h1>
    </>
  )
}
export default ReduxDemo