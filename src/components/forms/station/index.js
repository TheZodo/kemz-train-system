import React, { useState } from 'react'
import PropTypes from 'prop-types'
import useAuth from 'libs/auth-react/hooks/useAuth'
import Button from 'libs/components/button'
import Text from 'libs/components/text'
import Form from 'libs/components/form'
import FieldInput from 'libs/components/fieldinput'
import Card from 'libs/components/card'



function StationForm(props) {

    const [name,setName] = useState('')
    const [description,setDescription] = useState('')

    return (
        <Card className='m-16 p-8'>
        <Form >
            <Text type='heading-small' tailwind='mb-8'>
                Add new Station
            </Text>
           <FieldInput
            tailwind='my-6'
           value={name}
           onChange={text=>setName(text)}
           label='Station Name'/>

<FieldInput
 tailwind='my-6'
           value={description}
           onChange={text=>setDescription(text)}
           label='Station Description'/>

           <Button
            tailwind='my-6'
           typeSubmit>Save</Button>
        </Form>
        </Card>
    )
}


export default StationForm

