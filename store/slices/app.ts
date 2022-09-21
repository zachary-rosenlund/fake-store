import { createSlice } from '@reduxjs/toolkit'

export const appSlice = createSlice({
  name: 'app',
  initialState: {
    categories: [],
    login: false,
    username: null,
  },
  reducers: {
    setCategories: (state, action) => {
      state.categories = action.payload
    },
    setLoginStatus: (state, action) => {
      state.login = action.payload
    },
    setUsername: (state, action) => {
      state.username = action.payload
    },
  }
});

export const { setCategories, setLoginStatus, setUsername } = appSlice.actions

export const login = (username: string, password: string) => (dispatch) => {
  // TODO: implement a mock login flow by storing a token from 'https://fakestoreapi.com/auth/login'

  // Had issues with CORS/API request timeouts, switched to manual login info
  // fetch('https://fakestoreapi.com/auth/login', {
  //   method: 'POST',
  //   body: JSON.stringify({
  //     username: username,
  //     password: password
  //   })
  // })
  //   .then(res => res.json())
  //   .then(dispatch(setLoginStatus(true)))
  //   .then(data => dispatch(setLoginToken(data)))

  if (username == "user" && password == "admin") {
    dispatch(setLoginStatus(true));
    dispatch(setUsername("Person"));
  }
}

export const getAndSetCategories = () => (dispatch) => {
  fetch('https://fakestoreapi.com/products/categories')
    .then(res => res.json())
    .then(data => dispatch(setCategories(data)))
}

export const selectCategories = (state) => state.app.categories
export const getLoginStatus = (state) => state.app.login
export const getUsername = (state) => state.app.username

export default appSlice.reducer
