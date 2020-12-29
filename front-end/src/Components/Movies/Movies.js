import { useState, useEffect, useRef } from 'react';
import React from 'react'

const Movies = () => {
    // React states
    // for populating
    const [movieSearch, setMovieSearch] = useState([]);
    const [movieInfo, setMovieInfo] = useState([]);
    const [moviePoster, setMoviePoster] = useState([]);
    const [movieTitle, setMovieTitle] = useState([]);
    const [movieYear, setMovieYear] = useState([]);

    // API info
    const apiKey = '3b12114f';

    // const movieTitle = useRef(null);
    // const movieYear = useRef(null);

    // get info from the API
    const getMovieInfo = async (idHolder) => {
        let movieInfoArr = [];
        for (let i = 0; i < idHolder.length; i++) {
            let movieID = idHolder[i];
            try {
                // variable to hold our endpoint
                const apiEndpoint = `http://www.omdbapi.com/?i=${movieID}&apikey=${apiKey}`;
                // store response from fetch request in a variable
                const response = await fetch(apiEndpoint);
                // parse the json from the response object
                const data = await response.json();
                let addMovieInfo = data;
                movieInfoArr.push(addMovieInfo);
              } catch {
                console.log("Failed to retrieve data")
              }
        }
        setMovieInfo(movieInfoArr);
    }

    // Search API
    const searchForMovies = async () => {
        try {
          // variable to hold our endpoint
          const apiEndpoint = `http://www.omdbapi.com/?s=${movieTitle}&y=${movieYear}&type=movie&apikey=${apiKey}`;
          // store response from fetch request in a variable
          const response = await fetch(apiEndpoint);
          // parse the json from the response object
          const data = await response.json();
          setMovieSearch(data);
          let idHolder = data.Search.map ((e) => {
              return e.imdbID;
          })
          getMovieInfo(idHolder);
        } catch {
          console.log("Failed to retrieve data")
        }
    }

    const handleSubmit = async (e) => {
        // prevent a refresh
        e.preventDefault();
        // clear all results
        setMovieInfo([]);
        searchForMovies();
    }


    // Use effect necessary stuff
    useEffect(() => {
        // searchForMovies();
        console.log("use effect")
    }, []);

    return (
        <div>
            <h2>Search for a movie!</h2>
            <p>Only the title is required, the year can just help you find a specific movie.</p>
            <form onSubmit={handleSubmit}>
                <label htmlFor="title">Title</label>
                <input type="text" id="title" className="movie-search-input" value={movieTitle} onChange={(e) => setMovieTitle(e.target.value)}/>
                <label htmlFor="year">Year</label>
                <input type="number" id="year" className="movie-search-input" value={movieYear} onChange={(e) => setMovieYear(e.target.value)}/>
                <input type="submit" value="Search" className="movie-search-button"/>
            </form>
            <ul>
            {
                movieInfo.map((e) => {
                    return (
                        <div className="movies-search-results">
                            <p>{e.Title} ({e.Year})</p>
                
                            <img src={`${e.Poster}`} alt={e.Title}/>
                            <button>Add to Favorites</button>
                            <div className="subinfo-for-movies">
                                <li key={e.imdbID}><span className="subinfo-for-movies-header">Director:</span> {e.Director}</li>
                                <li key={e.imdbID}><span className="subinfo-for-movies-header">Country:</span> {e.Country}</li>
                                <li key={e.imdbID}><span className="subinfo-for-movies-header">Awards:</span> {e.Awards}</li>
                                <li key={e.imdbID}><span className="subinfo-for-movies-header">Genre:</span> {e.Genre}</li>
                            </div>
                        </div>
                    )
                })
            }
            </ul>
        </div>
    )
}

export default Movies