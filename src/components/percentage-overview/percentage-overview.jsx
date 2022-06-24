import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

export const PercentageOverview = ({ proportion, text }) => {
  const percentage = () => {
    return parseInt((proportion.successful * 100) / proportion.total)
  }
  return (
    <div className="PercentageOverview">
      <StyledPercentage>{percentage()} %</StyledPercentage>
      <StyledText className="text-muted">{text}</StyledText>
    </div>
  )
}

const StyledPercentage = styled.div`
  color: #20c997 !important;
  font-size: xx-large;
  font-weight: bolds;
`
const StyledText = styled.div`
  text-transform: uppercase !important;
  font-weight: bold;
  color: #9aa0a6 !important;
`

PercentageOverview.propTypes = {
  salesData: PropTypes.object,
}

export default PercentageOverview
