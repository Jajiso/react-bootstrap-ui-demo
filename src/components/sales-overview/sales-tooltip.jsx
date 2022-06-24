import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInfoCircle } from '@fortawesome/free-solid-svg-icons'
import OverlayTrigger from 'react-bootstrap/OverlayTrigger'
import Tooltip from 'react-bootstrap/Tooltip'

export const SalesTooltip = ({ className }) => {
  return (
    <span className={className}>
      <OverlayTrigger
        placement="bottom"
        overlay={
          <Tooltip>This is the information related to your sales</Tooltip>
        }
      >
        {({ ref, ...triggerHandler }) => (
          <span ref={ref} {...triggerHandler}>
            <FontAwesomeIcon icon={faInfoCircle} color="#d3d3d3" />
          </span>
        )}
      </OverlayTrigger>
    </span>
  )
}

export default SalesTooltip
