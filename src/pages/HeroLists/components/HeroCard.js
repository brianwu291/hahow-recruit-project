import React, { useContext, memo } from 'react'
import {
  HeroCardWrapper,
  ImageWrapper,
  Image,
  NameWrapper,
  Name,
} from '../styled/styledHeroCard'
import Theme from '../../../ThemeContext'

const HeroCard = ({
  id,
  image,
  name,
  history,
  isSelected,
}) => {
  const { theme } = useContext(Theme)
  function pushToProfile() {
    if (isSelected) {
      history.push('/heroes')
    } else {
      history.push(`/heroes/profile/${id}`)
    }
  }
  return (
    <HeroCardWrapper onClick={pushToProfile} theme={theme} isSelected={isSelected}>
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
  const isSelected = preProps.isSelected === nextProps.isSelected
  const isSameImg = preProps.image === nextProps.image
  const isSameName = preProps.name === nextProps.name
  const isSameId = preProps.id === nextProps.id
  return isSelected && isSameImg && isSameName && isSameId
}

export default memo(HeroCard, arePropsEqual)
