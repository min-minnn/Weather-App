import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import axios from 'axios';

const Wrapper = styled.div`
  width: 34rem;
  text-align: center;
  border: 1px solid black;
`;

const IconWrapper = styled.div`
  padding-bottom: 3rem ;
  background-color: #DDDDDD;
`;

const WeatherIcon = styled.img`
  width: 6.5rem;
`;

const LocationWrapper = styled.div`
  padding: 1.5rem;
  text-align: left;
  background-color: #DDDDDD;
`;

const Location = styled.p`
  font-family: 'yg-jalnan';
  font-size: 1.75rem;
  margin: 0;
`;

const TempWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: #FFFFFF;
  padding: 1.5rem 0;
`;

const Temp = styled.p`
  font-family: 'yg-jalnan';
  font-size: 1.25rem;
  letter-spacing: 0.125rem;
  margin: 0;
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
      <LocationWrapper>
        <Location>{weather.name}</Location>
      </LocationWrapper>
      <IconWrapper>
        <Temp>{weather.main}</Temp>
        <WeatherIcon src={icon} />
        <Temp>현재 {weather.temp}℃</Temp>
      </IconWrapper>
      <TempWrapper>
        <Temp>최저: {weather.temp_min}℃</Temp>
        <Temp>최고: {weather.temp_max}℃</Temp>
      </TempWrapper>
    </Wrapper>
  );
}

export default Weather;