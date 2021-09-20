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
import StationForm from './add'

export const GET_STATIONS = gql`
query{
  stations{
      _id
      name
      description
  }
}
`

export const DELETE_STATION = gql`
mutation($id: String){
  deleteStation(id: $id)
}
`

function Station(props) {

    const [deleteTrainId,setDeleteTrainId] = useState('')

    const [stations,setStations  ] = useState([])
    const history = useHistory()
    const {loading,error,data} = useQuery(GET_STATIONS,{
        onError: e=>console.log(e)
    })

    
    useEffect(()=>{
        console.log('updated trains data')

        if(data){
            setStations(data.stations)
        }

        return true
    },[data])


    
    
    const { dangerZoneOnClick, deleteDialog, loading: deleteLoading, errorAlert } = useDeleteHandler({
        id: deleteTrainId,
        dialogText: `Are you sure you want to delete this station?  it will be permanently deleted and cannot be recovered.`,
        query: DELETE_STATION,
        refetchQueries: [
            { query: GET_STATIONS }
        ]
    })


    return (
       <>
       <Route path='/add'>
        <StationForm/>
       </Route>
        <Route exact path='/'>

        <ContentController
            data={data}
            error={error}
            loading={loading}>

            {deleteDialog}


            <SearchAction
                className='mt-12'
                buttonText='Add Station'
                onClick={() => {
                    history.push('/add')
                }}
            />

            {data &&
                (data.stations.length > 0 &&
                    <CardWrapper
                        header={{
                            heading: 'Stations',
                            subHeading: 'list of stations'
                        }}

                        tailwind="mb-6">
                        <div
                            className={`grid grid-cols-3 py-4 px-6 border-b border-gray-200`}
                        >
 <DataText
                                color
                                tailwind='font-medium text-gray-800'>Station Name</DataText>
                            <DataText
                                color
                                tailwind='font-medium text-gray-800 '>Station Description</DataText>
              
                        </div>

                        {errorAlert}

                        {stations.map((item, index) => {
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


export default Station

