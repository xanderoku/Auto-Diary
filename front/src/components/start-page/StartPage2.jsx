import React, { Component } from "react";
import Regform from '../forms/RegForm';
import './start-page2.css'
import bgVideo from "./bgvid1080.mp4";

export default class StartPage2 extends Component {
  render() {
    return (
      <div id="videoDiv2">
        <div id="videoBlock2">
          <video muted preload="preload" id="video2" autoPlay loop="loop">
            <source src={bgVideo} type="video/mp4" />
            <source src={bgVideo} type="video/ogg" />
          </video>
          <div id="videoMessageBox2">
            <div id="videoMessage2">
              <h1 style= {{color: '#e50914'}}>Welcome to Auto Diary</h1>
              <Regform />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
