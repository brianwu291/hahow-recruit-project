/* eslint-disable import/prefer-default-export */
/* eslint-disable react/jsx-props-no-spreading */
import React from 'react'
import LoadingSpinner from '../../../components/LoadingSpinner'

const withLoading = (Component) => ({ isLoading, ...props }) => (
  <>
    {isLoading ? <LoadingSpinner /> : <Component {...props} />}
  </>
)

export const SpinnerWhileLoading = withLoading
