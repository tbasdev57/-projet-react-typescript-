import React, { ReactElement } from 'react'
import styled from 'styled-components'

const HeroSection = styled.section`
  margin: 2rem 1.2rem;
  border-radius: 0.5rem;
  max-width: 500px;
  height: 25vh;
  background: linear-gradient(
    to left,
    #23a6d5,
    #4a148c,
    #ff0066,
    #4a148c,
    #23a6d5
  );
  background-size: 400% 400%;
  animation: gradientTranisition 50s linear infinite;
  display: flex;
  align-items: center;
  align-content: space-between;
  justify-content: flex-start;
  @keyframes gradientTranisition {
    0% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 200% 50%;
    }
  }
`

const TextContainer = styled.div`
  text-align: left;
  padding: 0 3rem;
  display: flex;
  flex-direction: column;
  align-content: center;
  jutify-content: stretch;
`

export default function Hero(): ReactElement {
  return (
    <HeroSection>
      <TextContainer>
        <h1>
          Bienvenue
          <br />
          sur l'application
        </h1>
        <p>Parcourir les médias</p>
      </TextContainer>
    </HeroSection>
  )
}
