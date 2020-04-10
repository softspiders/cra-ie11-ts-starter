import React from 'react';
import logo from './logo.svg';
import './App.css';
import { ComboBox, ComboBoxPopup, ComboBoxOption, ComboBoxInput, ComboBoxList, ComboBoxButton } from 'jfront-components';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>

        <ComboBox name="test" openOnFocus width='250px'>
          <ComboBoxInput />
          <ComboBoxButton />
          <ComboBoxPopup>
            <ComboBoxList>
              <ComboBoxOption name="Native" value="native" />
              <ComboBoxOption name="WEB application" value="web" />
              <ComboBoxOption name="Browser (client-side) application" value="browser" />
              <ComboBoxOption name="Service" value="service" />
            </ComboBoxList>
          </ComboBoxPopup>
        </ComboBox>
          
      </header>
    </div>
  );
}

export default App;
