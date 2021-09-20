import React, { useState } from 'react'
import PropTypes from 'prop-types'
import useAuth from 'libs/auth-react/hooks/useAuth'
import Button from 'libs/components/button'
import Text from 'libs/components/text'
import Form from 'libs/components/form'
import FieldInput from 'libs/components/fieldinput'
import Card from 'libs/components/card'



function EmployeeForm(props) {

    const [seatCapacity,setSeatCapacity] = useState('')
    const [freightCapacity,setFreightCapacity] = useState('')
    const [model,setModel] = useState('')

    return (
        <Card className='m-16 p-8'>
        <Form >
            <Text type='heading-small' tailwind='mb-8'>
                Add new Employee
            </Text>
            <FieldInput
            tailwind='my-6'
           label='First Name'/>
          
          <FieldInput
            tailwind='my-6'
           label='Last Name'/>

<FieldInput
            tailwind='my-6'
           label='Phone Number'/>

<FieldInput
            tailwind='my-6'
           label='Email Address'/>


           <Button
            tailwind='my-6'
           typeSubmit>Save</Button>
        </Form>
        </Card>
    )
}


export default EmployeeForm

