import React from 'react'
import {Formik, Field, Form} from 'formik'
import * as Yup from 'yup'

const loginSchema = Yup.object().shape({
    email: Yup.string().email('Invalid email format')
    .required('Email is required'),
    password: Yup.string().required('password is required')
})

const LoginFormik = () => {
  return (
    <div>
        <h4>Login form</h4>
        <Formik
            initialValues={{
                email: '',
                password: ''
            }}

            //validacion de esquema por medio de yup
            validationSchema = {loginSchema}
            
            onSubmit = { async (values) => {
                await new Promise ((r) => setTimeout(r,1000))
                alert(JSON.stringify(values,null,2))
                //We save the data in the localStores 
                localStorage.setItem('credentials',values)
            }}
        
        >

            {/* We have obtain props from formik */}

            {/* {({errors, touched, isSubmitting}) => {

            }} */}

            {
                props => {
                    const {
                        values,
                        touched,
                        errors,
                        isSubmitting,
                        handleChange,
                        handleBlur
                    } = props

                    return (
                        <Form>
                        <label>Email</label>
                        <Field id="email" name="email" placeholder="youremail@email.com" />

                        {
                            errors.email && touched.email && 
                            (   
                                <div className='error'>
                                    <p>{errors.email}</p>
                                </div>
                            )
                        }
        
                        <label>Password</label>
                        <Field id="password" name="password" placeholder="password" />

                        {
                            errors.password && touched.password && 
                            (   
                                <div className='error'>
                                    <p>{errors.password}</p>
                                </div>
                            )
                        }

                        <button type="submit">Enviar</button>
                        {/* { isSubmitting ? (<p>Login your credentials<p/>): ""} */}

                    </Form>
                
                    )
                }
            }


        </Formik>
    </div>
  )
}

export default LoginFormik