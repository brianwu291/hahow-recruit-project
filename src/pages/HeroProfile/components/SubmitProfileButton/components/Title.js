import React, { memo } from 'react'
import { Title } from '../../../styled/styledUpdateProfileButton'

const TitleShow = ({ tempTotal }) => (
  <Title>
    {`剩餘點數: ${tempTotal}`}
  </Title>
)

export default memo(TitleShow, (pre, next) => pre.tempTotal === next.tempTotal)
