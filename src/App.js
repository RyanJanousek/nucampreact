import React, { Component } from "react";
import Main from "./components/MainComponent";
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { ConfigureStore } from './redux/configureStore';
import "./App.css";
// this the correct location for this update?
const store = ConfigureStore();

<Provider store={store}>
  <BrowserRouter>
    <div className="App">
      <Main />
    </div>
  </BrowserRouter>
</Provider>
// the above correct? 

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Main />
        </div>
      </BrowserRouter>
    );
  }
}


export default App;