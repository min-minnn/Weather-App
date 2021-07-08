import React from 'react';
import styled from 'styled-components';
import Weather from './components/Weather';

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 3rem;
`;

function App() {
  return (
    <Wrapper>
      <Weather />
    </Wrapper>
  );
}

export default App;
