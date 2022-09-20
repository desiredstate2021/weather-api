import React, { useEffect, useState } from "react"

const apiKey = process.env.REACT_APP_THE_API;
const cityName = "germany";
const metric = "units=metric";
const url = `http://api.openweathermap.org/data/2.5/weather?q=${cityName}&APPID=${apiKey}&${metric}`;


const WeatherApi = () => {
  const [data, setData] = useState([])
  function fetchData() {
    fetch(url)
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        setData([data]);
      });
  }

  useEffect(function () {
    fetchData();
  }, [])

  return (
    <div>
      {data.map((data, index) => {
        return (
          <div key={index}>
            <h2>Location: {data.name}</h2>
            <h2>Weather: {data.weather[0].main}</h2>
            <h2>Temp: {data.main.temp}</h2>
            <h2>Longitude: {data.coord.lon}</h2>
            <h2>Latitude: {data.coord.lat}</h2>
            <h2>Feels Like: {data.main.feels_like}</h2>
            <h2>Pressure: {data.main.pressure}</h2>
            <h2>Humidity: {data.main.humidity}</h2>
            <h2>Minimum Temp: {data.main.temp_min}</h2>
            <h2>Max Temp: {data.main.temp_max}</h2>
            <h2>Visibility: {data.visibility}</h2>
            <h2>Wind Speed: {data.wind.speed}</h2>
            <h2>Timezone: {data.timezone}</h2>
            <hr />
          </div>
        );
      })}
    </div>
  )
}


export default WeatherApi;