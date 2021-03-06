import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;

  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;

  body:not(&) {
    position: relative;
  }
`

export class Screen extends React.Component {
  public render() {
    return (
      <Wrapper>
        {this.props.children}
      </Wrapper>
    )
  }
}
