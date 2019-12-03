import React, { useContext, memo } from 'react'
import { useDispatch } from 'react-redux'
import { fetchHeroById } from '../../../lib/actions'
import {
  HeroCardWrapper,
  ImageWrapper,
  Image,
  NameWrapper,
  Name,
} from '../styled/styledHeroCard'
import Theme from '../../../themeContext'

const HeroCard = ({
  history,
  image,
  name,
  id,
}) => {
  const { theme } = useContext(Theme)
  const dispatch = useDispatch()
  // const [isSelected, setIsSelected] = useState(false)
  function setCurrentHeroAndRenderProfile() {
    history.push(`/#/heroes/profile/${id}`)
    const selectedHero = {
      heroName: name,
      heroId: id,
    }
    fetchHeroById(dispatch, selectedHero)
  }
  return (
    <HeroCardWrapper onClick={setCurrentHeroAndRenderProfile} theme={theme}>
      <ImageWrapper>
        <Image src={image} alt={name} />
      </ImageWrapper>
      <NameWrapper>
        <Name theme={theme}>{name}</Name>
      </NameWrapper>
    </HeroCardWrapper>
  )
}

function arePropsEqual(preProps, nextProps) {
  const isSameImg = preProps.image === nextProps.image
  const isSameName = preProps.name === nextProps.name
  const isSameId = preProps.id === nextProps.id
  return isSameImg && isSameName && isSameId
}

export default memo(HeroCard, arePropsEqual)
