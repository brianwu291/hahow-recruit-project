import styled from 'styled-components'
import mediaQuery from '../../../lib/helpers/mediaQuery'

const HeroCardWrapper = styled.div`
  cursor: pointer;
  flex-basis: 25%;
  padding: 14px;
  box-shadow: 0 2px 4px 0 rgba(0,0,0,.2);
  border-radius: 6px;
  margin-top: 15px;
  ${mediaQuery.desktop`
    max-width: 23%;
  `}
  ${mediaQuery.tablet`
    min-width: 48%;
  `}
  ${mediaQuery.phone`
    min-width: 100%;
  `}
  & :hover {
    transition: .2s;
    box-shadow: 0px 3px 4px 0px rgba(0,0,0,.4);
    transform: translateY(-4px);
  }
`
const ImageWrapper = styled.div``
const NameWrapper = styled.div``
const Image = styled.img`
  width: 100%;
  display: inline-block;
  height: 100%;
`
const Name = styled.p``

export {
  HeroCardWrapper,
  ImageWrapper,
  Image,
  NameWrapper,
  Name,
}
