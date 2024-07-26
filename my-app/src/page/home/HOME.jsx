import React, { useEffect, useState } from 'react'
import './HOME.css'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import { Link } from 'react-router-dom';
import MovieList from '../../components/movieslist/MOVIESLIST';
const HOME = () => {

    const [popularity, setpopularity] = useState([])


    useEffect(() => {
        fetch('https://api.themoviedb.org/3/movie/popular?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US')
            .then(res => res.json())
            .then(data => setpopularity(data.results))
    }, [])


    return (
        <div>

            <div className='poster' >

                <Carousel  
                className='crl'
                    show    Thumbs={false}
                    autoPlay={true}
                    transitionTime={2}
                    infiniteLoop={true}
                    showStatus={false}
                    showIndicators = {true}
                >
                    {
                        popularity.map((movie) => (

                            <Link className='link'  to={`movie/${movie.id}`} >
                                <div className='posterimage' >
                                    <img src={`https://image.tmdb.org/t/p/original${movie && movie.backdrop_path}`} alt="" />

                                </div>

                                <div className="posterimage_overlay">
                                    <div className='title' >{movie ? movie.original_title : ''}</div>
                                    <div className='runtime' >

                                        {movie ? movie.release_date : ""}

                                        <span className='rating ' >{movie ? movie.vote_average : ''}
                                            <i className='fas fa-star' />{" "}
                                        </span>
                                    </div>

                                    <div className='desc' >{movie ? movie.overview : ""}</div>
                                </div>
                            </Link>



                        ))
                    }
                </Carousel>
                 <MovieList/>

            </div>



        </div>
    )
}

export default HOME

