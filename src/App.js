import React, { Component } from 'react';
import './App.css';
import ProductConatiner from './component/ProductContainer';
import { Provider } from 'react-redux';

import configureStore from './store/configure-store';
const store = configureStore();

class App extends Component {

  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <header className="App-header">
            <h1 className="App-title">Netflix Movie Store</h1>
          </header>
          <ProductConatiner />
        </div>
      </Provider>
    );
  }
}

export default App;
