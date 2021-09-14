import React from 'react'
import PropTypes from 'prop-types'
import useAuth from 'libs/auth-react/hooks/useAuth'
import Button from 'libs/components/button'
import Text from 'libs/components/text'

function Dashboard(props) {

    const { logout } = useAuth()
    return (
        <div className='flex justify-between m-12'>
            <Text type='heading'>TRAIN MANAGEMENT SYSTEM DASHBOARD (WIP)</Text>

            <Button
            variant='outline'
                onClick={() => logout()}
                >Logout</Button>
        </div>
    )
}

Dashboard.propTypes = {

}

export default Dashboard

