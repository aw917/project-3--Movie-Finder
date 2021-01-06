import { useState, useEffect, useRef } from 'react';

const Note = ({mapIndex, e, getMovieFromLocalAPI, setMovieInfo, favorites, movieInfo}) => {
    
    const [inputValue, setInputValue] = useState("");
    const localApiEndPoint = 'https://project-3-moviefinder.herokuapp.com/favorites';

    const handleNoteUpdate = async (dbID, imdbID, evt, mapIndex) => {
        evt.preventDefault();
        console.log(inputValue);
        try {
            let inputNoteValue = {
                note: inputValue
            };
            let body = JSON.stringify(inputNoteValue);
            console.log(body);
            const response = await fetch (`${localApiEndPoint}/${dbID}`, {
              method: 'PUT',
              headers: {
                'Content-type': 'application/json'
              },
              body: body
            })
            const data = await response.json();
            console.log(data);
            getMovieFromLocalAPI();
          } catch (error) {
            console.error(error);
          }
    }

    return (
        <form onSubmit={
            (evt) => {
                handleNoteUpdate(e._id, e.imdbID, evt, mapIndex);
            }
        } className="movies-note-form">
            <input type="text" className="movie-note-input" value={inputValue} onChange={
                (evt) => {
                    setInputValue(evt.target.value)
                }
            }/>
            <input type="submit" value="Update Note" className="update-movie-note-button"/>
        </form>
    )
}

export default Note;