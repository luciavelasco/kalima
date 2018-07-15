import * as React from 'react';
import './App.css';

// import * as logo from './logo.svg';
// import * as portrait from '../public/portrait_goodwood.jpg';
// import * as fullBody from '../public/rome_balcony.jpg';
import * as sand from '../public/sand.png';

class App extends React.Component {
  public render() {
    return (
      <div className="App">
        <div className="banner">
          <div className="sand"></div>
          <img className="sand" src={sand}></img>
          <div className="building"></div>
          <div className="happy-worker"></div>
          <div className="logo-line"></div>
          <div className="name">KALIMA</div>
        </div>
        {/*<header className="App-header">*/}
          {/*<img src={logo} className="App-logo" alt="logo" />*/}
          {/*<h1 className="App-title">Welcome to React</h1>*/}
        {/*</header>*/}
        {/*<p className="App-intro">*/}
          {/*To get started, edit <code>src/App.tsx</code> and save to reload.*/}
        {/*</p>*/}
      </div>
    );
  }
}

export default App;
