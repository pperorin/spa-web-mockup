import './App.css';
import { useEffect, useState } from "react";
import * as URL from './config/url';

function App() {
  const [message, setMessage] = useState('');
  const [listMessage, setListMessage] = useState('');

  function CardMessage(props) {
    return (
      <div className="card">
        <div className="card-body">
          <h1 className="card-title">{props.message}</h1>
        </div>
      </div>
    );
  }

  async function getMessage() {
    let res = await fetch(URL.HOME_Page + '/', {
      method: 'GET',
    });
    let data = await res.json();
    console.log(data);
    setListMessage(data.message);
  }
  useEffect(() => {
    getMessage();
  }, []);


  async function createMessage() {
    await fetch(URL.HOME_Page + '/', {
      method: 'POST',
      body: JSON.stringify({
        message: message
      }),
    });
  }
  return (
    <div className="App">
      <div className="navbar" />
      <div className="container">
        <div className="row">
          <div className="col">
            <div className="div-input">
              <form className="form" onSubmit={createMessage}>
                <input type="text" name="name" placeholder="Message" className="input-message" onChange={(e) => setMessage(e.target.value)} />
                <input type="submit" value="Submit" className="btn" onClick={()=> createMessage()}/>
              </form>
            </div>
          </div>
          <div className="col">
            {listMessage && listMessage.map((item, index) => {
              return <CardMessage key={index} message={item.message} />
            })
            }
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
