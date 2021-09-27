import React, { useState } from 'react'
import PropTypes from 'prop-types'
import Form from 'libs/components/form'
import FieldInput from 'libs/components/fieldinput'
import { useMutation, useQuery } from '@apollo/react-hooks'
import { gql } from 'apollo-boost'
import ContentController from 'libs/components/content-controller'
import DropDown from 'libs/components/dropdown'
import DropDownItem from 'libs/components/dropdown/dropdownitem'
import ErrorAlert from 'libs/components/alert/error'
import SuccessAlert from 'libs/components/alert/success'
import Button from 'libs/components/button'
import Text from 'libs/components/text'
import DescriptionList from 'libs/components/description-list'
import DescItem from 'libs/components/description-list/desc-item'
import Container from 'libs/components/container'

export const ADD_TICKET = gql`
mutation($scheduleId: String,$ticketType:String){
  addTicket(scheduleId: $scheduleId,ticketType: $ticketType)
}
`

export const GET_SCHEDULES = gql`
query{
  schedules{
      _id
      trainId
      dTime
      aTime
  }
}
`


function BookTicket(props) {
    const [selectedSchedule, setSelectedSchedule] = useState()
    const [ticketType, setTicketType] = useState('passenger')


    const [addTicket, { data: addData, loading: addLoading, error: addError }] = useMutation(ADD_TICKET)

    const { data, loading, error } = useQuery(GET_SCHEDULES)

    const onSubmit = () => {
        if (selectedSchedule) {
            addTicket({
                variables: {
                    scheduleId: selectedSchedule._id, ticketType
                }
            })
        }
    }

    return (
        <ContentController
            error={error}
            loading={loading}
            data={data}>
            {data && data.schedules &&
                <Container tailwind='p-16' narrow>

                    <Text type='heading' tailwind='my-16 w-full text-center'> Book A Ticket </Text>

                    <Form onSubmit={onSubmit}>

                        <div className='my-8 relative z-10'>

                            <DropDown
                                content={
                                    <>
                                        <DropDownItem onClick={() => setTicketType('passenger')}>passenger</DropDownItem>
                                        <DropDownItem onClick={() => setTicketType('freight')}>freight</DropDownItem>
                                    </>
                                }
                            >
                                <Button variant='outline ' tailwind='w-full'>Ticket Type</Button>
                            </DropDown>
                        </div>

                        <div className='my-8'>
                            <DropDown
                                content={
                                    <>
                                        {
                                            data.schedules.map((item, index) => (
                                                <DropDownItem
                                                    onClick={() => setSelectedSchedule(item)}
                                                    key={index}>{item._id}</DropDownItem>
                                            ))
                                        }
                                    </>
                                }
                            >
                                <Button variant='outline' tailwind='w-full '>Schedule</Button>
                            </DropDown>
                        </div>

                        <DescriptionList tailwind='w-full my-16'>

                            <DescItem
                                title='Ticket Type'
                                content={ticketType}
                            />


                            <DescItem
                                title='Train Id'
                                content={selectedSchedule && selectedSchedule.trainId}
                            />
                            <DescItem
                                title='Departure Time'
                                content={selectedSchedule &&selectedSchedule.dTime}
                            />
                            <DescItem
                                title='Arrival Time'
                                content={selectedSchedule &&selectedSchedule.aTime}
                            />

                        </DescriptionList>


                        <Button
                            tailwind='w-full my-8'
                            loading={addLoading}
                            typeSubmit >Book Ticket</Button>

                        <ErrorAlert isShown={addError} />

                        <SuccessAlert
                            content='Successfully Booked Ticket!'
                            isShown={addData && addData.addTicket} />

                    </Form>
                </Container>
            }
        </ContentController>
    )
}

BookTicket.propTypes = {

}

export default BookTicket

