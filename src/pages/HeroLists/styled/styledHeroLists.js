/* eslint-disable import/prefer-default-export */
import styled from 'styled-components'
import mediaQuery from '../../../lib/helpers/mediaQuery'

export const HeroListsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: center;
  color: ${({ theme }) => (theme === 'light' ? 'black' : 'white')};
  ${mediaQuery.desktop`
    > div:nth-child(2) {
      margin: 15px 7.5px 0 15px;
    }
    > div:nth-child(3) {
      margin: 15px 15px 0 7.5px;
    }
  `}
  ${mediaQuery.tablet`
    > div:nth-child(2) {
      margin: 15px 0 0 15px;
    }
    > div:nth-child(3) {
      margin: 15px 0 0 0;
    }
    > div:nth-child(4) {
      margin: 15px 0 0 15px;
    }
  `}
  ${mediaQuery.phone`
    > div:not(:first-child) {
      margin: 15px 0 0 0;
    }
  `}
`
