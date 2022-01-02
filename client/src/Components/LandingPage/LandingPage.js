import React from 'react'
import Navbar from '../Navbar/Navbar'
import './LandingPage.css'
import CashCounter from '../../Assets/Images/cash-counter.png'
import { Link } from 'react-router-dom'

const LandingPage = () => {
    return (
        <div className='landing__page__master'>
            <Navbar />
            <div className='header__block display__flex'>
                <div className='header__block__left display__flex'>
                    <img src={CashCounter} alt='cash counter here' className='header__image'></img>
                </div>
                <div className='header__block__right'>
                    <h1>Welcome To</h1>
                    <h1>Rynok E-Commerce.</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam sollicitudin libero vel quam tincidunt, in volutpat sem fringilla. Aenean rutrum augue quis ipsum iaculis maximus. Suspendisse sodales, lorem nec varius faucibus, felis orci scelerisque ligula, non elementum sapien tellus vitae lectus.</p>
                    <Link to='/' style={{ textDecoration: 'none' }}>
                        <button className='button__primary display__flex'>
                            Explore Our Products
                            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 48 48" fill='#03045e'><path d="M14 36c-2.21 0-3.98 1.79-3.98 4s1.77 4 3.98 4 4-1.79 4-4-1.79-4-4-4zm-12-32v4h4l7.19 15.17-2.7 4.9c-.31.58-.49 1.23-.49 1.93 0 2.21 1.79 4 4 4h24v-4h-23.15c-.28 0-.5-.22-.5-.5 0-.09.02-.17.06-.24l1.79-3.26h14.9c1.5 0 2.81-.83 3.5-2.06l7.15-12.98c.16-.28.25-.61.25-.96 0-1.11-.9-2-2-2h-29.57l-1.9-4h-6.53zm32 32c-2.21 0-3.98 1.79-3.98 4s1.77 4 3.98 4 4-1.79 4-4-1.79-4-4-4z" /><path fill="none" d="M0 0h48v48h-48z" /></svg>
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default LandingPage
