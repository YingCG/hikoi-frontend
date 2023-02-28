import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import {getAuth, signInWithEmailAndPassword} from 'firebase/auth'

export default function LoginPage() {
    const [loginUser, setLoginUser] = useState({email: '', password: ''})
    // const [email, setEmail] = useState('')
    // const [password, setPassword] = useState('')
    const [error, setError] = useState('')
    const navigate =  useNavigate()

    // const handleFormInfo = (e) => {
    //     const {name, value} = e.target
    //     console.log(name, value)
    //     setLoginUser({
    //         [name] : value
    //     })
    // }
    
    const login = async() => {

        try{
            await signInWithEmailAndPassword(getAuth(), loginUser.email, loginUser.password)
            navigate('/articles')

        } catch (e) {
            setError(e.message)
        }
    }

  return (
    <>
        <h1>Log In</h1>
        {error && <p>{error}</p>}
        <form type='submit' >
            <input placeholder='email' value={loginUser.email} onChange={ e => setLoginUser({...loginUser, email: e.target.value})}/>
            <input placeholder='password' type="password" value={loginUser.password} onChange={e => setLoginUser({...loginUser, password: e.target.value})}/>
            <button onClick={login}>Login</button>
        </form>
        
        <button> <Link to='/register'>Create Account</Link></button>
    </>
  )
}
