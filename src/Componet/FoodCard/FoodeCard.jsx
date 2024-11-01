import React from 'react'

const FoodeCard = ({item}) => {
    const{name , image, price ,recipe} = item;
    return (
        <div>
            <div className="card bg-base-100  shadow-xl">
                <figure>
                    <img
                        src={image}
                        alt="Shoes" />
                </figure>
                <p className='absolute right-0 mr-3 mt-5 p-2 text-center rounded-lg bg-slate-950 text-white'>${price}</p>
                <div className="card-body">
                    <h2 className="card-title">{name}</h2>
                    <p>{recipe}</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary">Add to Cart</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FoodeCard
