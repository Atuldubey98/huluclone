import React, { useState, useEffect } from "react";
import "./results.css";
import VideoCard from "./VideoCard";
import axios from "./axios";
import FlipMove from 'react-flip-move';


function Results({selectedOption}) {
    const [movies ,setMovie ] = useState([]);

    useEffect(()=>{
        //run the code once
        //remove listitem and it will run everytime
        async function fetchData() {
            const request = await axios.get(selectedOption);
            console.log(request);
            setMovie(request.data.results)
            return request;
        } 
        fetchData();
    }, [selectedOption]);

    return (
        <div className="results">
            <FlipMove>
            {
                movies.map((movie)=>( 
                <VideoCard key= {movie.id} movie = {movie}/>
             ))
            }
            </FlipMove>
            
        </div>
    );
}

export default Results;