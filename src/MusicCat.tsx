import React, { ReactElement } from 'react'
import ReactDOM from 'react-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import styled from 'styled-components'
import './css/global.css'
import { faMusic } from '@fortawesome/free-solid-svg-icons'
import CategoriesName from './CategoriesName'

export default function MusicCat(): ReactElement {
  return (
    <div className="categories music">
      <FontAwesomeIcon icon={faMusic} />
      <CategoriesName>Musique</CategoriesName>
    </div>
  )
}
