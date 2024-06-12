import React from 'react'
import { useRoutes } from 'react-router-dom'
import path from 'src/constants/path'
import ForgotPassword from 'src/pages/ForgotPassword/ForgotPassword'
import HomePage from 'src/pages/HomePage/HomePage'
import LoginPage from 'src/pages/LoginPage/LoginPage'

export default function RouterElements() {
  const routerElements = useRoutes([
    {
      index: true,
      path: path.home,
      element: <HomePage />
    },
    {
      path: path.login,
      element: <LoginPage />
    },
    {
      path: path.forgotpassword,
      element: <ForgotPassword />
    }
  ])
  return routerElements
}
