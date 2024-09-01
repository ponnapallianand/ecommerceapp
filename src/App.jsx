import React from 'react';
import './App.css';
import Navbar from './navbar';
import Thumbnail1 from './PageElements/Thumbnail1';
import OffCanvas from './PageElements/OffCanvas';
import ImageSlider1 from './PageElements/ImageSlider1';
import useScrollHandler from './scrollHandler'; // Import your scroll handler

function App() {
  useScrollHandler();// Apply scroll handler
  return (
    <div className="App">
    <Navbar />
    <ImageSlider1 />
    <OffCanvas />
    
      
      </div>
  )
}

export default App