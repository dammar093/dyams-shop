import React, { useState } from 'react'
import './Register.css'
import { Link } from 'react-router-dom'
import { FaEye } from "react-icons/fa";
import { FaRegEyeSlash } from "react-icons/fa6";

const Register = () => {

  const [showPassword, setShowPassword] = useState(false)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [emailError, setEmailError] = useState('')
  const [passwordError, setPasswordError] = useState('')
  const [showEmailError, setShowEmailError] = useState(true)
  const [showPasswordError, setShowPasswordError] = useState(true)
  const [fisrtName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [firstNameError, setFirstNameError] = useState(false)
  const [lastNameError, setLastNameError] = useState(false)
  const [showFirstNameError, setShowFirstNameError] = useState(true)
  const [showLastNameError, setShowLastNameError] = useState(true)
  const handelLogin = (e) => {
    e.preventDefault()
    const emailPattern = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
    const validEmail = emailPattern.test(email.trim())
    // console.log(validEmail, emailError);
    if (email.trim() === '') {
      setEmailError('Email required!')
      setShowEmailError(true)
    }
    else if (validEmail !== true) {
      setEmailError('Email pattern does not match!')
      setShowEmailError(true)
    }

    if (password.trim() === '') {
      setPasswordError('Password required!')
      setShowPasswordError(true)
    } else if (password.trim().length <= 8) {
      setPasswordError('Enter at least 8 charecters!')
      setShowPasswordError(true)
    }
    if (fisrtName.trim() === '') {
      setShowFirstNameError(true)
      setFirstNameError('First Name Required!')
    }
    if (lastName.trim() === '') {
      setShowLastNameError(true)
      setLastNameError('Last Name Required!')
    }

  }

  return (
    <div className='login'>
      <div className="login-container">
        <div className="nav-login-btn">
          <h2>Create Account</h2>
        </div>
        <form action="" onSubmit={handelLogin}>
          <div className="user-login-box">
            <div className="input-container">
              <div className="name-box">
                <div className="user-name">
                  <div className="user-name-input">
                    <input type="text" placeholder='First Name' className='input-name' value={fisrtName} onChange={(e) => setFirstName(e.target.value)} onClick={() => setFirstNameError(false)} />
                  </div>
                  <div className="error-input">
                    {showFirstNameError && <p>{firstNameError}</p>}
                  </div>
                </div>
                <div className="user-name">
                  <div className="user-name-input">
                    <input type="text" placeholder='Last Name' className='input-name'
                      value={lastName} onChange={(e) => setLastName(e.target.value)} onClick={() => setLastNameError(false)} />
                  </div>
                  <div className="error-input">
                    {showLastNameError && <p>{lastNameError}</p>}
                  </div>
                </div>
              </div>
            </div>
            <div className="input-container">
              <div className="user-login">
                <input type="text" placeholder='Enter your email' className='login-input'
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  onClick={() => setShowEmailError(false)}
                />

              </div>
              <div className="error-input">
                {showEmailError && <p>{emailError}</p>}
              </div>
            </div>

            <div className="input-container">
              <div className="user-login">
                <input
                  type={showPassword === false ? "password" : "text"}
                  placeholder='Enter your paasword' className='input-password'
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  onClick={() => setShowPasswordError(false)}
                />
                <span className='show-password' onClick={() => setShowPassword(prev => !prev)}>
                  {
                    showPassword ? <FaEye /> : <FaRegEyeSlash />
                  }
                </span>
              </div>
              <div className="error-input">
                {
                  showPasswordError && <p>{passwordError}</p>
                }
              </div>
            </div>
          </div>
          <div className="user-login">
            <button className='login-input login-btn' type='submit'>Craete Account</button>
          </div>
        </form>
        <p className='create-account'>Already have an account <Link to="/login">Login</Link></p>
      </div>
    </div>
  )
}

export default Register