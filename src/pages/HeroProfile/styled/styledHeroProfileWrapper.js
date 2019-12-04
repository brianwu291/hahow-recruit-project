import styled from 'styled-components'

const HeroProfileWrapper = styled.div`
  color: ${({ theme }) => (theme === 'light' ? 'black' : 'white')};
`

export default HeroProfileWrapper
