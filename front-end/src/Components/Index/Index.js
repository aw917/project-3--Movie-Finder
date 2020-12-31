import React from 'react'
import { Route, Link, Switch } from 'react-router-dom';

const Index = () => {
    return (
        <div>
             <img src="https://images.unsplash.com/photo-1486395130845-ec128138002e?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80" alt="ominous lightbulbs" className="lightbulb-main"/>
             <marquee behavior="scroll" direction="left">movies can be...enlightening!</marquee>
            <div className="index-description">
                <h2>Welcome to movie finder!</h2>
                <p>Movie finder specializes in a simple way to find movies and add them to a list of favorites that you can watch later!
                Go to the 'Movie Finder' page to find fun movies to watch!  See something you like?  Add it to your favorites with a note. 
                You will be able to edit these notes at any time!
                <br/><br/>Happy viewing!</p>
            </div>
        </div>
    )
}

export default Index