import React, { useState, useEffect } from 'react';
import './App.css';
import SearchAppBar from './components/navbar';
import Container from '@material-ui/core/Container';
import SimpleTable from './components/table';
import OutlinedCard from './components/card';


function App() {

  const [data, setData] = useState([]);

  useEffect(() => {
    // let ws = new WebSocket('wss://ws.coincap.io/trades/binance');
    let ws = new WebSocket('wss://ws.coincap.io/prices?assets=bitcoin');
    ws.onopen = () => console.log('ws opened');
    ws.onclose = () => console.log('ws closed');
  
    ws.onmessage = e => {
      const rates = JSON.parse(e.data);
      setData(Object.entries(rates))
    };
  
    return () => ws.close()
  }, [data]);

  return (
    <>
      <SearchAppBar />
      <Container style={{display: 'flex', marginTop: '10vh'}}>
        <OutlinedCard />
        <OutlinedCard />
        <SimpleTable data={data}/>
      </Container>
    </>
  );
}

export default App;
