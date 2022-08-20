import { createSlice } from '@reduxjs/toolkit'

export const appSlice = createSlice({
  name: 'app',
  initialState: {
    user: null,
    categories: []
  },
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload
    },
    setCategories: (state, action) => {
      state.categories = action.payload
    }
  },
})

export const { setUser, setCategories } = appSlice.actions

export const login = (username, password) => (dispatch) => {
  fetch('https://fakestoreapi.com/auth/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      username,
      password
    })
  })
    .then(res => res.json())
    .then(data => dispatch(setUser(data)))
}

export const getAndSetCategories = () => (dispatch) => {
  fetch('https://fakestoreapi.com/products/categories')
    .then(res => res.json())
    .then(data => dispatch(setCategories(data)))
}

export const selectUser = (state) => state.app.user
export const selectCategories = (state) => state.app.categories

export default appSlice.reducer
