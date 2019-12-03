import React from 'react'
import { UpdateProfileButtonWrapper, Title, UpdateButton } from '../styled/styledUpdateProfileButton'

const UpdateProfileButton = () => {
  return (
    <UpdateProfileButtonWrapper>
      <Title>剩餘點數</Title>
      <UpdateButton type="button">儲存</UpdateButton>
    </UpdateProfileButtonWrapper>
  )
}

export default UpdateProfileButton
