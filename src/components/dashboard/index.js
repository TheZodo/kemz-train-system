import React, { useState } from 'react'
import PropTypes from 'prop-types'
import useAuth from 'libs/auth-react/hooks/useAuth'
import Button from 'libs/components/button'
import Text from 'libs/components/text'
import Tab from 'libs/components/tab'
import Container from 'libs/components/container'
import Train from 'components/train'
import { useHistory } from 'react-router'
import Employee from 'components/employee'
import Station from 'components/station'
import Schedule from 'components/schedule'



const forms = [{
    id: 'train',
    title: 'Trains',
    component: <Train/>
},
{
    id: 'employee',
    title: 'Staff',
    component: <Employee/>

},
{
    id: 'station',
    title: 'Stations',
    component: <Station/>

},
{
    id: 'schedule',
    title: 'Schedules',
    component: <Schedule/>

}]

function Dashboard(props) {
    const [selectedForm,setSelectedForm]=useState(forms[0].id)
    const { logout } = useAuth()

    const history = useHistory()
    return (
        <div className='bg-gray-50'>
        <div className='flex justify-between m-12'>
            <Text type='heading'>TRAIN MANAGEMENT SYSTEM DASHBOARD (WIP)</Text>

            <Button
            variant='outline'
                onClick={() => logout()}
                >Logout</Button>
        </div>


<Container narrow>
        <div className='flex my-8 border-b border-gray-300'>


{forms.map((form, index) => (
    <Tab
        key={index}
        id={form.id}
        isSelected={selectedForm === form.id}
        onClick={() => {
            history.push('/')
            setSelectedForm(form.id)
}}
        variant='underline'
    >{form.title}</Tab>
))}
        </div>


        {forms.map((form, index) => {
                if (form.id === selectedForm) {
                    return form.component
                }
            })}

        </Container>
        </div>
    )
}

Dashboard.propTypes = {

}

export default Dashboard

