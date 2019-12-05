import styled from 'styled-components'
import mediaQuery from '../../../lib/helpers/mediaQuery'

export const UpdateProfileButtonWrapper = styled.div`
  padding: 1rem;
  font-size: 3rem;
  ${mediaQuery.phone`
    width: 100%;
  `}
`

export const Title = styled.p`
  margin-top: 7rem;
  margin-bottom: 1rem;
  ${mediaQuery.phone`
    margin-top: 0;
  `}
`

export const UpdateButton = styled.button`
  cursor: pointer;
  display: inline-block;
  font-size: 2rem;
  width: 100%;
  height: 4rem;
  box-shadow: 0px 8px 12px 0px rgba(0, 0, 0, 0.14);
  color: #000000;
  text-align: center;
  line-height: 1rem;
  border-radius: 6px;
  border-style: none;
  background-color: #EEFF41;
  &:hover {
    transition: .2s;
    box-shadow: 0px 3px 4px 0px rgba(0,0,0,.4);
    transform: translateY(-3px);
  }
`
