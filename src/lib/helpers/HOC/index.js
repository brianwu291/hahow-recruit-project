/* eslint-disable import/prefer-default-export */
import React from 'react'
import LoadingSpinner from '../../../components/LoadingSpinner'

const withHistory = (Component) => ({
  allHeroDataLength,
  history,
  hash,
}) => {
  function heroDataIsLoading() {
    return allHeroDataLength === 0
  }
  function hashIsEmpty() {
    return hash === ''
  }
  if (hashIsEmpty) { history.push('/#/heroes') }
  return heroDataIsLoading() ? <Component /> : null
}

export const SpinnerWithHistoryPush = withHistory(LoadingSpinner)
