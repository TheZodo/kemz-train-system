import React, { useState } from 'react'
import PropTypes from 'prop-types'
import useAuth from 'libs/auth-react/hooks/useAuth'
import Button from 'libs/components/button'
import Text from 'libs/components/text'
import Form from 'libs/components/form'
import FieldInput from 'libs/components/fieldinput'
import Card from 'libs/components/card'



function TrainForm(props) {

    const [seatCapacity,setSeatCapacity] = useState('')
    const [freightCapacity,setFreightCapacity] = useState('')
    const [model,setModel] = useState('')

    return (
        <Card className='m-16 p-8'>
        <Form >
            <Text type='heading-small' tailwind='mb-8'>
                Add new Train
            </Text>
           <FieldInput
            tailwind='my-6'
           value={seatCapacity}
           type='number'
           onChange={text=>setSeatCapacity(text)}
           label='Seat Capacity'/>

<FieldInput
 tailwind='my-6'
           value={freightCapacity}
           type='number'
           onChange={text=>setFreightCapacity(text)}
           label='Freight Capacity'/>

<FieldInput
 tailwind='my-6'
           value={model}
           onChange={text=>setModel(text)}
           label='Train Model'/>

           <Button
            tailwind='my-6'
           typeSubmit>Save</Button>
        </Form>
        </Card>
    )
}


export default TrainForm

