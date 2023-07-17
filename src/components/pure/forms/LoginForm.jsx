import React from 'react'
import { useState } from 'react'

const LoginForm = () => {

  const initialCredentials = [
    {
        user:'',
        password:''
    }
  ]

  const [credential,setCredentials] = useState(initialCredentials)


  return (
    <div>LoginForm</div>
  )
}

export default LoginForm