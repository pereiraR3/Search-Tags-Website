import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import SearchComponent from './models/SearchComponent';
import ImageStorySet from './models/ImageStorySet';
import Navbar from './models/Navbar';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Navbar />
    <div className="ellipse-background"/>
    <SearchComponent />
    <ImageStorySet />
  </React.StrictMode>
);

reportWebVitals();
