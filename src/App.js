import React, { Component } from 'react';
import './App.css';
import { Products } from './data/products';
import ProductConatiner from './component/ProductContainer';
import { Provider } from 'react-redux';

import configureStore from './store/configure-store';
const store = configureStore();

class App extends Component {
  constructor() {
    super();
    this.state = {
      products: Products,
    }
  }

  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <header className="App-header">
            <h1 className="App-title">Umbrella Store</h1>
          </header>
          <ProductConatiner />
        </div>
      </Provider>
    );
  }
}

export default App;
