import React from 'react'
import { useDispatch } from 'react-redux'
import { updateHeroById } from '../../../../lib/actions'
import mapObjectToArray from '../../../../utils/mapObjectToArray'

const WithUpdate = (Component) => ({
  heroId,
  tempTotal,
  allTempHeroData,
  handleTempHeroDataChange,
}) => {
  const dispatch = useDispatch()
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
