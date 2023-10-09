
import React, { useState } from 'react';
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import Textfomm from './components/Textform';
import Alert from './components/Alert';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";


function App() {
  const [mode, setMode] = useState('light')
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null)
    }, 1000)
  }
  const toggle = () => {

    if (mode === 'dark') {
      setMode('light')
      document.body.style.backgroundColor = 'white';
      showAlert('Light mode is enabled', 'success');

    } else {
      setMode('dark')
      document.body.style.backgroundColor = '#042743';
      showAlert('Dark mode is enabled', 'success');
    }
  }

  return (
    <div className="App">
      <Router>
        <Navbar title='Anas Website' mode={mode} toggle={toggle} />
        <Alert alert={alert} />

        <Switch>

          <Route path="/about">
            <About mode={mode} toggle={toggle} />
          </Route>

          <Route path="/">
            <div className="container">
              <Textfomm heading='Type your text below' mode={mode} showAlert={showAlert} />
            </div>
          </Route>

        </Switch>
      </Router>

      {/* <div className="container">
        <About />
      </div> */}
    </div>
  );
}

export default App;
