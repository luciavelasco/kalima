import * as React from 'react'
import { Component } from 'react'
import './sand.css'
import { getWeightedRandomInt, rnd } from './Particle'

export class SandParticle extends Component<{}, {}> {

  // fewer at start
  getDelay() {
    const random = rnd(0, 40) / 10
    // if delay between certain number, run again and pick the highest number
    // for uneven dispersion of particles
    if (random < .8) {
      return Math.max(random, (rnd(0, 40) / 10))
    } else if (random > 2.2) {
      return Math.min(random, (rnd(0, 40) / 10))
    } else {
      return random
    }
  }

  // more in the upper 2 fifths offset by 1
  getTop() {
    return getWeightedRandomInt(0, 45, 8, 25)
  }

  render() {
    const size = rnd(10, 40) / 10
    return <span
      className="particle"
      style={{
        top: this.getTop() + 'vh',
        left: '-10vw',
        width: size + 'vw',
        height: size + 'vw',
        color: '#B79301',
        animationDelay: this.getDelay() + 's'
      }}/>
  }
}
