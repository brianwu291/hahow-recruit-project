import React from 'react'
import {
  HeroCardWrapper,
  ImageWrapper,
  Image,
  NameWrapper,
  Name,
} from './styledHeroCard'

const HeroCard = ({
  image,
  name,
}) => (
  <HeroCardWrapper>
    <ImageWrapper>
      <Image src={image} alt={name} />
    </ImageWrapper>
    <NameWrapper>
      <Name>{name}</Name>
    </NameWrapper>
  </HeroCardWrapper>
)

export default HeroCard
