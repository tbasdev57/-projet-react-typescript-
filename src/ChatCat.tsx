import React, { ReactElement } from 'react'
import ReactDOM from 'react-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import styled from 'styled-components'
import './css/global.css'
import { faMessage } from '@fortawesome/free-solid-svg-icons'
import CategoriesName from './CategoriesName'

export default function ChatCat(): ReactElement {
  return (
    <div className="categories chat">
      <FontAwesomeIcon icon={faMessage} />
      <CategoriesName>Discussion</CategoriesName>
    </div>
  )
}
