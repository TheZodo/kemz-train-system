import React, { useState } from 'react'
import PropTypes from 'prop-types'
import useAuth from 'libs/auth-react/hooks/useAuth'
import Button from 'libs/components/button'
import Text from 'libs/components/text'
import Form from 'libs/components/form'
import FieldInput from 'libs/components/fieldinput'
import Card from 'libs/components/card'
import { useMutation, useQuery } from '@apollo/react-hooks'
import { gql } from 'apollo-boost'
import ErrorAlert from 'libs/components/alert/error'
import SuccessAlert from 'libs/components/alert/success'
import { GET_EMPLOYEES } from '..'

export const ADD_EMPLOYEE = gql`
mutation($employee: EmployeeInput){
  addEmployee(employee: $employee)
}
`


function EmployeeForm(props) {

    const [fName,setFName] = useState('')
    const [lName,setLName] = useState('')
    const [phone,setPhone] = useState('')
    const [email,setEmail] = useState('')


    const [saveEmployee, {loading,error,data}] = useMutation(ADD_EMPLOYEE,{
        onError: e=>console.log(e),
        refetchQueries: [
            {query:GET_EMPLOYEES}
        ]
    })
    return (
        <Card className='m-16 p-8'>
        <Form   onSubmit={()=>saveEmployee({
               variables:{
                   employee:{
                       fName,
                       lName,
                       phone,
                       email
                   }
               }
           })}>
            <Text type='heading-small' tailwind='mb-8'>
                Add new Employee
            </Text>
            <FieldInput
            tailwind='my-6'
           onChange={text=>setFName(text)}

           label='First Name'/>
          
          <FieldInput
            tailwind='my-6'
           onChange={text=>setLName(text)}

           label='Last Name'/>

<FieldInput
            tailwind='my-6'
           onChange={text=>setPhone(text)}

           label='Phone Number'/>

<FieldInput
            tailwind='my-6'
           onChange={text=>setEmail(text)}

           label='Email Address'/>


<Button
           loading={loading}
            tailwind='my-6'
           typeSubmit>Save</Button>

           <ErrorAlert isShown={error}/>

           <SuccessAlert 
           content='Successfully Saved Staff!'
           isShown={data && data.addEmployee}/>
        </Form>
        </Card>
    )
}


export default EmployeeForm

