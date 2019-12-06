import React from 'react'
import get from '../../../../utils/get'

const WithRouter = (Component) => ({ match }) => {
  const heroId = get(match, 'params.heroId', 1)
  return <Component heroId={heroId} />
}

export default WithRouter
