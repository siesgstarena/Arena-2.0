import React from 'react';
import { Headline5, Body1 } from '@material/react-typography';
import './index.scss';

const TopicExplanationPage = () => (
  <div className="center tc">
    <div className="sidebar">
      <p> Topic: Adhoc </p>
      <a className="active" href="#home">Home</a>
      <a className="" href="#news">News</a>
      <a className="" href="#contact">Contact</a>
      <a className="" href="#about">About</a>
    </div>

    <div id="home" className="content">
      <h2>Responsive Sidebar Example</h2>
      <p>This example use media queries to transform the sidebar to a top navigation bar when the screen size is 700px or less.</p>
      <p id="">We have also added a media query for screens that are 400px or less, which will vertically stack and center the navigation links.</p>
      <h3 id="">Resize the browser window to see the effect.</h3>
    </div>
    <div className="content">
      <h2 id="news">Responsive Sidebar Example</h2>
      <p>This example use media queries to transform the sidebar to a top navigation bar when the screen size is 700px or less.</p>
      <p id="contact">We have also added a media query for screens that are 400px or less, which will vertically stack and center the navigation links.</p>
      <h3>Resize the browser window to see the effect.</h3>
    </div>
  </div>
);

export default TopicExplanationPage;
