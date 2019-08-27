import React, { Component } from 'react'
import { connect } from 'react-redux'
import FeedPage from 'pages/FeedPage'
import Footer from 'components/Footer'
import Modal from 'components/Modal'
import Toast from 'components/Toast'

import './App.scss'

class App extends Component {
  constructor(props) {
    super(props)

  }

  render() {
    return (
      <div className="App">
        <Modal />
        <Toast />
        <FeedPage />
        <Footer />
      </div>
    )    
  }
}

export default App;
