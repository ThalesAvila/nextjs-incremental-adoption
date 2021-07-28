import styled from 'styled-components'
import { Col } from 'reactstrap'
import React from 'react'

const StyledCol = styled(Col)`
  background-color: ${({ backgroundColor }) => backgroundColor};
`

const StyledSection = styled.section`
  height: 100vh;
`

export const Section = ({ children, ...rest }) => {
  return (
    <StyledCol {...rest}>
      <StyledSection>{children}</StyledSection>
    </StyledCol>
  )
}

export const Main = styled.main`
  display: flex;
  flex-wrap: wrap;
  height: 100vh;
  font-family: 'Montserrat', sans-serif;
  color: #494949;
`

export const Header = styled.h1`
  color: #6c6e86;
  font-size: 32px;
  line-height: 1.8;
  font-weight: 700;
  margin-top: 48px;
`

export const Paragraph = styled.p`
  font-weight: 300;
  font-size: 11px;
  line-height: 1.8;
`

export const RightSection = styled.section`
  height: auto;
  background-color: purple;
  @media (min-width: 100px) {
    display: none;
  }
  @media (min-width: 992px) {
    display: block;
    -webkit-flex: 0 0 66.66667%;
    flex: 0 0 66.66667%;
    max-width: 66.66667%;
  }
`

export const Footer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 12px;

  img {
    padding-left: 1ch;
  }
`
