import React from 'react';
import styled from 'styled-components';
import Weather from './components/Weather';

const Wrapper = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

function App() {
  return (
    <Wrapper>
      <Weather />
    </Wrapper>
  );
}

export default App;
