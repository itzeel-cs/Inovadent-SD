import * as React from 'react'


//CSS
import './assets/css/App.css'
//local components
import Component from './Component'
// MUI
import PropTypes from 'prop-types'

import Stack from '@mui/material/Stack'
//import { styled } from '@mui/material/styles'

import Navbar from './Components/Navbar'
import Hero from './Components/Hero'
//Font awesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import '@fortawesome/fontawesome-free/css/all.min.css'

function App() {
  return (
    <>
    <body >
      <header>
        <Navbar /> 
      </header>
      <body>
        <Hero />
      </body>

    </body>
      
      
    </>
  )
}

export default App
