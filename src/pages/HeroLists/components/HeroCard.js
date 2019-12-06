import React, { memo } from 'react'
import { useSelector } from 'react-redux'
import {
  HeroCardWrapper,
  ImageWrapper,
  Image,
  NameWrapper,
  Name,
} from '../styled/styledHeroCard'
import get from '../../../utils/get'

const HeroCard = ({
  id,
  image,
  name,
  history,
  isSelected,
}) => {
  const theme = useSelector((state) => get(state, 'currentTheme', 'light'))
  function pushToProfile() {
    if (isSelected) {
      history.push('/heroes')
    } else {
      history.push(`/heroes/${id}`)
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
