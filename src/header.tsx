import React, { ReactElement } from 'react'
import styled from 'styled-components'
import './css/global.css'
import TopNav from './TopNav'
const HeaderTop = styled.header`
  min-width: 100vw;
  min-height: 10vh;
  /* background: var(--dark-grey); */
`

export default function Header(): ReactElement {
  return (
    <HeaderTop>
      <TopNav></TopNav>
    </HeaderTop>
  )
}
