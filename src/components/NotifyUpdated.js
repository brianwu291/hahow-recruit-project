/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react'
import styled from 'styled-components'

const NotifyUpdated = ({ updateStatus, handleClose }) => (
  <NotifyUpdatedWrapper updateStatus={updateStatus}>
    <TextButtonWrapper>
      <Text>{updateStatus === 'OK' ? '儲存成功' : '儲存失敗'}</Text>
      <CloseButton onClick={handleClose}>X</CloseButton>
    </TextButtonWrapper>
  </NotifyUpdatedWrapper>
)
const NotifyUpdatedWrapper = styled.div`
  position: fixed;
  top: 20px;
  z-index: 10000;
  width: 300px;
  height: 35px;
  border-radius: 4px;
  left: 50%;
  margin-left: -150px;
  text-align: center;
  background: ${({ updateStatus }) => (updateStatus === 'OK' ? '#24B2FF' : '#FB5497')};
  display: ${({ updateStatus }) => ((updateStatus === 'OK') ? 'block' : 'none')};
`

const TextButtonWrapper = styled.div`
  display: flex;
  flex-direction: row;
  line-height: 35px;
  color: #FFFFFF;
  width: 55%;
  line-height: 35px;
  justify-content: space-between;
  margin-left: 40%;
`
const Text = styled.p`
  letter-spacing: 0.5px;
`
const CloseButton = styled.p`
  cursor: pointer;
  letter-spacing: 0.5px;
`

export default NotifyUpdated
