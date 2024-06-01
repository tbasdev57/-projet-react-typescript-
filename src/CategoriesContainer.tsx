import React, { ReactElement } from 'react'
import ReactDOM from 'react-dom'
import styled from 'styled-components'
import './css/global.css'
import MusicCat from './MusicCat'
import ImagesCat from './ImagesCat'
import PodcastCat from './PodcastCat'
import ChatCat from './ChatCat'

const CatSection = styled.section`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  align-content: center;
  margin: 1rem;
`

export default function CategoriesContainer(): ReactElement {
  return (
    <CatSection>
      <MusicCat></MusicCat>
      <ImagesCat></ImagesCat>
      <PodcastCat></PodcastCat>
      <ChatCat></ChatCat>
    </CatSection>
  )
}
