// import React from 'react'
// import CARD from '../card/CARD'
// import {useParams} from 'react-router-dom'
// import {useState , useEffect} from 'react'
// import "./MOVIESLIST.css"

// const MOVIESLIST = () => {
  
// const [movieslist , setMovieslist] = useState([])
// const {type} = useParams()
  
//  const getData = (()=>{
//     fetch(`https://api.themoviedb.org/3/movie/${type ? type : "popularity"}?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US`)
//     .then(res => res.json())
//     .then(data => setMovieslist(data.results))


//  }) 


// useEffect(()=>{

// getData()

// } , [])

// useEffect(()=>{
// getData()

// } , [type])

 
  
  
//     return (
//     <div className='movie_list' >
//       <h2 className='list_title' >{(type ? type : "POPULAR")}</h2>

// <div className="list_card">

// {
// movieslist.map((movie)=>{
// <CARD movie = {movie} />

// })

// }


// </div>
//     </div>
//   )
// }



// export default MOVIESLIST



import React, {useEffect, useState} from "react"
import "./MOVIESLIST.css"
import { useParams } from "react-router-dom"
import Cards from "../card/CARD"

const MovieList = () => {
    
    const [movieList, setMovieList] = useState([])
    const {type} = useParams()

    useEffect(() => {
        getData()
    }, [])

    useEffect(() => {
        getData()
    }, [type])

    const getData = () => {
        fetch(`https://api.themoviedb.org/3/movie/${type ? type : "popular"}?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US`)
        .then(res => res.json())
        .then(data => setMovieList(data.results))
    }

    return (
        <div className="movie__list">
            <h2 className="list__title">{(type ? type : "POPULAR").toUpperCase()}</h2>
            <div className="list__cards">
                {
                    movieList.map(movie => (
                        <Cards movie={movie} />
                    ))
                }
            </div>
        </div>
    )
}

export default MovieList