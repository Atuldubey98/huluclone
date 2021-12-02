import React  from "react";
import "./nav.css";
import requests from "./requests";

function Nav({setselectedOption}) {
    return (
        <div className="nav">
          <h2 onClick = {()=> setselectedOption(requests.fetchTrending)} >Trending</h2>
          <h2 onClick = {()=> setselectedOption(requests.fetchTopRated)} >Top Rated</h2>
          <h2 onClick = {()=> setselectedOption(requests.fetchActionMovie)} >Action</h2>
          <h2 onClick = {()=> setselectedOption(requests.fetchComedyMovies)} >Comedy</h2>
          <h2 onClick = {()=> setselectedOption(requests.fetchHorrorMovies)} >Horror</h2>
          <h2 onClick = {()=> setselectedOption(requests.fetchMystry)}>Mystery</h2>
          <h2 onClick = {()=> setselectedOption(requests.fetchRomanticMovies)}>Romance</h2>
          <h2 onClick = {()=> setselectedOption(requests.fetchWestern)}>Western</h2>
          <h2 onClick = {()=> setselectedOption(requests.fetchScify)}>Scifi</h2>
          <h2 onClick = {()=> setselectedOption(requests.fetchAnimation)}>Animation</h2>
          <h2 onClick = {()=> setselectedOption(requests.fetchTV)}>Movie</h2>
        </div>
    );
}
export default Nav;