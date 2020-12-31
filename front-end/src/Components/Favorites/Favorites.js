import React from 'react'
import { useState, useEffect, useRef } from 'react';
import apiKey from '../../ignorethis.js'
require('dotenv').config();

const Favorites = () => {
    // favorites has the imdbID's and notes for each movie
    const [favorites, setFavorites] = useState([]);
    // movieInfo has the actual JSON file from the api for each movie
    const [movieInfo, setMovieInfo] = useState([]);
    const [notes, setNotes] = useState([])

    const favoriteNote = useRef(null);

    const getMovieFromMovieAPI = async (idHolder) => {
        let movieInfoArr =[];
        for (let i = 0; i < idHolder.length; i++) {
            let movieId = idHolder[i].imdbID;
            idHolder[i].note = "";
            try {
                // variable to hold our endpoint
                const apiEndpoint = `http://www.omdbapi.com/?i=${movieId}&apikey=${apiKey}`;
                // store response from fetch request in a variable
                const response = await fetch(apiEndpoint);
                // parse the json from the response object
                const data = await response.json();
                let addMovieInfo = data;
                addMovieInfo._id = idHolder[i]._id;
                addMovieInfo.note = idHolder[i].note;
                movieInfoArr.push(addMovieInfo);
                console.log(addMovieInfo);
                } catch {
                console.log("Failed to retrieve data")
            }
        }
        setMovieInfo(movieInfoArr);
        console.log(movieInfo);
    }

    const getMovieFromLocalAPI = async () => {
        console.log(apiKey);
        try {
            // variable to hold our endpoint
            const apiEndpoint = `http://localhost:3001/favorites/`;
            // store response from fetch request in a variable
            const response = await fetch(apiEndpoint);
            // parse the json from the response object
            const data = await response.json();
            setFavorites(data)
            getMovieFromMovieAPI(data);
            console.log(data)
            } catch {
            console.log("Failed to retrieve data")
        }
    }

    const removeMovieFromFavorites = async (dbID, imdbID, e) => {
        e.preventDefault();
        try {
          const response = await fetch (`http://localhost:3001/favorites/${dbID}`, {
            method: 'DELETE',
            headers: {
              'Content-type': 'application/json'
            }
          })
          // line below is what shows up
          const data = await response.json();
          const filteredMovies = movieInfo.filter (x => x.dbID !== data.dbID)
          setMovieInfo(filteredMovies);
        } catch (error) {
          console.error(error);
        }
    }
    
    const handleNoteUpdate = async (dbID, imdbID, evt, mapIndex) => {
        evt.preventDefault();
        let noteMaker = [];
        let noteHolder = movieInfo;
        noteMaker[mapIndex] = this.current.value;
        setNotes(noteMaker);
        noteHolder[mapIndex].note = notes[mapIndex];
        setMovieInfo(noteHolder);
        console.log(movieInfo);
        try {
            let movieInfoCopy = favorites;
            let body = JSON.stringify(movieInfoCopy);
            const response = await fetch (`http://localhost:3001/favorites/${dbID}`, {
              method: 'PUT',
              headers: {
                'Content-type': 'application/json'
              },
              body: body
            })
            const data = await response.json();
            setFavorites(movieInfoCopy);
          } catch (error) {
            console.error(error);
          }
        console.log('test');
    }

    useEffect(() => {
        console.log("use effect")
        getMovieFromLocalAPI();
    }, []);
    
    return (
        <div>
            <h2 className="header-for-favorites">Favorites Page</h2>
            {
                movieInfo.map((e, mapIndex) => {
                    return (
                        <div className="movies-search-results">
                            <p>{e.Title} ({e.Year})</p>
                            <img src={`${e.Poster}`} alt={e.Title}/>
                            <button onClick={
                                (evt) => {
                                    removeMovieFromFavorites(e._id, e.imdbID, evt)
                                }
                            }>Remove from favorites</button>
                            <form onSubmit={
                                (evt) => {
                                    handleNoteUpdate(e._id, e.imdbID, evt, mapIndex);
                                }
                            } className="movies-note-form">
                                <input type="text" className="movie-note-input"/>
                                <input type="submit" value="Update Note" className="update-movie-note-button"/>
                            </form>
                            <div className="subinfo-for-movies">
                                <li key={`note-${e.imdbID}`}><span className="subinfo-for-movies-header">Note</span>: {e.note}</li>
                                <li key={`director-${e.imdbID}`}><span className="subinfo-for-movies-header">Director</span>: {e.Director}</li>
                                <li key={`country-${e.imdbID}`}><span className="subinfo-for-movies-header">Country</span>: {e.Country}</li>
                                <li key={`awards-${e.imdbID}`}><span className="subinfo-for-movies-header">Awards</span>: {e.Awards}</li>
                                <li key={`genre-${e.imdbID}`}><span className="subinfo-for-movies-header">Genre</span>: {e.Genre}</li>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default Favorites