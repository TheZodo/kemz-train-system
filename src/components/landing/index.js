import React from 'react'
import PropTypes from 'prop-types'
import Button from 'libs/components/button'
import { useHistory } from 'react-router-dom'
import Text from 'libs/components/text'
import Container from 'libs/components/container'

function Landing(props) {

    const history = useHistory()
    return (
        <Container narrow>
            <Text type='heading'>Train management system class project </Text>
            <Text tailwind='my-8'>by:</Text>
            <Text>Malaizyo Muzumala</Text>
            <Text>Kaputo Kalandanya</Text>
            <Text>Edgar Mutale</Text>
            <Text>Mundia Mundia</Text>

            <Button tailwind='my-16' onClick={() => history.push('/login')}>Admin Login</Button>
        </Container>
    )
}

Landing.propTypes = {

}

export default Landing

