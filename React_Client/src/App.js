import logo from './logo.svg';
import './App.css';
import {GreeterClient} from './protoFile_grpc_web_pb.js';
import {HelloRequest } from './protoFile_pb.js';



function App() {
  const client = new GreeterClient('http://localhost:5127', null,null);
const request = new HelloRequest();

client.sayHello(request, {}, (err, resp) =>{
if(err){
  console.error('Error', err.Message);
  return;
}

console.log('Response:', resp.toObject());
});

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
