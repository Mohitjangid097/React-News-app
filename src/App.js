import './App.css';

import React, { Component } from 'react'
import NavBar from './components/NavBar';
import News from './components/News';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
export default class App extends Component {
  render() {
    return (
      <>
        <BrowserRouter>
          <NavBar />
          <Routes>

                 <Route exact path="/" element={<News  key="general" pageSize={6} country="in" category="general" />} />
              <Route exact path="/business" element={<News  key="business" pageSize={6} country="in" category="business" />} />
              <Route exact path="/entertainment" element={<News  key="entertainment" pageSize={6} country="in" category="entertainment" />} />
              <Route exact path="/general" element={<News  key="general" pageSize={6} country="in" category="general" />} />
              <Route exact path="/health" element={<News  key="health" pageSize={6} country="in" category="health" />} />
              <Route exact path="/science" element={<News  key="science" pageSize={6} country="in" category="science" />} />
              <Route exact path="/sports" element={<News  key="sports" pageSize={6} country="in" category="sports" />} />
              <Route exact path="/technology" element={<News  key="technology" pageSize={6} country="in" category="technology" />} />


            {/* <Route exact path="/"><News key="general" pageSize={5} country="in" category="general" /></Route>
            <Route exact path="/business"><News key="business" pageSize={5} country="in" category="business" /></Route>
            <Route exact path="/entertainment"><News key="entertainment" pageSize={5} country="in" category="entertainment" /></Route>
            <Route exact path="/general"><News key="general" pageSize={5} country="in" category="general" /></Route>
            <Route exact path="/health"><News key="health" pageSize={5} country="in" category="health" /></Route>
            <Route exact path="/science"><News key="science" pageSize={5} country="in" category="science" /></Route>
            <Route exact path="/sports"><News key="sports" pageSize={5} country="in" category="sports" /></Route>
            <Route exact path="/technology"><News key="technology" pageSize={5} country="in" category="technology" /></Route> */}
          </Routes>
        </BrowserRouter>
      </>
    )
  }
}
