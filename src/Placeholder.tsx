import * as React from 'react'
import { Component } from 'react'
import './placeholder.css'

export class SiteInProgress extends Component {
  public render() {
    return (
      <section className="in-progress">
        <div className="text-panel">
          <p>Site under construction! Check back soon.</p>
          <p><a href="mailto:luciakvelasco@gmail.com">Email Lucia</a> to find out more about
            building a culture at your company that truly benefits everyone.</p>
          <a className="cta" href="mailto:luciakvelasco@gmail.com">Bring it on!</a>
        </div>
      </section>
    )
  }
}
