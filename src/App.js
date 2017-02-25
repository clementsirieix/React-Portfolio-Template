import Content from './Content'
import React, { Component } from 'react'
import fetch from 'unfetch'
import './App.css'

class App extends Component {
  state = { data: null }

  componentWillMount() {
    fetch('./data.json')
      .then( r => r.json() )
      .then( data => setTimeout(() => this.setState({ data }), 3000))
  }

  render() {
    const { data } = this.state

    return (
      <div className="App container">
        {data ?
          <Content data={data} />
        :
          <div className="App-loader loading" />
        }
      </div>
    )
  }
}

export default App
