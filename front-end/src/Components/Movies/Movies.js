import { useState, useEffect, useRef } from 'react';
import React from 'react'

const Movies = () => {
    // React states
    // for populating
    const [movieSearch, setMovieSearch] = useState([]);
    const [movieInfo, setMovieInfo] = useState([]);
    // const [moviePoster, setMoviePoster] = useState([]);
    const [movieTitle, setMovieTitle] = useState([]);
    const [movieYear, setMovieYear] = useState([]);

    // Use ref
    const noteInput = useRef(null);

    // API info
    const apiKey = '3b12114f';

    // Retrieve individual movie information from API
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

    // Search API for movie title and year
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
        setMovieInfo([]);
        searchForMovies();
    }

    const handleFavoriteSubmit = async (e, id) => {
        e.preventDefault();
        // let noteHolder = noteInput.current.value;
        let imdbID = id;
        let newFavorite = JSON.stringify({
            imdbID: imdbID,
            note: ""
        });
        e.currentTarget.reset();
        console.log(newFavorite);
        try {
            const response = await fetch('http://localhost:3001/favorites', {
                method: 'POST',
                headers: {
                    'Content-type' : 'application/json'
                },
                body: newFavorite
            });
            const data = await response.json();
        } catch (error) {
            console.error(error);
        }
    }

    // Use effect necessary stuff
    useEffect(() => {
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
                            <form onSubmit={
                                (evt) => {
                                    handleFavoriteSubmit(evt, e.imdbID);
                                }
                            } className="movies-note-form">
                                <input type="submit" value="Add to Favorites" className="movie-note-button"/>
                            </form>
                            <div className="subinfo-for-movies">
                                <li key={`director-${e.imdbID}`}><span className="subinfo-for-movies-header">Director</span>: {e.Director}</li>
                                <li key={`country-${e.imdbID}`}><span className="subinfo-for-movies-header">Country</span>: {e.Country}</li>
                                <li key={`awards-${e.imdbID}`}><span className="subinfo-for-movies-header">Awards</span>: {e.Awards}</li>
                                <li key={`genre-${e.imdbID}`}><span className="subinfo-for-movies-header">Genre</span>: {e.Genre}</li>
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