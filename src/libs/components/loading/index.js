import React from 'react';
import PropTypes from 'prop-types';
import Spinner from 'react-spinkit'

const Loading = ({ tailwind, className ,screen}) => {
    return (
        <div className={`w-full h-full flex  ${screen && 'w-screen h-screen'} items-center justify-center ${tailwind} ${className}`}>
                <Spinner name="three-bounce" color="steelblue" />
               
        </div>
    );
};

Loading.propTypes = {

};

export default Loading;