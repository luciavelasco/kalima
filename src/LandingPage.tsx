import * as React from 'react'
import { Component } from 'react'
import './landingPage.css'

export class LandingPage extends Component<{ sand: JSX.Element[]}> {
  constructor(props: any) {
    super(props)
    this.state = { sand: [] }
  }

  public render() {
    return (
      <div className="landing-page">
        <div className="banner">
          <div className="sand">
            {...this.props.sand}
          </div>
          <div className="building">
            {/*{...this.props.bricks}*/}
          </div>
          <div className="happy-worker"/>
          <div className="logo-line"/>
          <div className="name">KALIMA</div>
        </div>
      </div>
    )
  }
}
