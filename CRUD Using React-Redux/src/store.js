import { configureStore } from '@reduxjs/toolkit'
import usersReducers from './features/users/userSlice'

export const store = configureStore({
  reducer: {
    users: usersReducers,
  },
})