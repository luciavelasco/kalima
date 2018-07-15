import * as React from 'react';
import './App.css';

// import * as portrait from '../public/portrait_goodwood.jpg';
// import * as fullBody from '../public/rome_balcony.jpg';
import * as sand from './images/sand.png';

class App extends React.Component {
  public render() {
    return (
      <div className="App">
        <div className="banner">
          <div className="sand"/>
          <img className="sand" src={sand}/>
          <div className="building"/>
          <div className="happy-worker"/>
          <div className="logo-line"/>
          <div className="name">KALIMA</div>
        </div>
      </div>
    );
  }
}

export default App;
