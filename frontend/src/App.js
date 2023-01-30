import React, {useState, useEffect} from 'react';
import './App.css';

function App() {
  const [message, setMessage] = useState("");
  useEffect(() => {
    fetch('/api/v1/sample/성혁/음하하')
        .then(response => response.json())
        .then(message => {
          setMessage(message);
        });
  },[])

  return (
      <div className="App">
        <header className="App-header">

          <div>
             {message.name}
              <br/>
              {message.description}
              <br/>
              {message.number}
              <br/>
              {message.now}

          </div>

        </header>
      </div>
  );
}

export default App;