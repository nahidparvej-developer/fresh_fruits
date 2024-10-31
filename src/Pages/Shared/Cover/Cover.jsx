import React from 'react'
import { Parallax, Background } from 'react-parallax';

const Cover = ({ image,title }) => {
    return (

<Parallax
        blur={{ min: -50, max: 50 }}
        bgImage={image}
        bgImageAlt="the menu"
        strength={-200}
    >
       <div
            className="hero h-[420px]" >
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-neutral-content text-center">
                <div className="max-w-md">
                    <h1 className="mb-5 text-5xl font-bold uppercase">{title}</h1>
                    <p className="mb-5">
                    Would you like to try a dish?
                    </p>
                 
                 
                </div>
            </div>
        </div>
    </Parallax>

        
    )
}

export default Cover
