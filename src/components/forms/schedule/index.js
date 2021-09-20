import React, { useState } from 'react'
import PropTypes from 'prop-types'
import useAuth from 'libs/auth-react/hooks/useAuth'
import Button from 'libs/components/button'
import Text from 'libs/components/text'
import Form from 'libs/components/form'
import FieldInput from 'libs/components/fieldinput'
import Card from 'libs/components/card'



function ScheduleForm(props) {

    const [name,setName] = useState('')
    const [description,setDescription] = useState('')

    return (
        <Card className='m-16 p-8'>
        <Form >
            <Text type='heading-small' tailwind='mb-8'>
                Add new Schedule
            </Text>
           <FieldInput
            tailwind='my-6'
           label='Train Id'/>

<FieldInput
            tailwind='my-6'
           label='Departure Time'/>

<FieldInput
            tailwind='my-6'
           label='Arrival Time'/>

           <Button
            tailwind='my-6'
           typeSubmit>Save</Button>
        </Form>
        </Card>
    )
}


export default ScheduleForm

