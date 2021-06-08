import React from "react";
import "./App.css";
import Heroes from "./components/Heroes";
import Header from "./components/Header"

import {Provider} from 'react-redux'
import generateStore from './redux/store'


function App() {

  const store = generateStore();

  return (
    <Provider store={store}>
      
      <Header />
      <Heroes />
    </Provider>
  );
}

export default App;
