import React, { useEffect, useState } from 'react'
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
import useDeleteHandler from 'components/hooks/useDeleteHandler'
import SearchAction from 'libs/components/search-action'
import DataText from 'components/data-text'
import ContentController from 'libs/components/content-controller'
import CardWrapper from 'libs/components/card-wrapper'
import Item from './item'
import { Route, useHistory } from 'react-router'
import ScheduleForm from './add'

export const GET_SCHEDULES = gql`
query{
  schedules{
      _id
      trainId
      dTime
      aTime
      booked{
        freight
        passenger
      }
  }
}
`

export const DELETE_SCHEDULE = gql`
mutation($id: String){
  deleteSchedule(id: $id)
}
`

function Schedule(props) {

    const [deleteTrainId,setDeleteTrainId] = useState('')

    const [schedules,setSchedules  ] = useState([])
    const history = useHistory()
    const {loading,error,data} = useQuery(GET_SCHEDULES,{
        onError: e=>console.log(e)
    })

    
    useEffect(()=>{

        if(data){
            setSchedules(data.schedules)
        }

        return true
    },[data])


    
    
    const { dangerZoneOnClick, deleteDialog, loading: deleteLoading, errorAlert } = useDeleteHandler({
        id: deleteTrainId,
        dialogText: `Are you sure you want to delete this schedule?  it will be permanently deleted and cannot be recovered.`,
        query: DELETE_SCHEDULE,
        refetchQueries: [
            { query: GET_SCHEDULES }
        ]
    })


    return (
       <>
       <Route path='/add'>
        <ScheduleForm/>
       </Route>
        <Route exact path='/'>

        <ContentController
            data={data}
            error={error}
            loading={loading}>

            {deleteDialog}


            <SearchAction
                className='mt-12'
                buttonText='Add Schedule'
                onClick={() => {
                    history.push('/add')
                }}
                placeholder='Search Schedule'
            />

            {data &&
                (data.schedules.length > 0 &&
                    <CardWrapper
                        header={{
                            heading: 'Schedules',
                            subHeading: 'list of schedules'
                        }}

                        tailwind="mb-6">
                        <div
                            className={`grid grid-cols-7 py-4 px-6 border-b border-gray-200`}
                        >
 <DataText
                                color
                                tailwind='font-medium text-gray-800 col-span-2'>Train ID</DataText>
                            <DataText
                                color
                                tailwind='font-medium text-gray-800 '>Departure Time</DataText>
                            <DataText
                                color
                                tailwind='font-medium text-gray-800 mr-8'>Arrival Time</DataText>

<DataText
                                color
                                tailwind='font-medium text-gray-800 mr-8'>Freight Tickets</DataText>

<DataText
                                color
                                tailwind='font-medium text-gray-800 mr-8'>Passenger Tickets</DataText>
     </div>

                        {errorAlert}

                        {schedules.map((item, index) => {
                            return <Item
                                {...item}
                                loading={deleteLoading}
                                onEdit={(id) => {
                                   // history.push('/loans/repayment/edit?lid=' + loanId + '&rid=' + id)
                                }}
                                onDelete={(id) => {
                                    setDeleteTrainId(id)
                                    dangerZoneOnClick()
                                }}
                                isGray={index % 2 === 0}
                            />
                        })}
                    </CardWrapper>
                )
                    }

                    </ContentController>
                    </Route>
                    </>
    )
}


export default Schedule

