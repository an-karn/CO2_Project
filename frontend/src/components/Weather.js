import React, {useState} from 'react';
import axios from 'axios';

const Weather = () => {
    const [data, setData] = useState({})
    const [location, setLocation] = useState('')
  
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${location},de&APPID=3e40c31b6263d3d9e511f9e9f0fa8df5`


    const searchLocation = (event) => {
        if (event.key === 'Enter') {
          axios.get(url).then((response) => {
            setData(response.data)
            console.log(response.data)
          })
        setLocation('')
        }
    }
    return <div style={{ }}>
    <div className="search">
        <input
          value={location}
          onChange={event => setLocation(event.target.value)}
          onKeyPress={searchLocation}
          placeholder='Enter a city in Germany'
          type="text" />
    </div>
    <div className="container">
      <div className="column">
                  
          <p>Location : {data.name}</p>
      </div>
      <div className = "column">  {data.main ? <h1>Temperature: {data.main.temp.toFixed()}°F</h1> : null}</div>
      <div className='column'> {data.weather ? <p>Description: {data.weather[0].main}</p> : null}</div>
          
      {data.name !== undefined &&
        <div className='bottom'>
          <div className='column'>
              {data.main ? <p> Feels like: {data.main.feels_like.toFixed()}°F</p> : null}
          </div>

          <div className="column">
              {data.main ? <p className='bold'> Humidity: {data.main.humidity}%</p> : null}
          </div>
              
          <div className="column">
              {data.wind ? <p> Wind speed: {data.wind.speed.toFixed()} MPH</p> : null}
          </div>
        </div>
}
    </div>
    </div>;
};

export default Weather;
