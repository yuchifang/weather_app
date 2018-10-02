import React, { Component } from 'react';
import { Provider } from 'react-redux';
//import store from '../store';
import '../App.css';
import '../style/style.css';
import {createStore,applyMiddleware}from 'redux';
import ReduxPromise from 'redux-promise';
import SearchBar from '../containers/search_bar';
import WeatherList from '../containers/weather_list';
import reducers from '../reducers/index';

const createStoreWithMiddleware=applyMiddleware(ReduxPromise)(createStore);

class App extends Component {
  render() {
    return (
      <Provider store={createStoreWithMiddleware(reducers)}>
      <div>
        <SearchBar/>
        <WeatherList/>
       </div>
     </Provider> 
    );
  }
}

export default App;
