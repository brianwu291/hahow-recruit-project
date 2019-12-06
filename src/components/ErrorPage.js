import React from 'react'
import styled from 'styled-components'
import { useSelector } from 'react-redux'
import get from '../utils/get'

const ErrorWrapper = styled.div`
  display: table;
  width: 100%;
  height: 100vh;
  text-align: center;
  @keyframes type{
    from{box-shadow: inset -3px 0px 0px #888};
    to{box-shadow: inset -3px 0px 0px transparent};
  }
`
const Fof = styled.div`
  display: table-cell;
  vertical-align: middle;
  padding-bottom: 45px;
`

const H1Text = styled.h1`
  color: ${({ theme }) => (theme === 'light' ? 'dark' : 'white')};
  font-size: 50px;
  display: inline-block;
  padding-right: 12px;
`
const BackToHome = styled.span`
  cursor: pointer;
  font-size: 50px;
  display: inline-block;
  padding-right: 12px;
  text-decoration: none;
  border-style: none;
  color: cornflowerblue;
  border-bottom: 1px solid;
  animation: type .5s alternate infinite;
`

const Error = ({ history }) => {
  const theme = useSelector((state) => get(state, 'currentTheme', 'light'))
  function pushToHero() {
    history.push('/heroes')
  }
  return (
    <ErrorWrapper>
      <Fof>
        <H1Text theme={theme}>Error 404</H1Text>
        <BackToHome type="button" onClick={pushToHero}>Back To Hero</BackToHome>
      </Fof>
    </ErrorWrapper>
  )
}

export default Error
