import React, { useRef } from 'react'
import HomePage from './HomePage'

const Login = () => {

    const email = useRef()
    const password = useRef()

    const getEmail = localStorage.getItem("emailData") 
    const getPassword = localStorage.getItem("passwordData") 

    const handleSubmit = () => {
        if (email.current.value === "admin@gmail.com" && password.current.value === "admin") {
            localStorage.setItem("emailData", "admin@gmail.com")
            localStorage.setItem("passwordData", "admin")
        }
    }

  return (
    <>
        {
            
            getEmail && getPassword ? 
            <HomePage /> :
            <div className='card w-50 p-5 mx-auto my-5'>
            <h1>Login Page</h1>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="email" className='form-label'>Email</label>
                    <input type="text" ref={email} id="email" className='form-control' />
                </div>
                <div className="mb-3">
                    <label htmlFor="password" className='form-label'>Password</label>
                    <input type="password" ref={password} id="password" className='form-control' />
                </div>
                <button className='btn btn-primary'>Login</button>
            </form>
            </div>
        }
        
    </>
  )
}

export default Login