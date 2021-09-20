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
import EmployeeForm from './add'

export const GET_EMPLOYEES = gql`
query{
  employees{
      _id
      fName
      lName
      phone
      email
  }
}
`

export const DELETE_EMPLOYEE = gql`
mutation($id: String){
  deleteEmployee(id: $id)
}
`

function Employee(props) {

    const [deleteTrainId,setDeleteTrainId] = useState('')

    const [employees,setEmployees  ] = useState([])
    const history = useHistory()
    const {loading,error,data} = useQuery(GET_EMPLOYEES,{
        onError: e=>console.log(e)
    })

    
    useEffect(()=>{

        if(data){
            setEmployees(data.employees)
        }

        return true
    },[data])


    
    
    const { dangerZoneOnClick, deleteDialog, loading: deleteLoading, errorAlert } = useDeleteHandler({
        id: deleteTrainId,
        dialogText: `Are you sure you want to delete this employee?  it will be permanently deleted and cannot be recovered.`,
        query: DELETE_EMPLOYEE,
        refetchQueries: [
            { query: GET_EMPLOYEES }
        ]
    })


    return (
       <>
       <Route path='/add'>
        <EmployeeForm/>
       </Route>
        <Route exact path='/'>

        <ContentController
            data={data}
            error={error}
            loading={loading}>

            {deleteDialog}


            <SearchAction
                className='mt-12'
                buttonText='Add Employee'
                onClick={() => {
                    history.push('/add')
                }}
                placeholder='Search Train'
            />

            {data &&
                (data.employees.length > 0 &&
                    <CardWrapper
                        header={{
                            heading: 'Employees',
                            subHeading: 'list of employees'
                        }}

                        tailwind="mb-6">
                        <div
                            className={`grid grid-cols-5 py-4 px-6 border-b border-gray-200`}
                        >
 <DataText
                                color
                                tailwind='font-medium text-gray-800 '>First Name</DataText>
                            <DataText
                                color
                                tailwind='font-medium text-gray-800 '>Last Name</DataText>
                            <DataText
                                color
                                tailwind='font-medium text-gray-800 mr-8'>Phone</DataText>
                            <DataText
                                color
                                tailwind='font-medium text-gray-800 '>Email</DataText>
                        </div>

                        {errorAlert}

                        {employees.map((item, index) => {
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


export default Employee

