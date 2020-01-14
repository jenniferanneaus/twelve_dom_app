import React from 'react';
import logo from '../logo.svg';
import cover from '../images/cover-robot.png'

var sectionStyle = {
    backgroundImage: "url(" + cover + ")"
};

function Header() {
    return (
        <div className="full-height home" id="home" style={ sectionStyle }>
            <header>
                <div className="container nav-container">
                    <img src={logo} className="App-logo" alt="logo" />
                    <nav>
                        <ul className="nav-list">
                            <li><a href='#days'>The Twelve Days</a></li>
                            <li><a href='#about'>About</a></li>
                            <li><a href='#home'>Home</a></li>
                        </ul>
                    </nav>
                </div>
            </header>
            <div className="container home-container">
                <div className="col">
                    <div />
                    <div className="site-title">
                        <div className="site-title-border" />
                        <div className="site-title-border-underline" />
                        <h1 className="site-title-text">12 DAYS<br/>OF MECHSMAS</h1>
                        <div className="site-title-border bg-accent" />
                        <div className="site-title-border-underline" />
                    </div>
                    <div>
                        <div className="site-title-border-underline" />
                        <p className="text-home-footer">DESIGNS BY <span className="text-accent">ARTIST NAME</span></p>
                        <p className="text-copyright">&copy; 2019</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header