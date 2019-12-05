/* eslint-disable import/prefer-default-export */
/* eslint-disable react/jsx-props-no-spreading */
import React, { useContext } from 'react'
import ThemeContext from '../../../ThemeContext'
import LoadingSpinner from '../../../components/LoadingSpinner'

const withLoading = (Component) => ({ isLoading, ...props }) => {
  const theme = useContext(ThemeContext)
  return (
    <>
      {isLoading ? <LoadingSpinner theme={theme} /> : <Component {...props} />}
    </>
  )
}
export const SpinnerWhileLoading = withLoading
