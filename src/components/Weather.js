import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import axios from 'axios';

const Wrapper = styled.div`
  width: 34rem;
  text-align: center;
  background-color: #DDDDDD;
`;

const WeatherIcon = styled.img`
  width: 4rem;
  margin-top: 1rem;
`;

const TempWrapper = styled.div`
  width: 100%;
`;

const Temp = styled.p`
  font-family: 'ya-jalnan';
  font-size: 1.25rem;
  letter-spacing: 0.125rem;
`;


function Weather() {
  const [weather, setWeather] = useState({
    main: '',
    name: '',
    temp: 0,
    temp_min: 0,
    temp_max: 0,
    icon: ''
  });

  const city = 'Seoul';
  const key = encodeURIComponent('be49caa578bfc10dabc60627f069d9e3');
  const api = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}&units=metric`;
  const icon = `https://openweathermap.com/img/wn/${weather.icon}.png`;

  useEffect(() => {
    const getWeather = async () => {
      try{
        axios.get(api)
          .then((result) => {
          console.log(result);
          const data = result.data;
          setWeather({
            main: data.weather[0].main,
            name: data.name,
            temp: parseInt(data.main.temp),
            temp_min: parseInt(data.main.temp_min),
            temp_max: parseInt(data.main.temp_max),
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
        <Temp>{weather.name}</Temp>
        <Temp>{weather.main}</Temp>
        <Temp>{weather.temp}ºC</Temp>
        <Temp>{weather.temp_min}ºC</Temp>
        <Temp>{weather.temp_max}ºC</Temp>
      </TempWrapper>
    </Wrapper>
  );
}

export default Weather;