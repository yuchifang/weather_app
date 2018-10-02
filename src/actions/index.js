import axios from 'axios';
export const FETCH_WEATHER='FETCH_WEATHER';
export const NEW_POST='NEW_POST';

const API_KEY='bc3b1bdbc545dd494c779b1f88b13a61';
// const URL=`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}&units=metric'`
const ROOT_URL=`http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export const fetchWeather=(city)=>{
  const url=`${ROOT_URL}&q=${city},us`;
  const request=axios.get(url);
  console.log('REQUEST',request)
  return {
    type:FETCH_WEATHER,
    payload:request 
  }
}