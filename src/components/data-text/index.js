import React from 'react'
import PropTypes from 'prop-types'
import Text from 'libs/components/text'

function DataText(props) {
    return (
        <Text
        textSize
            {...props}
            tailwind={'text-xs md:text-sm lg:text-base ' + props.tailwind} />
    )
}

DataText.propTypes = {

}

export default DataText

