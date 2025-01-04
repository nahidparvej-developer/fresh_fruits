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
                    <div className="card-actions flex flex-col items-center">
                        <button className="p-3 rounded-lg hover:text-orange-500 bg-slate-300 border-0 border-b-4 border-b-orange-500 hover:bg-black uppercase">Add to Cart</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FoodeCard
