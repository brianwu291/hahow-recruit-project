import React, { memo } from 'react'
import get from '../../../../utils/get'
import SkillName from './components/SkillName'
import Score from './components/Score'
import {
  CountWrapper,
  ButtonWrapper,
  PlusButton,
  MinusButton,
  ButtonText,
} from '../../styled/styledProfileCount'

const ProfileCount = ({
  data,
  skillName,
  handleTempHeroDataChange,
  tempTotal,
}) => {
  const score = get(data, `${skillName}`, 0)
  function isTempTotalEqualToZero() {
    return tempTotal === 0
  }
  function isCurrentCountEqualToZero() {
    return score === 0
  }
  return (
    <CountWrapper>
      <SkillName skillName={skillName} />
      <ButtonWrapper>
        <PlusButton
          disabled={isTempTotalEqualToZero()}
          type="button"
          onClick={() => handleTempHeroDataChange(skillName, score, 1)}
        >
          <ButtonText>+</ButtonText>
        </PlusButton>
        <Score score={score} />
        <MinusButton
          type="button"
          onClick={() => handleTempHeroDataChange(skillName, score, -1)}
          disabled={isCurrentCountEqualToZero()}
        >
          <ButtonText>-</ButtonText>
        </MinusButton>
      </ButtonWrapper>
    </CountWrapper>
  )
}

export default memo(ProfileCount)
