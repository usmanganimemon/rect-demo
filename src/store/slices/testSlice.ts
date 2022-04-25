import { createSlice, PayloadAction, createAsyncThunk } from '@reduxjs/toolkit'
import type { RootState } from '../store'
import axios from 'axios'

interface CounterState {
  value: number,
  post: any
}

const initialState: CounterState = {
  value: 0,
  post: []
}
export const fetchPost = createAsyncThunk(
  'post/fetch',
  async () => {
    const response = await axios.get('https://jsonplaceholder.typicode.com/posts')
    return response.data
  }
)
export const TestSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: state => {
      state.value += 1
    },
    decrement: state => {
      state.value -= 1
    },
    incrementByAmount: (state, action: PayloadAction<number>) => {
      state.value += action.payload
    }
  },
  extraReducers: (builder) => {
    builder.addCase(fetchPost.fulfilled, (state, action) => {
      state.post = action.payload
    })
      .addCase(fetchPost.rejected, (state) => {
        state.post = []
      })
  },
})

export const { increment, decrement, incrementByAmount } = TestSlice.actions

// Other code such as selectors can use the imported `RootState` type
export const selectCount = (state: RootState) => state.test.value

export default TestSlice.reducer