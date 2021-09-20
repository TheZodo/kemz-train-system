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
import TrainForm from './add'

export const GET_TRAINS = gql`
query{
  trains{
      _id
      seatCapacity
      freightCapacity
      model
  }
}
`

export const DELETE_TRAIN = gql`
mutation($id: String){
  deleteTrain(id: $id)
}
`

function Train(props) {

    const [deleteTrainId,setDeleteTrainId] = useState('')

    const [trains,setTrains  ] = useState([])
    const history = useHistory()
    const {loading,error,data} = useQuery(GET_TRAINS,{
        onError: e=>console.log(e)
    })

    
    useEffect(()=>{
        console.log('updated trains data')

        if(data){
            setTrains(data.trains)
        }

        return true
    },[data])


    
    
    const { dangerZoneOnClick, deleteDialog, loading: deleteLoading, errorAlert } = useDeleteHandler({
        id: deleteTrainId,
        dialogText: `Are you sure you want to delete this train?  it will be permanently deleted and cannot be recovered.`,
        query: DELETE_TRAIN,
        refetchQueries: [
            { query: GET_TRAINS }
        ]
    })


    return (
       <>
       <Route path='/add'>
        <TrainForm/>
       </Route>
        <Route exact path='/'>

        <ContentController
            data={data}
            error={error}
            loading={loading}>

            {deleteDialog}


            <SearchAction
                className='mt-12'
                buttonText='Add Train'
                onClick={() => {
                    history.push('/add')
                }}
                placeholder='Search Train'
            />

            {data &&
                (data.trains.length > 0 &&
                    <CardWrapper
                        header={{
                            heading: 'Trains',
                            subHeading: 'list of trains'
                        }}

                        tailwind="mb-6">
                        <div
                            className={`grid grid-cols-6 py-4 px-6 border-b border-gray-200`}
                        >
 <DataText
                                color
                                tailwind='font-medium text-gray-800 col-span-2'>Train ID</DataText>
                            <DataText
                                color
                                tailwind='font-medium text-gray-800 '>Seat Capacity</DataText>
                            <DataText
                                color
                                tailwind='font-medium text-gray-800 mr-8'>Freight Capacity</DataText>
                            <DataText
                                color
                                tailwind='font-medium text-gray-800 '>Train Model</DataText>
                        </div>

                        {errorAlert}

                        {trains.map((item, index) => {
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


export default Train

