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
  // apiKey="2a3f682e90384faa8002a0e91007c3d5"
  render() {
    return (
      <>
        <BrowserRouter>
          <NavBar />
          <Routes>

            <Route exact path="/" element={<News apiKey={this.apiKey} key="general" pageSize={6} country="in" category="general" />} />
            <Route exact path="/business" element={<News apiKey={this.apiKey} key="business" pageSize={6} country="in" category="business" />} />
            <Route exact path="/entertainment" element={<News apiKey={this.apiKey} key="entertainment" pageSize={6} country="in" category="entertainment" />} />
            <Route exact path="/general" element={<News apiKey={this.apiKey} key="general" pageSize={6} country="in" category="general" />} />
            <Route exact path="/health" element={<News apiKey={this.apiKey} key="health" pageSize={6} country="in" category="health" />} />
            <Route exact path="/science" element={<News apiKey={this.apiKey} key="science" pageSize={6} country="in" category="science" />} />
            <Route exact path="/sports" element={<News apiKey={this.apiKey} key="sports" pageSize={6} country="in" category="sports" />} />
            <Route exact path="/technology" element={<News apiKey={this.apiKey} key="technology" pageSize={6} country="in" category="technology" />} />
          </Routes>
        </BrowserRouter>
      </>
    )
  }
}