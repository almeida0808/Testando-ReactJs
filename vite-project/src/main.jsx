import React from 'react'
import ReactDOM from 'react-dom/client'
import {Details} from './pages/Details'
import { Home } from './pages/Home'
import {ThemeProvider} from "styled-components"
import theme from "./styles/temas"
import GlobalStyle from "./styles/global"
import { NewCar } from './pages/NewCar'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyle/>
      <NewCar/>
    </ThemeProvider>
  </React.StrictMode>,
)

   // <Details marca="VolksWagem" modelo="Gol Quadrado GTI"/>
