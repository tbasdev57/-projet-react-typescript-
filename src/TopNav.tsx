import React, { ReactElement } from 'react'
import ReactDOM from 'react-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import styled from 'styled-components'
import './css/global.css'
import { faCog, faBell } from '@fortawesome/free-solid-svg-icons'
import Hello from './Hello'

const NavContainer = styled.div`
  position: relative;
  max-width: 100%;
  min-height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  align-content: center;
  padding: 0 1.2rem;
`

const IconsContainer = styled.div`
  min-height: 100%;
  padding: 1.2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  align-content: center;
  color: var(--white);
  font-size: 1rem;
`

export default function TopNav(): ReactElement {
  return (
    <NavContainer>
      <Hello name="Alex" age={28}></Hello>
      <IconsContainer>
        <FontAwesomeIcon className="icons" icon={faBell} />
        <FontAwesomeIcon className="icons" icon={faCog} />
      </IconsContainer>
    </NavContainer>
  )
}
