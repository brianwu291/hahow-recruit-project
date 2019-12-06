import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import get from '../../../../utils/get'
import { updateHeroById } from '../../../../lib/actions'
import { UPDATE_HERO_BY_ID } from '../../../../lib/actions/types'
import mapObjectToArray from '../../../../utils/mapObjectToArray'

const WithUpdate = (Component) => ({
  heroId,
  tempTotal,
  allTempHeroData,
  handleTempHeroDataChange,
}) => {
  const dispatch = useDispatch()
  const updateHeroStatus = useSelector((state) => get(state, 'updateHeroStatus', ''))
  useEffect(() => {
    const updateSucceed = updateHeroStatus === 'OK'
    function setUpdateHeroStatusToPending() {
      dispatch({
        type: UPDATE_HERO_BY_ID,
        payload: 'pending',
      })
    }
    if (updateSucceed) {
      setTimeout(setUpdateHeroStatusToPending, 600)
    }
  })
  function submitTempHeroData() {
    updateHeroById(dispatch, { heroId, value: allTempHeroData })
  }
  return (
    <Component
      tempTotal={tempTotal}
      tempHeroDataLists={mapObjectToArray(allTempHeroData)}
      handleTempHeroDataChange={handleTempHeroDataChange}
      submitTempHeroData={submitTempHeroData}
    />
  )
}

export default WithUpdate
