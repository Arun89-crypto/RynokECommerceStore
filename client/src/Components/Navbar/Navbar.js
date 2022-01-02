import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'

const Navbar = () => {
    const [nav, setNav] = useState(false);
    return (
        <div className='display__flex flex__space__between navbar__master'>
            <div className='display__flex nav__left'>
                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 48 48"><path d="M14 36c-2.21 0-3.98 1.79-3.98 4s1.77 4 3.98 4 4-1.79 4-4-1.79-4-4-4zm-12-32v4h4l7.19 15.17-2.7 4.9c-.31.58-.49 1.23-.49 1.93 0 2.21 1.79 4 4 4h24v-4h-23.15c-.28 0-.5-.22-.5-.5 0-.09.02-.17.06-.24l1.79-3.26h14.9c1.5 0 2.81-.83 3.5-2.06l7.15-12.98c.16-.28.25-.61.25-.96 0-1.11-.9-2-2-2h-29.57l-1.9-4h-6.53zm32 32c-2.21 0-3.98 1.79-3.98 4s1.77 4 3.98 4 4-1.79 4-4-1.79-4-4-4z" /><path fill="none" d="M0 0h48v48h-48z" /></svg>
                <h2>Rynok.</h2>
            </div>
            <div className='nav__middle'>
                <ul className='display__flex nav__middle flex__space__around' style={{ listStyle: 'none' }}>
                    <li className='nav__link'>
                        <Link to='/products' style={{ textDecoration: 'none' }} className='display__flex link'>
                            Products
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 6.35 6.35" className='nav__link__svg'><path d="m 1.2932027,0.52839152 c -0.4191339,0 -0.76377769,0.346705 -0.76377769,0.76584398 v 3.761529 c 0,0.419132 0.34464379,0.765844 0.76377769,0.765844 h 3.7635945 c 0.4191339,0 0.7637778,-0.346712 0.7637778,-0.765844 v -3.761529 c 0,-0.41913898 -0.3446439,-0.76584398 -0.7637778,-0.76584398 z m 0,0.52968498 h 1.0877889 v 1.853116 c 0.00191,0.234304 0.2849452,0.350694 0.4511352,0.185517 l 0.344165,-0.341579 0.3415813,0.341579 c 0.1661901,0.165177 0.4492215,0.04879 0.4511353,-0.185517 v -1.853116 h 1.0877888 c 0.1331511,0 0.2346111,0.103011 0.2346111,0.236159 v 3.761529 c 0,0.133151 -0.10146,0.236678 -0.2346111,0.236678 H 1.2932027 c -0.133151,0 -0.2340943,-0.103527 -0.2340943,-0.236678 v -3.761529 c 0,-0.133148 0.1009433,-0.236159 0.2340943,-0.236159 z m 1.6169556,0 h 0.5296834 v 1.214395 l -0.078031,-0.07803 c -0.1032081,-0.102597 -0.2698956,-0.102597 -0.3731037,0 l -0.078548,0.07803 z" color="#000" font-family="sans-serif" font-weight="400" overflow="visible" paint-order="markers fill stroke" /></svg>
                        </Link>
                    </li>
                    <li className='nav__link'>
                        <Link to='/' style={{ textDecoration: 'none' }} className='display__flex link'>
                            Your Wishlist
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="20" className='nav__link__svg'><path d="M20.16,5A6.29,6.29,0,0,0,12,4.36a6.27,6.27,0,0,0-8.16,9.48l6.21,6.22a2.78,2.78,0,0,0,3.9,0l6.21-6.22A6.27,6.27,0,0,0,20.16,5Zm-1.41,7.46-6.21,6.21a.76.76,0,0,1-1.08,0L5.25,12.43a4.29,4.29,0,0,1,0-6,4.27,4.27,0,0,1,6,0,1,1,0,0,0,1.42,0,4.27,4.27,0,0,1,6,0A4.29,4.29,0,0,1,18.75,12.43Z" /></svg>
                        </Link>
                    </li>
                    <li className='nav__link'>
                        <Link to='/' style={{ textDecoration: 'none' }} className='display__flex link'>
                            Account
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="20" className='nav__link__svg'><path d="M15.71,12.71a6,6,0,1,0-7.42,0,10,10,0,0,0-6.22,8.18,1,1,0,0,0,2,.22,8,8,0,0,1,15.9,0,1,1,0,0,0,1,.89h.11a1,1,0,0,0,.88-1.1A10,10,0,0,0,15.71,12.71ZM12,12a4,4,0,1,1,4-4A4,4,0,0,1,12,12Z" /></svg>
                        </Link>
                    </li>
                    <li className='nav__link'>
                        <Link to='/' style={{ textDecoration: 'none' }} className='display__flex link'>
                            Cart
                            <svg xmlns="http://www.w3.org/2000/svg" data-name="Layer 1" viewBox="0 0 24 24" width="20" height="20" className='nav__link__svg'><path d="M14,18a1,1,0,0,0,1-1V15a1,1,0,0,0-2,0v2A1,1,0,0,0,14,18Zm-4,0a1,1,0,0,0,1-1V15a1,1,0,0,0-2,0v2A1,1,0,0,0,10,18ZM19,6H17.62L15.89,2.55a1,1,0,1,0-1.78.9L15.38,6H8.62L9.89,3.45a1,1,0,0,0-1.78-.9L6.38,6H5a3,3,0,0,0-.92,5.84l.74,7.46a3,3,0,0,0,3,2.7h8.38a3,3,0,0,0,3-2.7l.74-7.46A3,3,0,0,0,19,6ZM17.19,19.1a1,1,0,0,1-1,.9H7.81a1,1,0,0,1-1-.9L6.1,12H17.9ZM19,10H5A1,1,0,0,1,5,8H19a1,1,0,0,1,0,2Z" /></svg>
                        </Link>
                    </li>
                </ul>
            </div>
            <div className='display__flex nav__right'>
                <Link to='/'>
                    <button className='button__primary'>Sign In</button>
                </Link>
                <Link to='/'>
                    <button className='button__primary'>Sign Up</button>
                </Link>
            </div>
            <button className='menu__burger' onClick={() => setNav(true)}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill='#000' width="25" height="25"><g data-name="Layer 2"><g data-name="menu"><rect width="24" height="24" opacity="0" transform="rotate(180 12 12)" /><rect width="18" height="2" x="3" y="11" rx=".95" ry=".95" /><rect width="18" height="2" x="3" y="16" rx=".95" ry=".95" /><rect width="18" height="2" x="3" y="6" rx=".95" ry=".95" /></g></g></svg>
            </button>
            <div className={(nav) ? 'display__flex flex__flow__down mobile__nav translated' : 'display__flex flex__flow__down mobile__nav'}>
                <ul className='display__flex flex__flow__down' style={{ listStyle: 'none' }}>
                    <li className='nav__link'>
                        <Link to='/products' style={{ textDecoration: 'none' }} className='display__flex link'>
                            Products
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 6.35 6.35" className='nav__link__svg'><path d="m 1.2932027,0.52839152 c -0.4191339,0 -0.76377769,0.346705 -0.76377769,0.76584398 v 3.761529 c 0,0.419132 0.34464379,0.765844 0.76377769,0.765844 h 3.7635945 c 0.4191339,0 0.7637778,-0.346712 0.7637778,-0.765844 v -3.761529 c 0,-0.41913898 -0.3446439,-0.76584398 -0.7637778,-0.76584398 z m 0,0.52968498 h 1.0877889 v 1.853116 c 0.00191,0.234304 0.2849452,0.350694 0.4511352,0.185517 l 0.344165,-0.341579 0.3415813,0.341579 c 0.1661901,0.165177 0.4492215,0.04879 0.4511353,-0.185517 v -1.853116 h 1.0877888 c 0.1331511,0 0.2346111,0.103011 0.2346111,0.236159 v 3.761529 c 0,0.133151 -0.10146,0.236678 -0.2346111,0.236678 H 1.2932027 c -0.133151,0 -0.2340943,-0.103527 -0.2340943,-0.236678 v -3.761529 c 0,-0.133148 0.1009433,-0.236159 0.2340943,-0.236159 z m 1.6169556,0 h 0.5296834 v 1.214395 l -0.078031,-0.07803 c -0.1032081,-0.102597 -0.2698956,-0.102597 -0.3731037,0 l -0.078548,0.07803 z" color="#000" font-family="sans-serif" font-weight="400" overflow="visible" paint-order="markers fill stroke" /></svg>
                        </Link>
                    </li>
                    <li className='nav__link'>
                        <Link to='/' style={{ textDecoration: 'none' }} className='display__flex link'>
                            Your Wishlist
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="20" className='nav__link__svg'><path d="M20.16,5A6.29,6.29,0,0,0,12,4.36a6.27,6.27,0,0,0-8.16,9.48l6.21,6.22a2.78,2.78,0,0,0,3.9,0l6.21-6.22A6.27,6.27,0,0,0,20.16,5Zm-1.41,7.46-6.21,6.21a.76.76,0,0,1-1.08,0L5.25,12.43a4.29,4.29,0,0,1,0-6,4.27,4.27,0,0,1,6,0,1,1,0,0,0,1.42,0,4.27,4.27,0,0,1,6,0A4.29,4.29,0,0,1,18.75,12.43Z" /></svg>
                        </Link>
                    </li>
                    <li className='nav__link'>
                        <Link to='/' style={{ textDecoration: 'none' }} className='display__flex link'>
                            Account
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="20" className='nav__link__svg'><path d="M15.71,12.71a6,6,0,1,0-7.42,0,10,10,0,0,0-6.22,8.18,1,1,0,0,0,2,.22,8,8,0,0,1,15.9,0,1,1,0,0,0,1,.89h.11a1,1,0,0,0,.88-1.1A10,10,0,0,0,15.71,12.71ZM12,12a4,4,0,1,1,4-4A4,4,0,0,1,12,12Z" /></svg>
                        </Link>
                    </li>
                    <li className='nav__link'>
                        <Link to='/' style={{ textDecoration: 'none' }} className='display__flex link'>
                            Cart
                            <svg xmlns="http://www.w3.org/2000/svg" data-name="Layer 1" viewBox="0 0 24 24" width="20" height="20" className='nav__link__svg'><path d="M14,18a1,1,0,0,0,1-1V15a1,1,0,0,0-2,0v2A1,1,0,0,0,14,18Zm-4,0a1,1,0,0,0,1-1V15a1,1,0,0,0-2,0v2A1,1,0,0,0,10,18ZM19,6H17.62L15.89,2.55a1,1,0,1,0-1.78.9L15.38,6H8.62L9.89,3.45a1,1,0,0,0-1.78-.9L6.38,6H5a3,3,0,0,0-.92,5.84l.74,7.46a3,3,0,0,0,3,2.7h8.38a3,3,0,0,0,3-2.7l.74-7.46A3,3,0,0,0,19,6ZM17.19,19.1a1,1,0,0,1-1,.9H7.81a1,1,0,0,1-1-.9L6.1,12H17.9ZM19,10H5A1,1,0,0,1,5,8H19a1,1,0,0,1,0,2Z" /></svg>
                        </Link>
                    </li>
                </ul>
                <br></br>
                <Link to='/'>
                    <button className='button__primary'>Sign In</button>
                </Link>
                <br></br>
                <Link to='/'>
                    <button className='button__primary'>Sign Up</button>
                </Link>
                <button className='nav__close__button' onClick={() => setNav(false)}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill='#000' width="25" height="25" ><path d="M19,11H13V5a1,1,0,0,0-2,0v6H5a1,1,0,0,0,0,2h6v6a1,1,0,0,0,2,0V13h6a1,1,0,0,0,0-2Z" /></svg>
                </button>
            </div>
        </div>
    )
}

export default Navbar
