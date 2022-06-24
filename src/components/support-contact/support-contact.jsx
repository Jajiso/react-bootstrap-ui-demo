import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import PropTypes from 'prop-types'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Image from 'react-bootstrap/Image'
import Stack from 'react-bootstrap/Stack'

export const SupportContact = ({ supportInfo }) => {
  return (
    <div className="SupportContact">
      <div className="text-muted fw-bold mb-2">YOUR FEEFO SUPPORT CONTACT</div>
      <div>
        <Stack direction="horizontal" gap={2}>
          <Image
            itemRef="avatar"
            rounded
            src={`https://eu.ui-avatars.com/api/?name=${supportInfo.name}&background=ffd65c&size=50`}
          />
          <div>
            <Row>
              <Col>
                <div className="fw-bold">{supportInfo.name}</div>
              </Col>
            </Row>
            <Row>
              <Stack direction="horizontal" gap={2}>
                <FontAwesomeIcon icon={faEnvelope} />
                <span className="text-muted">{supportInfo.email}</span>
              </Stack>
            </Row>
          </div>
        </Stack>
      </div>
    </div>
  )
}

SupportContact.propTypes = {
  supportInfo: PropTypes.object.isRequired,
}

export default SupportContact
