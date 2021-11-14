import React from 'react';
import './App.css';
import { GlobalProvider } from './context/GlobalState';
import CentreInfo from './components/CentreInfo';
import Booths from './components/Booths';

function App() {
  return (
    <GlobalProvider>
      <div className="container">
        <h1>EOD Generator</h1>
          <small>End of day report generator</small>
          <hr />
          <div className="row">
              <div className="col-12 col-md-4">
                <CentreInfo />
              </div>
              <div className="col-12 col-md-8">
                <Booths />
              </div>
          </div>
      </div>
    </GlobalProvider>
  );
}

export default App;
