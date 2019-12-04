/* eslint-disable no-prototype-builtins */
/* eslint-disable no-restricted-syntax */
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import get from 'lodash/get'
import { fetchHeroById } from '../../../../lib/actions'

const WithProfileData = (Component) => ({ heroId }) => {
  const dispatch = useDispatch()
  useEffect(() => {
    fetchHeroById(dispatch, heroId)
  }, [heroId])
  const currentHeroData = useSelector((state) => get(state, 'currentHero', {}))
  function isCurrentHeroDataLoading() {
    const keys = Object.keys(currentHeroData)
    return keys.length === 0 || heroId !== get(currentHeroData, 'heroId', 0)
  }
  function getMaxTotal() {
    let result = 0
    for (const key in currentHeroData) {
      if (currentHeroData.hasOwnProperty(key)) {
        result += currentHeroData[key]
      }
    }
    return result
  }
  return (
    <>
      <Component
        isLoading={isCurrentHeroDataLoading()}
        heroId={heroId}
        currentHeroData={currentHeroData}
        maxTotal={getMaxTotal()}
      />
    </>
  )
}

export default WithProfileData
