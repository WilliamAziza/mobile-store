import React from 'react';
import Header from './Header';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div>
            <Header/>
            <p className='products'>Get all your Products Here</p>
            <div className='center-button'>
                <Link >
                    <button className='browse'>Browse Products</button>
                </Link>
            </div>

            
        </div>
    );
}

export default Home;
