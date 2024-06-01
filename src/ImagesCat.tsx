import React, { ReactElement } from 'react'
import ReactDOM from 'react-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import styled from 'styled-components'
import './css/global.css'
import { faCamera } from '@fortawesome/free-solid-svg-icons'
import CategoriesName from './CategoriesName'

export default function ImagesCat(): ReactElement {
  return (
    <div className="categories images">
      <FontAwesomeIcon icon={faCamera} />
      <CategoriesName>Image</CategoriesName>
    </div>
  )
}
