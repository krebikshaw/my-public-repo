import React, { useEffect } from 'react';
import styled from 'styled-components';
import useRep from './useRep';
import RepItems from './components/RepItem';

const AppContainer = styled.div``;

function App() {
  const { reps, handleGetRepos } = useRep();

  useEffect(() => {
    handleGetRepos();
  }, []);

  return (
    <AppContainer className='container'>
      <h1 className='h5 text-center'>My Own GitHub Repository</h1>
      <hr />
      <h2 className='h5 text-black-50'>Repository List</h2>
      {reps && <RepItems />}
    </AppContainer>
  );
}

export default App;
