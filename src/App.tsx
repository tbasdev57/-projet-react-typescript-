import React, { ReactElement } from 'react'
import Header from './Header'
import Footer from './Footer'
import Hero from './Hero'
import './css/global.css'
import SearchBar from './SearchBar'
import CategoriesContainer from './CategoriesContainer'
import Popular from './Popular'
import LastActivities from './LastActivities'
import PopularPodcast from './PopularPodcat'
import PopularChat from './PopularChat'
import PopularImg from './PopularImg'
import PopularSong from './PopularSong'

export default function App(): ReactElement {
  return (
    <body>
      <Header></Header>
      <SearchBar></SearchBar>
      <Hero></Hero>
      <CategoriesContainer></CategoriesContainer>
      <Popular></Popular>
      <LastActivities></LastActivities>
      <PopularPodcast></PopularPodcast>
      <PopularChat></PopularChat>
      <PopularImg></PopularImg>
      <PopularSong></PopularSong>
      <Footer></Footer>
    </body>
  )
}
