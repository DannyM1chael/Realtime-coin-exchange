import React from 'react';
import './App.css';
import io from 'socket.io-client';
import SearchAppBar from './components/navbar';
import Container from '@material-ui/core/Container';
import SimpleTable from './components/table';
import OutlinedCard from './components/card';

const socket = io('http:/localhost:3000', {
  transports: ['websocket', 'polling']
});

function App() {

  return (
    <>
      <SearchAppBar />
      <Container style={{display: 'flex', marginTop: '10vh'}}>
        <OutlinedCard />
        <OutlinedCard />
        <SimpleTable />
      </Container>
    </>
  );
}

export default App;
