// import React from 'react'
// import {Link} from 'react-router-dom'
// import  Skeleton  , {SkeletonTheme} from 'react-loading-skeleton'
// import './CARD.css'
// import {useEffect , useState} from 'react'



// const CARD = ({movie}) => {

   
//  const [loading , setLoading] = useState(true)

//  useEffect(()=>{
// setTimeout(() => {
//     setLoading(false)
// }, 1500);
//  }, [])



//   return (

// <>

// {

// loading ? 

// <div className='cards'>

// <SkeletonTheme color='#202020'  highlightColor='#444' >   
// <Skeleton
// duration={2} height={300}
// />

// </SkeletonTheme>
// </div>


// :

// <Link to={`movie/${movie.id}`} style={{textDecoration : "none" , color : "white"}}  >
// <div className='card' >

// <img  className='cards_img' src={`https://image.tmdb.org/t/p/original${movie?movie.poster_path : "" }`} alt="" />
// <div className="overlay">
// <div className='title' > {movie ? movie.orignal_title: ""} </div>
// <div className="runtime">
// {movie ? movie.release_date: ""}
// <span className='rating' >{movie ? movie.vote_average: ""}
// <i className='fas fa-star'></i>
// </span>

// </div>

// <div  className='desc '  > {movie ? movie.overview.slice(0,118)+"...":""}</div>

// </div>

// </div>





// </Link>




// }




// </>


// )
// }

// export default CARD


import React, {useEffect, useState} from "react"
import Skeleton, { SkeletonTheme } from "react-loading-skeleton"
import "./CARD.css"
import { Link } from "react-router-dom"

const Cards = ({movie}) => {

    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        setTimeout(() => {
            setIsLoading(false)
        }, 1500)
    }, []) 

    return <>
    {
        isLoading
        ?
        <div className="cards">
            <SkeletonTheme color="#202020" highlightColor="#444">
                <Skeleton height={300} duration={2} />
            </SkeletonTheme>
        </div>
        :
        <Link to={`/movie/${movie.id}`} style={{textDecoration:"none", color:"white"}}>
            <div className="cards">
                <img className="cards__img" src={`https://image.tmdb.org/t/p/original${movie?movie.poster_path:""}`} />
                <div className="cards__overlay">
                    <div className="card__title">{movie?movie.original_title:""}</div>
                    <div className="card__runtime">
                        {movie?movie.release_date:""}
                        <span className="card__rating">{movie?movie.vote_average:""}<i className="fas fa-star" /></span>
                    </div>
                    <div className="card__description">{movie ? movie.overview.slice(0,118)+"..." : ""}</div>
                </div>
            </div>
        </Link>
    }
    </>
}

export default Cards