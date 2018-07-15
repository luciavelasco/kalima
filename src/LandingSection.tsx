import * as React from 'react'
import { Component } from 'react'
import './landingSection.css'

export class LandingSection extends Component<{ sand: JSX.Element[]}> {
  constructor(props: any) {
    super(props)
    this.state = { sand: [] }
  }

  public render() {
    return (
      <section className="landing-section">
        <div className="banner">
          <div className="sand">
            {...this.props.sand}
          </div>
          <div className="building">
            {/*{...this.props.bricks}*/}
          </div>
          <div className="happy-worker"/>
          <div className="logo-line"/>
          <div className="name">CALIMA</div>
        </div>
      </section>
    )
  }
}
