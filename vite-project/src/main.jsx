import React from 'react'
import ReactDOM from 'react-dom/client'
import {ThemeProvider} from "styled-components"

import { Profile } from './pages/Profile'
import { NewCar } from './pages/NewCar'
import {Details} from './pages/Details'
import { SignUp } from './pages/SingUp'
import { SignIn } from './pages/SingIn'
import { Home } from './pages/Home'

import theme from "./styles/temas"
import GlobalStyle from "./styles/global"

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyle/>
      <Profile/>
    </ThemeProvider>
  </React.StrictMode>,
)

   // <Details marca="VolksWagem" modelo="Gol Quadrado GTI"/>
