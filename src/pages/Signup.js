import React, { useState } from 'react';
import {getAuth ,createUserWithEmailAndPassword } from 'firebase/auth';
import {app } from '../firebase-config';

  const auth =  getAuth(app)

const Signup = () => {
    const [email, setEmail] = useState("")
   const [password, setPassword] = useState("")

  const createUser = () => {
     if(email == ''){
        console.log('data cannot save')
        return;
     }
     
    createUserWithEmailAndPassword(auth, email, password).then((value) => alert("Success"))
  setEmail("")
  setPassword("") 
}
 
    return (
        <div className='sign-up-page'>
            <h1> SignUp Page</h1>
            <label>Email</label>
            <input onChange={(e) => setEmail(e.target.value) } value={email} type="email" required placeholder='Email' />

            <label>Password</label>
            <input onChange={(e) => setPassword(e.target.value)} value={password} type="password" required placeholder='Password' />
            <button onClick={createUser}>SignUp</button>
        </div>
    )
}

export default Signup