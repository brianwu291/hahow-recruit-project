import React from 'react'
import styled from 'styled-components'

const NotifyUpdated = ({ updateStatus }) => (
  <NotifyUpdatedWrapper updateStatus={updateStatus}>
    <p>{updateStatus === 'OK' ? '儲存成功' : '儲存失敗'}</p>
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
  > p {
    padding: 5px 0 17px 20px;
    font-size: 16px;
    color: #FFFFFF;
    letter-spacing: 0.5px;
  }
`

export default NotifyUpdated
