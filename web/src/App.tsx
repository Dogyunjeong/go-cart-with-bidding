import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';

const { PingPongServiceClient } = require('./ping_pong_grpc_web_pb');
const { PingRequest, PongResponse } = require('./ping_pong_pb.js');

var client = new PingPongServiceClient('http://192.168.99.100:9090', null, null);

const App: React.FC = () => {
  const [ping, setPing] = useState(0)

  const handleClickPing = () => {
    const request = new PingRequest();
    request.setPing('Ping');


    client.pingPong(request, {}, (err: any, response: any) => {
      if (response == null) {
        console.log('grpc erro: ', err)
      }else {
        console.log('grpc success:', response.getPong())
      }
    })
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <p>ping: {ping}</p>
        <button onClick={handleClickPing} >Start ping pong</button>
      </header>
    </div>
  );
}

export default App;
