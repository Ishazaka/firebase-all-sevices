import React, {useState} from 'react';
import {getAuth , signInWithEmailAndPassword} from 'firebase/auth';

import {app} from '../firebase-config'

  const auth = getAuth(app)

const SignIn = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const SignInFunc = () => {
      signInWithEmailAndPassword(auth, email, password)
    }

  return (
    <div className='sign-In-page'>
        
        <h1>Sign In page</h1>

    <label>Email</label>
    <input onChange={(e) => setEmail(e.target.value) } value={email} type="email" required placeholder='Email' />
    <label>Password</label>
    <input onChange={(e) => setPassword(e.target.value)} value={password} type="password" required placeholder='Password' />
    <button onClick={SignInFunc}>SignUp</button>
</div>
  )
}

export default SignIn