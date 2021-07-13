import styled from 'styled-components'

export const LeftSection = styled.section`
  height: auto;
  background-color: orangered;
  @media (min-width: 100px) {
    -webkit-flex: 0 0 100%;
    flex: 0 0 100%;
    max-width: 100%;
    overflow: hidden;
  }
  @media (min-width: 992px) {
    -webkit-flex: 0 0 33.33333%;
    flex: 0 0 33.33333%;
    max-width: 33.33333%;
  }
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

export const Main = styled.main`
  display: flex;
  flex-wrap: wrap;
  height: 100vh;
`
