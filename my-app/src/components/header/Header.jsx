import React from 'react'
import { Link } from 'react-router-dom'
import './Header.css'
const Header = () => {
    return (
        <div className='header'>
            <div className='header-left' >
                <Link to="/"   ><img className='icon_logo' src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/IMDB_Logo_2016.svg/2560px-IMDB_Logo_2016.svg.png" alt="IMDB" /></Link>
                <Link to="/movies/popular" >POPULAR</Link>
                <Link to="/movies/top_rated" >TOP RATED</Link>
                <Link to="/movies/upcoming" >UPCOMING</Link>

            </div>


        </div>
    )
}

export default Header
