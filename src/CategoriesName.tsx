import react, { ReactElement, ReactNode } from 'react'
import styled from 'styled-components'

const Categorie = styled.h2`
  font-size: 1rem;
  font-family: Raleway;
`

type CatNameProps = {
  children: ReactNode
}

export default function CategoriesName(props: CatNameProps): ReactElement {
  return <Categorie>{props.children}</Categorie>
}
