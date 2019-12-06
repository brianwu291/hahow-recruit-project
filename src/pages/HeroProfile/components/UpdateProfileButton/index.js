import React from 'react'
import Title from './components/Title'
import { UpdateProfileButtonWrapper, UpdateButton } from '../../styled/styledUpdateProfileButton'

const UpdateProfileButton = ({ tempTotal, submitTempHeroData }) => {
  const notQualifiedToUpdate = tempTotal > 0
  return (
    <UpdateProfileButtonWrapper>
      <Title tempTotal={tempTotal} />
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
