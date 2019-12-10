import React, { memo } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { FETCH_SINGLE_HERO_BY_ID } from '../../../lib/actions/types'
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
  const dispatch = useDispatch()
  function pushToUrl(url) {
    history.push(url)
  }
  function setCurrentHeroToEmpty() {
    dispatch({
      type: FETCH_SINGLE_HERO_BY_ID,
      payload: {},
    })
  }
  function goToProfileOrHome() {
    if (isSelected) {
      pushToUrl('/heroes')
      setCurrentHeroToEmpty()
    } else {
      pushToUrl(`/heroes/${id}`)
    }
  }
  return (
    <HeroCardWrapper onClick={goToProfileOrHome} theme={theme} isSelected={isSelected}>
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
