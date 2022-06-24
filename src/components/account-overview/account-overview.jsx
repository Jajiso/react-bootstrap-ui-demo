import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import SupportContact from 'src/components/support-contact/support-contact.jsx'
import SalesOverview from 'src/components/sales-overview/sales-overview.jsx'

export const AccountOverview = ({ data }) => {
  const supportContactStub = data.supportContact
  const salesOverviewStub = data.salesOverview

  return (
    <StyledContainer>
      <Row className="m-0 mb-4">
        <StyledCol>
          <h3>Account Overview</h3>
        </StyledCol>
        <StyledCol>
          <SupportContact supportInfo={supportContactStub} />
        </StyledCol>
      </Row>
      <SalesOverview salesData={salesOverviewStub} />
    </StyledContainer>
  )
}

const StyledContainer = styled(Container)`
  margin-top: 50px;
  padding: 0 30px;
`
const StyledCol = styled(Col)`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-bottom: 10px;
`

AccountOverview.propTypes = {
  data: PropTypes.objectOf(PropTypes.object).isRequired,
}

export default AccountOverview
