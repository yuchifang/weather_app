import React,{Component} from 'react';
import {connect} from 'react-redux';
import Chart from '../components/chart';
import _ from 'lodash';
import PropTypes from 'prop-types';

import GoogleMap from '../components/google_map';

//react-sparklines
class WeatherList extends Component{
  renderWeather(cityData){
    const name=cityData.city.name;
    const temps=_.map(cityData.list.map(weather=>weather.main.temp),(temp)=>temp-273);
    const pressure=cityData.list.map(weather=>weather.main.pressure);
    const humidities=cityData.list.map(weather=>weather.main.humidity);
    const {lon,lat} =cityData.city.coord;

    console.log(temps);
    return(
      <tr key={name}>
        <td>{name}{/*<GoogleMap lon={lon} lat={lat}/>*/}</td>
        <td><Chart data={temps} color="orange" unit="°C"/></td>
        <td><Chart data={pressure} color="green"  unit="hPa"/></td>
        <td><Chart data={humidities} color="black"  unit="%"/></td>
      </tr>
    );
  }
  render(){
    return(
      <table className="table table-hover">
        <thead>
          <tr>
            <th>City666</th>
            <th>Temprature(°C)</th>
            <th>Pressure(hPa)</th>
            <th>Humidity (%) </th>
          </tr>
        </thead>
        <tbody>
          {this.props.weather.map(this.renderWeather)}
        </tbody>
      </table>
    )
  }
}
WeatherList.propTypes = {
  weather:PropTypes.array
}
function mapStateToProps(state){
  return {weather: state.weather}
}
// //const weather=state.weather
// function mapStateToProps({weather}){
//   //hooked redux state so can call this.props.weather  in side weatherList
//   return {weather};//{weather}==={weather:weather}
// }
export default connect(mapStateToProps)(WeatherList)