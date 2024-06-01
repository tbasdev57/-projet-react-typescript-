import React, { ReactElement } from 'react'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './css/global.css'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'

const SearchContainer = styled.div`
  height: 6vh;
  margin: 1.2rem;
  border-radius: 0.5em;
  background: var(--white);
  display: flex;
  align-content: center;
  align-items: center;
  color: var(--black);
  justify-content: flex-start;
  padding: 0 2rem;
`

const Search = styled.input`
  background: var(--white);
  color: var(--dark-grey);
  font-family: Raleway;
  width: 300px;
  outline: none;
  border: none;
  padding-left: 2rem;
`

export default function SearchBar(): ReactElement {
  return (
    <SearchContainer>
      <FontAwesomeIcon icon={faMagnifyingGlass} />
      <Search placeholder="Rechercher sur l'application"></Search>
    </SearchContainer>
  )
}
