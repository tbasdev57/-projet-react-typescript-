import react, { ReactElement } from 'react'
import styled from 'styled-components'

type HelloProps = {
  name: string
  age?: number
}

const YellowParagraph = styled.p`
  font-size: 0.8rem;
  font-weight: 600;
`

export default function Hello(props: HelloProps): ReactElement {
  const name = props.name
  const age = props.age

  if (!props.age) {
    return (
      <YellowParagraph>
        Bonjour {name}, je ne connais pas votre age
      </YellowParagraph>
    )
  } else {
    return (
      <YellowParagraph>
        Bonjour {name}, vous avez {age} ans
      </YellowParagraph>
    )
  }
}
