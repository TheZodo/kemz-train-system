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
import { GET_STATIONS } from '..'


export const ADD_STATION = gql`
mutation($station: StationInput){
  addStation(station: $station)
}
`

function StationForm(props) {

    const [name,setName] = useState('')
    const [description,setDescription] = useState('')

    const [saveStation, {loading,error,data}] = useMutation(ADD_STATION,{
        onError: e=>console.log(e),
        refetchQueries:[{
            query: GET_STATIONS
        }]
    })

    return (
        <Card className='m-16 p-8'>
        <Form  onSubmit={()=>saveStation({
               variables:{
                   station:{
                       name,
                       description
                   }
               }
           })}>
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
           loading={loading}
            tailwind='my-6'
           typeSubmit>Save</Button>

           <ErrorAlert isShown={error}/>

           <SuccessAlert 
           content='Successfully Saved Station!'
           isShown={data && data.addStation}/>


        </Form>
        </Card>
    )
}


export default StationForm

