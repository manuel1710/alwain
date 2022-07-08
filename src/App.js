import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Redirect,
} from "react-router-dom";


// PAGES
import Home from "./pages";
import Gallery from "./pages/Gallery";
import People from "./pages/People";
import Places from "./pages/Places";
import Food from "./pages/Food";
import Animals from "./pages/Animals";

class App extends Component{
  render(){
    return(
      <Router>
        {/* <ScrollToTop> */}
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/gallery" element={<Gallery/>} />
            <Route exact path="/people" element={<People/>}/>
            <Route exact path="/places" element={<Places/>}/>
            <Route exact path="/food" element={<Food/>}/>
            <Route exact path="/animals" element={<Animals/>}/>
          </Routes>
        {/* </ScrollToTop> */}
      </Router>
    );
  }
}

export default App;
