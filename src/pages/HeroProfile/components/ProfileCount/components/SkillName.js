import React, { memo } from 'react'
import { Name } from '../../../styled/styledProfileCount'

const SkillName = ({ skillName }) => (
  <Name>
    {skillName}
  </Name>
)

export default memo(SkillName, (pre, next) => pre.skillName === next.skillName)
