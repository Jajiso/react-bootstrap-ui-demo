import React from 'react'
import './app.css'
import AccountOverview from 'src/components/account-overview/account-overview.jsx'

function App() {
  const accountOverviewStub = {
    supportContact: {
      name: 'John Smith',
      email: 'john.smith@feefo.com',
    },
    salesOverview: {
      uploads: 8,
      successfulUploads: 3,
      linesAttempted: 20,
      linesSaved: 4,
    },
  }

  return (
    <div className="App">
      <AccountOverview data={accountOverviewStub} />
    </div>
  )
}

export default App
