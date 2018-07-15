import * as React from 'react'
import { Component } from 'react'
import './App.css'

// import * as portrait from '../public/portrait_goodwood.jpg';
// import * as fullBody from '../public/rome_balcony.jpg';
// import * as sand from './images/sand.png';

class App extends Component<{}, { sand: JSX.Element[] }> {
  constructor(props: any) {
    super(props)
    this.state = { sand: [] }
  }

  public render() {
    return (
      <div className="App">
        <div className="banner">
          {/*<div className="sand"/>*/}
          {/*<img className="sand" src={sand}/>*/}
          <div className="sand">
            {...this.state.sand}
          </div>
          <div className="building"/>
          <div className="happy-worker"/>
          <div className="logo-line"/>
          <div className="name">KALIMA</div>
        </div>
      </div>
    )
  }

  componentDidMount() {
    this.sand()
  }

  sand() {
    // const sand = document.querySelector('.sand') as Element
    const edge = Math.max(document.documentElement.clientHeight, window.innerHeight || 0)
    const bubbleCount = (edge / 50) * 8
    for (let i = 0; i <= bubbleCount; i++) {
      this.setState((prevState) => {
        return {
          sand: [ ...prevState.sand, <SandParticle maxHeight={edge}/> ]
        }
      })
    }
  }
}

class SandParticle extends Component<{ maxHeight: number }, {}> {

  // fewer at start
  getDelay() {
    const random = rnd(0, 30) / 10
    // if delay between certain number, run again and pick the highest number
    // for uneven dispersion of particles
    return random < .8 ? Math.max(random, (rnd(0, 30) / 10)) : random
  }

  // more in the upper 2 fifths offset by 1
  getTop() {
    return this.getWeightedRandomInt(0, 45, 8, 25)
  }

  getWeightedRandomInt(min: number, max: number, weightMin: number, weightMax: number) {
    const rand = rnd(min, max)
    const weight = rnd(weightMin, weightMax)
    return rand + weight / 2
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
        color: 'turquoise',
        animationDelay: this.getDelay() + 's'
      }}/>
  }
}

export default App

const rnd = (m: number, n: number) => {
  return Math.floor(Math.random() * (n - m + 1)) + m
}
