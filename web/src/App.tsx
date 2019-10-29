import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';

const {HelloRequest, RepeatHelloRequest,
  HelloReply} = require('./helloworld_pb.js');
const {GreeterClient} = require('./helloworld_grpc_web_pb.js');

// var client = new GreeterClient('http://192.168.99.100:8080', null, null);
var client = new GreeterClient('http://localhost:8080', null, null);

const App: React.FC = () => {
  const [ping, setPing] = useState(0)

  const handleClickPing = () => {
    const request = new HelloRequest();
    request.setName('hello')


    client.sayHello(request, {}, (err: any, response: any) => {
      if (response == null) {
        console.log('grpc erro: ', err)
      }else {
        console.log('grpc success:')
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
