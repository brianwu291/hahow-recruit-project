import styled from 'styled-components'
import mediaQuery from '../../../lib/helpers/mediaQuery'

const HeroCardWrapper = styled.div`
  cursor: pointer;
  flex-basis: 25%;
  padding: 14px;
  box-shadow: 1px 2px 5px 2px rgba(0,0,0,.2);
  border-radius: 6px;
  margin-top: 15px;
  border: ${({ theme }) => (theme === 'light' ? 'none' : '1px solid')};
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
const ImageWrapper = styled.div`
  text-align: center;
  padding: 14px;
`
const NameWrapper = styled.div``
const Image = styled.img`
  width: 100%;
  display: inline-block;
  height: 100%;
  border-radius: 6px;
`
const Name = styled.p`
  text-align: center;
  color: ${({ theme }) => (theme === 'light' ? 'black' : 'white')};
`

export {
  HeroCardWrapper,
  ImageWrapper,
  Image,
  NameWrapper,
  Name,
}
