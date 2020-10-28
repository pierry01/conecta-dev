import React from 'react'
import { ThemeProvider } from '@material-ui/core/styles'
import theme from './theme'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Home from './pages/Home'
import SignIn from './pages/SignIn'

import './mock'

function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/sign-in' element={<SignIn />} />
          <Route path='*' element={<h1> Not found 404! </h1>} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  )
}

export default App
