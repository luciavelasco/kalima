import * as React from 'react';
import './App.css';

// import * as logo from './logo.svg';
// import * as portrait from '../public/portrait_goodwood.jpg';
// import * as fullBody from '../public/rome_balcony.jpg';

class App extends React.Component {
  public render() {
    return (
      <div className="App">
        <div class="banner">
          <div class="sand"></div>
          <!--   <img class="sand" src="https://png.pngtree.com/element_origin_min_pic/00/00/00/00568f573662e7b.jpg"></img> -->
          <div class="building"></div>
          <div class="happy-worker"></div>
          <div class="logo-line"></div>
          <div class="name">KALIMA</div>
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
