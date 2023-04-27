import React from 'react';
import image from '../images/zdjecie.jpg'



export default function Header() {


    return (
        <header className='header'>

            <div className='header_wrapper'>
                <img src={image} alt='zdjecie' />
            </div>

        </header>
    )



}