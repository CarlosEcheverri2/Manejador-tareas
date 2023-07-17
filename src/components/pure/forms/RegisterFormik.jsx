import React from 'react'
import { User } from '../../../models/user.class'
import {Formik, Field, Form, ErrorMessage} from 'formik'
import * as Yup from 'yup'
import { ROLES } from '../../../models/roles.enum'


const RegisterFormik = () => {

  let user = new User()

  const initialValues = {
    username: '',
    email:'',
    password:'',
    confirm:'',
    role:ROLES.USER
  }

  const registerSchema = Yup.object().shape(
    {

        username: Yup.string()
            .min(6, 'Username too short')
            .max(12, 'Username too long')
            .required('Username is required'),

        email: Yup.string()
            .email('Invalid email format')
            .required('Username is required'),
        
        password: Yup.string()
            .min(6, 'Password too short')
            .required('Username is required'),

        role: Yup.string().oneOf([ROLES.USER,ROLES.ADMIN], 'You must select a role: User or Admin;')
            .required('Role is required'),

        confirm: Yup.string()
            .when("password",{
                is: value => (value && value.length > 0 ? true : false ),
                then: Yup.string().oneOf(
                    [Yup.ref("password")],
                    'Password must match'
                )
            }).required('You must confirm the password')
    }             
  )

  const submit = (values) =>{
    console.log('register user')
  }

  return (
    <div>
        <h4>Register form</h4>
        <Formik
            initialValues={initialValues}
            validationSchema={registerSchema}
            onSubmit = { async (values) => {
                await new Promise ((r) => setTimeout(r,1000))
                alert(JSON.stringify(values,null,2))
            }}
        >
            {({values,
                    touched,
                    errors,
                    isSubmnitting,
                    handleChange,
                    handleBlur,
                }) => (
                    <Form>
                        <label>Username</label>
                        <Field id="username" name="username" type="text" placeholder="Your username" />

                        {
                            errors.username && touched.username && 
                            (
                                <ErrorMessage name="username" component='div'></ErrorMessage>
                            )
                        }

                        <label>Email</label>
                        <Field id="email" name="email" type="email" placeholder="youremail@email.com" />

                        {
                            errors.email && touched.email && 
                            (
                                <ErrorMessage name="email" component='div'></ErrorMessage>
                            )
                        }

                        <label>Password</label>
                        <Field id="password" name="password" type= 'password' placeholder="password" />

                        {
                            errors.email && touched.password && 
                            (
                                <ErrorMessage name="password" component='div'></ErrorMessage>
                            )
                        }

                        <label>Confirm password</label>
                        <Field id="confirm" name="confirm" placeholder="confirm password" />

                        {
                            errors.email && touched.confirm && 
                            (
                                <ErrorMessage name="password" component='div'></ErrorMessage>
                            )
                        }

                        <button type="submit">Registrar</button>


                    </Form>
                )
            }

        </Formik>
    </div>
  )
}

export default RegisterFormik