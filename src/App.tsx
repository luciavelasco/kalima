import * as React from 'react'
import { Component } from 'react'
import './app.css'
import { SandParticle } from './particles/Sand'
import { LandingPage } from './LandingPage'

class App extends Component<{}, { sand: JSX.Element[], bricks: JSX.Element[] }> {
  constructor(props: any) {
    super(props)
    this.state = { sand: [], bricks: [] }
  }

  public render() {
    return (
      <div className="App">
          <LandingPage sand={this.state.sand}/>
      </div>
    )
  }

  componentDidMount() {
    this.sand()
    // this.bricks()
  }

  sand() {
    const edge = Math.max(document.documentElement.clientHeight, window.innerHeight || 0)
    const bubbleCount = (edge / 50) * 8
    for (let i = 0; i <= bubbleCount; i++) {
      this.setState((prevState) => {
        return {
          sand: [ ...prevState.sand, <SandParticle/> ]
        }
      })
    }
  }
}

export default App
