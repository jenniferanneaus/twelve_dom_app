import React from 'react';
import './App.css';
import smoothscroll from 'smoothscroll-polyfill';
import Header from './components/Header';
import ThumbnailCollection from './components/ThumbnailCollection';
import thumbnailsData from './thumbnailsData';

class App extends React.Component {
  constructor() {
    super()
    smoothscroll.polyfill();
    this.myRef = React.createRef();
  }

  scroll(ref) {
    document.querySelector(ref).scrollIntoView({ behavior: 'smooth' });
  }

  render() {
    return (
      <div className="App">
        <Header />
        <ThumbnailCollection data={thumbnailsData} />
        <div className="full-height about" id="about">
            <div className="container about-container">
                <p className="about-text">This site was built by Jennifer Ralph, in collaboration with a client. The cover image is a photo by Bruce Tang on Unsplash, and the "Twelve Days" images are from Unsplash, Pexels and Pixabay.</p>
                <p className="about-text">The project is designed as a portfolio website for an artist, who was to complete 12 robot models in the lead-up to Christmas. In the completed project, each "Twelve Days" image would link to a fullscreen version of that artwork, along with a description of the tools and techniques used in its creation.</p>
            </div>
        </div>
      </div>
    );
  }
}

export default App;
