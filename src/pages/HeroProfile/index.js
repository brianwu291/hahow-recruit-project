import React, { useContext } from 'react'
import styled from 'styled-components'
import ThemeContext from '../../themeContext'

const HeroProfileWrapper = styled.div`
  color: ${({ theme }) => (theme === 'light' ? 'black' : 'white')};
`
function renderProfile(heroId) {
  return (
    <div>
      <div>
        <span>{`title${heroId}`}</span>
        <span>
          <button type="button">+</button>
          <span>score</span>
          <button type="button">-</button>
        </span>
      </div>
    </div>
  )
}

function renderUpdateProfileButton() {
  return (
    <div>
      <p>剩餘點數</p>
      <button type="button">儲存</button>
    </div>
  )
}

const HeroProfile = ({ heroId }) => {
  const { theme } = useContext(ThemeContext)
  // const currentHero = useSelector((state) => get(state, 'currentHero', {}))
  return (
    <HeroProfileWrapper theme={theme}>
      {renderProfile(heroId)}
      {renderUpdateProfileButton()}
    </HeroProfileWrapper>
  )
}

export default HeroProfile
