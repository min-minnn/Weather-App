import React, { useState, useEffect } from 'react';

import styled from 'styled-components';
import axios from 'axios';

const Wrapper = styled.div`
  width: 34rem;
`;

const WeatherIcon = styled.img`
  width: 4rem;
`;

const TempWrapper = styled.div`
  width: 100%;
`;

const Temp = styled.p`
  font-family: 'ya-jalnan';
  font-size: 1.25rem;
`;


function Weather() {
  const [weather, setWeather] = useState({
    main: '',
    temp: 0,
    temp_min: 0,
    temp_max: 0,
    icon: ''
  });

  const city = 'Seoul';
  const key = encodeURIComponent('be49caa578bfc10dabc60627f069d9e3');
  const api = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}&lang=kr`;
  const icon = `https://openweathermap.com/img/w/${weather.icon}.png`;

  useEffect(() => {
    const getWeather = async () => {
      try{
        axios.get(api)
          .then((result) => {
          console.log(result);
          const data = result.data;
          setWeather({
            main: data.weather[0].main,
            temp: parseInt(data.main.temp - 273),
            temp_min: parseInt(data.main.temp_min - 273),
            temp_max: parseInt(data.main.temp_max - 273),
            icon: data.weather[0].icon
          })
        })
      } catch (e) {
        console.log(e);
      }
    }
    getWeather();
  }, [api])

  return (
    <Wrapper>
      <WeatherIcon src={icon} />
      <TempWrapper>
        <Temp>{weather.main}</Temp>
        <Temp>{weather.temp}</Temp>
        <Temp>{weather.temp_min}</Temp>
        <Temp>{weather.temp_max}</Temp>
      </TempWrapper>
    </Wrapper>
  );
}

export default Weather;