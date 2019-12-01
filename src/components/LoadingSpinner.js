/* eslint-disable react/jsx-props-no-spreading */
import React from 'react'
import styled from 'styled-components'
import propTypes from 'prop-types'

const LoadingSpinner = (props) => (
  <Loading {...props}>
    <div />
    <div />
    <div />
    <div />
  </Loading>
)
LoadingSpinner.defaultProps = {
  size: '64px',
  weight: '6px',
}
LoadingSpinner.propTypes = {
  size: propTypes.string,
  weight: propTypes.string,
}
export default LoadingSpinner

const Loading = styled.div`
  display: inline-block;
  position: relative;
  width: ${(props) => props.size};
  height: ${(props) => props.size};
  div {
    box-sizing: border-box;
    display: block;
    position: absolute;
    width: ${(props) => props.size};
    height: ${(props) => props.size};
    margin: ${(props) => props.weight};
    border: ${(props) => props.weight} solid #fff;
    border-radius: 50%;
    animation: lds-ring 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
    border-color: #fff transparent transparent transparent;
  }
  div:nth-child(1) {
    animation-delay: -0.45s;
  }
  div:nth-child(2) {
    animation-delay: -0.3s;
  }
  div:nth-child(3) {
    animation-delay: -0.15s;
  }
  @keyframes lds-ring {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`
