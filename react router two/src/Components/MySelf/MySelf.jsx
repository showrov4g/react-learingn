import React from 'react';
import Speical from '../Speical/Speical';

const MySelf = ({assets}) => {
    return (
        <div>
            <h2>Myself</h2>
            <section className='flex'>
                <Speical assets={assets}></Speical>
            </section>
        </div>
    );
};

export default MySelf;