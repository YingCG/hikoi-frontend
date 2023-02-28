import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth'
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

export default function Register() {
  const [newUser, setNewUser] = useState({email: '', password: '', confirmPassword: ''})
  const [error, setError] = useState('')
  const navigate = useNavigate()

      
  const createAccount = async(e) => {

    try{
      if(newUser.password !== newUser.confirmPassword){
        setError("Password and confirm password do not match")
        e.preventDefault()
        return 
      }
      
      await createUserWithEmailAndPassword(getAuth(), newUser.email, newUser.password)
      navigate('/articles')

    } catch (e) {
        setError(e.message)
    }
}

  return (
    <>
    <h1>Create User Account</h1>
    {error && <p>{error}</p>}
    <form type='submit' >
        <input placeholder='email' value={newUser.email} onChange={ e => setNewUser({...newUser, email: e.target.value})}/>
        <input placeholder='password' type="password" value={newUser.password} onChange={e => setNewUser({...newUser, password: e.target.value})}/>
        <input placeholder='confirm password' type="password" value={newUser.confirmPassword} onChange={e => setNewUser({...newUser, confirmPassword: e.target.value})}/>
        <button onClick={createAccount}>Create User Account</button>
    </form>
    
    <button> <Link to='/register'>Create Account</Link></button>
</>
  )
}
