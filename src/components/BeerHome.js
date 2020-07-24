import React from 'react';
import {Link} from 'react-router-dom';

const BeerHome =()=>{

    return (
        
<div>
    
    <div className="card">
    <Link to={`/beers`}>
        <img src='/bar.jpeg' className='images'/>
        </Link>
        <h1>All Beers</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
 </div>
        


    
    <div className="card">
    <Link to={`/random-beer`}>
        <img src='/beerman.jpg' className='images'/>
        </Link>
        <h1>Random Beer</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
 </div>
 
    
    <div className="card">
    <Link to={`new-beer`}>
        <img src='/beertap.jpg' className='images'/>
        </Link>
        <h1>New Beer</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
 </div>
    
        </div>
    )
}


export default BeerHome;