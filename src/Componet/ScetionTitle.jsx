import React from 'react';

const ScetionTitle = ({ subheading, heading }) => {
    return (
        <div className='mx-auto text-center md:w-3/12'>
            <p className="text-sm text-yellow-500 font-serif mb-2">--- {subheading} ---</p>
            <h3 className="uppercase text-3xl mb-5 border-y-2 py-3 ">{heading}</h3>
        </div>
    );
};

export default ScetionTitle;