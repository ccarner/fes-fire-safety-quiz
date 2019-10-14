import React, { Component } from "react";
import ReactDOM from "react-dom";
//import fs from 'fs'
// import testtext from './test.txt'
//import htmlfile from './intro_to_fire_safety.html'
// var fs = require('fs')

// const testtext = fs.readFile('./test.txt')

class Module extends Component {
  // htmlfile = require(
  //   './intro_to_fire_safety.html'
  // )
  //htmlfile = fs.readFile('./intro_to_fire_safety.html')

  state = {};
  render() {
    var sample_html = `<!DOCTYPE html>
      <html>
      <body>
      
      <h1>Intro</h1>
      <p>Fire is dangerous.</p>
      <p>Fire is dangerous.</p>
      <p>Fire is dangerous.</p>

      <img src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/fb11fc85-17fe-47b7-aeb2-c9e005709fe7/d4hc3gz-554fb94a-0db6-42e9-a266-7d31566db1da.jpg/v1/fill/w_400,h_737,q_75,strp/evil_fire_element_by_amorphisss_d4hc3gz-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NzM3IiwicGF0aCI6IlwvZlwvZmIxMWZjODUtMTdmZS00N2I3LWFlYjItYzllMDA1NzA5ZmU3XC9kNGhjM2d6LTU1NGZiOTRhLTBkYjYtNDJlOS1hMjY2LTdkMzE1NjZkYjFkYS5qcGciLCJ3aWR0aCI6Ijw9NDAwIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmltYWdlLm9wZXJhdGlvbnMiXX0.Odj7XrhYqtLV-bdjC-fHDVKtR-Tl4DIF0Z6sfVQa2rQ" alt="Fire" class="quizImage">
      <br/>
      <video src="https://media.istockphoto.com/videos/seemless-and-loopable-flames-slow-motion-video-id493922248" type="video/mp4" controls class ="quizVideo">
      
      </body>
      </html>`;
    //function createMarkup() { return {__html: '<b> ＦＩＲＥ　is dangerous!!!'}; };
    function createMarkup() {
      return { __html: sample_html };
    }
    //console.log(testtext)
    return (
      <React.Fragment>
        asdf
        <div dangerouslySetInnerHTML={createMarkup()} />
      </React.Fragment>
    );
  }
}

export default Module;
