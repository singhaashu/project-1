import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import './Join.css';

let user;

const Join = () => {
  const sendUser = () => {
    user = document.getElementById('jointInput').value;
    document.getElementById('jointInput').value = "";
  }

  const [name, setName] = useState("");
  return (
    <div className='JoinPage'>
      <div className='joinContainer'>
        <img src='./images/media.png' />
        <h1>Insta chat</h1>
        <input onChange={(e) => setName(e.target.value)} type='text' placeholder='Enter Your Name' id='jointInput' />
        <Link onClick={(event) => !name ? event.preventDefault() : null} to='/chat'>
          <button onClick={sendUser} className='joinbtn'>LogIn</button>
        </Link>
      </div>

    </div>
  )
}

export default Join
export { user }