import React from "react";
import './header.css';
import HomeIcon from '@material-ui/icons/Home';
import FlashOnIcon from '@material-ui/icons/FlashOn';
import VideoLibraryIcon from '@material-ui/icons/VideoLibrary';
import SearchIcon from '@material-ui/icons/Search';
import PersonOutlineIcon from '@material-ui/icons/PersonOutline';
import LiveTvIcon from '@material-ui/icons/LiveTv';
function Header() {
    return <div className="header">
        <div className="header__icons">
            <div className="header__icon header_icon--active">
                <HomeIcon />

                <p>Home</p>
            </div>
            <div className="header__icon">
                <FlashOnIcon />

                <p>Trending</p>
            </div>
            <div className="header__icon">
                <LiveTvIcon />

                <p>Live Shows</p>
            </div>
            <div className="header__icon">
                <VideoLibraryIcon />

                <p>Library</p>
            </div>
            <div className="header__icon">
                <SearchIcon />

                <p>Search</p>
            </div>
            <div className="header__icon">
                <PersonOutlineIcon />

                <p>User</p>
            </div>






        </div>
        <img src="https://cdn.freebiesupply.com/logos/large/2x/hulu-logo-black-and-white.png" alt="" srcset="" />
    </div>
}
export default Header