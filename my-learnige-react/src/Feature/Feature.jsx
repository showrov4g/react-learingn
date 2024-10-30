import React from 'react';
import PropTypes from 'prop-types';
import { FaCircleCheck } from "react-icons/fa6";

const Feature = ({feature}) => {
    return (
        <div className='flex items-center gap-2 text-left'>
            <FaCircleCheck  className='text-green-500'/>
            <p>{feature}</p>
        </div>
    );
};

export default Feature;
Feature.propTypes ={
    feature:PropTypes.string
}