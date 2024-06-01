import React from 'react'
import { render } from 'react-dom'
import styled from 'styled-components'
import App from './App'
import './css/global.css'

const root = document.getElementById('root')

if (!root) {
  throw new Error("Oups, il n'y a pas d'élément #root")
}

render(<App />, root)
