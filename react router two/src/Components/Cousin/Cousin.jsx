import React from 'react';
import Speical from '../Speical/Speical';

const Cousin = ({name, assets}) => {
    return (
        <div>
            <h2>Cousin</h2>
            <p>{name}</p>
            <section>
                {
                    assets && <Speical assets={assets}></Speical>
                }
            </section>
        </div>
    );
};

export default Cousin;