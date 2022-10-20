import React, { useState, useEffect } from 'react';
import { Button } from '@mui/material';

function Chatbox(props) {
  const [messagesArr, setMessageArr] = useState([{name: "Lewis", body: "yo!"}, {name: "Peipei", body: "bye"}]);

  let messages = [];
  // fetch(`/api/rooms/update/${props.roomInfo._id}`, {
  //   method: 'PATCH',
  //   headers: {
  //     'Content-type': 'application/json'
  //   },
  //   body: JSON.stringify({})
  // })

  // updating messaging area
  useEffect(() => {
    messages = messagesArr.map((v,i) => {
      console.log('message', {name: v.name, body: v.body})
      return <p key={i}>{v.name}: {v.body}</p>;
    });
    console.log("messages",messages)
  }, []);

  return (
    <div className='chatbox'>
      <div id='message-container'>
        {console.log("Rendering Messages...", messages)}
        {messages}
      </div>
      <form>
        <input type='text'></input>
        <Button variant='text'>Send</Button>
      </form>
    </div>
  );
}

export default Chatbox;