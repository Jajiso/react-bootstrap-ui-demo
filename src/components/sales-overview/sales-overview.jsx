import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUpload } from '@fortawesome/free-solid-svg-icons'
import PropTypes from 'prop-types'
import Card from 'react-bootstrap/Card'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Stack from 'react-bootstrap/Stack'
import PercentageOverview from 'src/components/percentage-overview/percentage-overview.jsx'
import SalesTooltip from './sales-tooltip.jsx'

export const SalesOverview = ({ salesData }) => {
  return (
    <Card>
      <Row className="m-0">
        <Card.Body>
          <Card.Title>
            <Stack direction="horizontal">
              <FontAwesomeIcon icon={faUpload} color="#61DAFB" />
              <span className="fw-bold px-2">Sales</span>
              <SalesTooltip className="ms-auto" />
            </Stack>
          </Card.Title>
          <Card.Text className="text-muted pt-3">
            You had <strong>{salesData.successfulUploads} uploads</strong> and{' '}
            <strong>{salesData.linesSaved}</strong> lines added
          </Card.Text>
        </Card.Body>
      </Row>
      <Row className="m-0">
        <Col className="p-0 border-top">
          <Card.Body>
            <PercentageOverview
              proportion={{
                successful: salesData.successfulUploads,
                total: salesData.uploads,
              }}
              text="upload success"
            />
          </Card.Body>
        </Col>
        <Col className="p-0 border-top border-start">
          <Card.Body>
            <PercentageOverview
              proportion={{
                successful: salesData.linesSaved,
                total: salesData.linesAttempted,
              }}
              text="lines saved"
            />
          </Card.Body>
        </Col>
      </Row>
    </Card>
  )
}

SalesOverview.propTypes = {
  salesData: PropTypes.object.isRequired,
}

export default SalesOverview
