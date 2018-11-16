import React from 'react'
import ReactDOM from 'react-dom'
// import { BrowserRouter } from 'react-router-dom'

// import App from 'components/App'
import Home from 'components/pages/Home'

it('renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<Home />, div)
  ReactDOM.unmountComponentAtNode(div)
})

// TODO: Find out how to actually test App with mock provider etc.