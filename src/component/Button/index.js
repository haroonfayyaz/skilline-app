import React from 'react'
import ButtonWrapper from './style'
const Index = (props) => {
  const { text, variant, padding, fontSize, backgroundColor  } = props;
  return (
    <ButtonWrapper
      padding={padding}
      backgroundColor={backgroundColor}
      fontSize={fontSize}
      variant={variant}
    >
      {text}
    </ButtonWrapper>
  )
}

export default Index
