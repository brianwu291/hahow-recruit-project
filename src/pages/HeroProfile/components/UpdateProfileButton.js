import React from 'react'
import { UpdateProfileButtonWrapper, Title, UpdateButton } from '../styled/styledUpdateProfileButton'

const UpdateProfileButton = ({ tempTotal, submitTempHeroData }) => {
  const notQualifiedToUpdate = tempTotal > 0
  return (
    <UpdateProfileButtonWrapper>
      <Title>{`剩餘點數: ${tempTotal}`}</Title>
      <UpdateButton
        onClick={submitTempHeroData}
        disabled={notQualifiedToUpdate}
        type="button"
      >
        儲存
      </UpdateButton>
    </UpdateProfileButtonWrapper>
  )
}

export default UpdateProfileButton
