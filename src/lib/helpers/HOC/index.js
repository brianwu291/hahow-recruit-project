/* eslint-disable import/prefer-default-export */
/* eslint-disable react/jsx-props-no-spreading */
import React from 'react'
import { useSelector } from 'react-redux'
import get from '../../../utils/get'
import LoadingSpinner from '../../../components/LoadingSpinner'

const withLoading = (Component) => ({ isLoading, ...props }) => {
  const theme = useSelector((state) => get(state, 'currentTheme', 'light'))
  return (
    <>
      {isLoading ? <LoadingSpinner theme={theme} /> : <Component {...props} />}
    </>
  )
}
export const SpinnerWhileLoading = withLoading
