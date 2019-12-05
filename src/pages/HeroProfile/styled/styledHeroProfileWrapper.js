import styled from 'styled-components'

const HeroProfileWrapper = styled.div`
  color: ${({ theme }) => (theme === 'light' ? 'black' : 'white')};
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  flex-wrap: wrap;
  padding: 1.4rem;
`

export default HeroProfileWrapper
