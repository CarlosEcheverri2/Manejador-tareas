import React, { useState } from 'react'

const RegisterForm = () => {

const initialData = [
    {
        user:'',
        name:'',
        email:'',
        password:''
    }
]

    const [credential,setCredentials] = useState(initialData)
      

  return (
    <div>RegisterForm</div>
  )
}

export default RegisterForm