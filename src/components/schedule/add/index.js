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
import { GET_SCHEDULES } from '..'

export const ADD_SCHEDULE = gql`
mutation($schedule: ScheduleInput){
  addSchedule(schedule: $schedule)
}
`

function ScheduleForm(props) {

    const [trainId,setTrainId] = useState('')
    const [dTime,setDTime] = useState('')
    const [aTime,setATime] = useState('')


    const [saveSchedule, {loading,error,data}] = useMutation(ADD_SCHEDULE,{
        onError: e=>console.log(e),
        refetchQueries: [{query: GET_SCHEDULES}]
    })
    return (
        <Card className='m-16 p-8'>
        <Form  onSubmit={()=>saveSchedule({
               variables:{
                   schedule:{
                       trainId,
                       dTime,
                       aTime,
                   }
               }
           })}>
            <Text type='heading-small' tailwind='mb-8'>
                Add new Schedule
            </Text>
           <FieldInput
            tailwind='my-6'
           onChange={text=>setTrainId(text)}
           label='Train Id'/>

<FieldInput
            tailwind='my-6'
           onChange={text=>setDTime(text)}
           label='Departure Time'/>

<FieldInput
            tailwind='my-6'
           onChange={text=>setATime(text)}
           label='Arrival Time'/>
<Button
           loading={loading}
            tailwind='my-6'
           typeSubmit>Save</Button>

           <ErrorAlert isShown={error}/>

           <SuccessAlert 
           content='Successfully Saved Schedule!'
           isShown={data && data.addSchedule}/>
        </Form>
        </Card>
    )
}


export default ScheduleForm

