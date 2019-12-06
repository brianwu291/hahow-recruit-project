import React, { memo } from 'react'
import { Score } from '../../../styled/styledProfileCount'

const ScoreShow = ({ score }) => (
  <Score>
    {score}
  </Score>
)

export default memo(ScoreShow, (pre, next) => pre.score === next.score)
