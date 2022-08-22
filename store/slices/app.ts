import { createSlice } from '@reduxjs/toolkit'

export const appSlice = createSlice({
  name: 'app',
  initialState: {
    categories: []
  },
  reducers: {
    setCategories: (state, action) => {
      state.categories = action.payload
    }
  },
})

export const { setCategories } = appSlice.actions

export const login = (username, password) => (dispatch) => {
  // TODO: implement a mock login flow by storing a token from 'https://fakestoreapi.com/auth/login'
}

export const getAndSetCategories = () => (dispatch) => {
  fetch('https://fakestoreapi.com/products/categories')
    .then(res => res.json())
    .then(data => dispatch(setCategories(data)))
}

export const selectCategories = (state) => state.app.categories

export default appSlice.reducer
