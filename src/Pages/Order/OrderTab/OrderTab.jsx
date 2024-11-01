import React from 'react'
import FoodeCard from '../../../Componet/FoodCard/FoodeCard'

const OrderTab = ({items}) => {
    return (
        <div className='grid md:grid-cols-3 gap-10 my-10'>
            {
                items.map(item => <FoodeCard
                    item={item}></FoodeCard>)
            }
        </div>
    )
}

export default OrderTab
