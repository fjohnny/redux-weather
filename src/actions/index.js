import axios from 'axios';

const API_KEY = '82961d0abbe1605e52f3961aa011c623';

const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export const FETCH_WEATHER = 'FETCH_WEATHER';

export  function fetchWeather(cityName) {
    const url = `${ROOT_URL}&q=${cityName},au&units=metric`;
    const request = axios.get(url);    

    console.log('Request: ', request);

    return {
        type: FETCH_WEATHER,
        payload : request
    }
} 