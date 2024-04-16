import React from 'react'

export const LeftSideButton = () => {
    return (
        <div className='left-side-button-container'>
            <button className='select-button'>Select</button>
            <button className='home-button'>Rocketdex</button>
            {/* dynamically change pokedex/rocketdex */}
            <button className='menu-button'>Menu</button>
        </div>
    )
}