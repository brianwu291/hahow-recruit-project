import React, { useState } from 'react'
import get from 'lodash/get'

const WithState = (Component) => ({ currentHeroData, maxTotal, heroId }) => {
  const [tempTotal, setTempTotal] = useState(0)
  const [tempStr, setTempStr] = useState(get(currentHeroData, 'str', 0))
  const [tempInt, setTempInt] = useState(get(currentHeroData, 'int', 0))
  const [tempAgi, setTempAgi] = useState(get(currentHeroData, 'agi', 0))
  const [tempLuk, setTempLuk] = useState(get(currentHeroData, 'luk', 0))
  function allTempSetHeroFunc() {
    return ({
      str: setTempStr,
      int: setTempInt,
      agi: setTempAgi,
      luk: setTempLuk,
    })
  }
  function allTempHeroData() {
    return ({
      str: tempStr,
      int: tempInt,
      agi: tempAgi,
      luk: tempLuk,
    })
  }
  function setTempHero(propName) {
    return allTempSetHeroFunc()[propName]
  }
  function getPreTempHero(propName) {
    return allTempHeroData()[propName]
  }
  function handleTempHeroDataChange(propName = '', countScore = 0, value = 0) {
    function isValueToBeOne() {
      return value === 1
    }
    function isValueToBeMinusOne() {
      return value === -1
    }
    function isTempTotalBiggerThanZero() {
      return tempTotal > 0
    }
    function isTempTotalSmallerThanMax() {
      return tempTotal < maxTotal
    }
    function isCountScoreBiggerThanZero() {
      return countScore > 0
    }
    if (isValueToBeOne() && isTempTotalBiggerThanZero()) {
      setTempTotal(tempTotal - value)
      setTempHero(propName)(getPreTempHero(propName) + value)
    } else if (isValueToBeMinusOne() && isTempTotalSmallerThanMax() && isCountScoreBiggerThanZero()) {
      setTempTotal(tempTotal - value)
      setTempHero(propName)(getPreTempHero(propName) + value)
    }
  }
  return (
    <>
      <Component
        heroId={heroId}
        tempTotal={tempTotal}
        allTempHeroData={allTempHeroData()}
        handleTempHeroDataChange={handleTempHeroDataChange}
      />
    </>
  )
}

export default WithState
