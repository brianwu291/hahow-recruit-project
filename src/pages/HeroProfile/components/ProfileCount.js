import React from 'react'
import get from 'lodash/get'
import {
  CountWrapper,
  Name,
  ButtonWrapper,
  Score,
  PlusButton,
  MinusButton,
} from '../styled/styledProfileCount'

const ProfileCount = ({
  data,
  propName,
  handleTempHeroDataChange,
  tempTotal,
}) => {
  const score = get(data, `${propName}`, 0)
  function isTempTotalEqualToZero() {
    return tempTotal === 0
  }
  function isCurrentCountEqualToZero() {
    return score === 0
  }
  return (
    <CountWrapper>
      <Name>{propName}</Name>
      <ButtonWrapper>
        <PlusButton
          disabled={isTempTotalEqualToZero()}
          type="button"
          onClick={() => handleTempHeroDataChange(propName, score, 1)}
        >
          +
        </PlusButton>
        <Score>{score}</Score>
        <MinusButton
          type="button"
          onClick={() => handleTempHeroDataChange(propName, score, -1)}
          disabled={isCurrentCountEqualToZero()}
        >
          -
        </MinusButton>
      </ButtonWrapper>
    </CountWrapper>
  )
}

export default ProfileCount
