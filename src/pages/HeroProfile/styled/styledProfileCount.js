import styled from 'styled-components'
import mediaQuery from '../../../lib/helpers/mediaQuery'

export const ProfileCountWrapper = styled.div`
  padding: 1rem;
  flex: 100%;
  flex-wrap: nowrap;
  max-width: 50%;
  ${mediaQuery.tablet`
    max-width: 100%;
  `}
`

export const CountWrapper = styled.div`
  font-size: 3rem;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-wrap: nowrap;
  padding-bottom: 1rem;
`

export const Name = styled.span`
  margin-right: auto;
`

export const ButtonWrapper = styled.span``

export const Score = styled.span`
  display: inline-block;
  width: 70px;
  text-align: center;
`

const PlusOrMinusButton = styled.button`
  cursor: pointer;
  display: inline-block;
  width: 4rem;
  height: 4rem;
  box-shadow: 0px 8px 12px 0px rgba(0, 0, 0, 0.14);
  color: #000000;
  font-size: 4rem;
  text-align: center;
  line-height: 1rem;
  border-radius: 50%;
  border-style: none;
  &:hover {
    transition: .2s;
    box-shadow: 0px 3px 4px 0px rgba(0,0,0,.4);
    transform: translateY(-3px);
  }
`

export const PlusButton = styled(PlusOrMinusButton)`
  background-color: #EEFF41;
`
export const MinusButton = styled(PlusOrMinusButton)`
  background-color: bisque;
`
