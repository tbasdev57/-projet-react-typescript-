import React, { ReactElement } from 'react'
import styled from 'styled-components'

const PopularSections = styled.section`
  margin: 2rem 1.2rem;
  border-radius: 0.5rem;
  max-width: 500px;
  height: 25vh;
  background-color: pink;
  background-image: linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.8)),
    url('https://images.unsplash.com/photo-1446080501695-8e929f879f2b?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&s=34658e73aff775c8d4eec54bbfd1c011');
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  display: flex;
  align-items: center;
  align-content: space-between;
  justify-content: flex-start;
`

const TextContainer = styled.div`
  text-align: left;
  padding: 0 3rem;
  display: flex;
  flex-direction: column;
  align-content: center;
  jutify-content: stretch;
`

export default function PopularPodcast(): ReactElement {
  return (
    <PopularSections>
      <TextContainer>
        <h2>Podcast à la une</h2>
        <p>Partir à l'étranger quand on télétravail</p>
        <p>Zoé et Martin</p>
      </TextContainer>
    </PopularSections>
  )
}
