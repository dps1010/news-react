
import './App.css';
import Navbar from './components/Navbar';
import React, { Component } from 'react'
import News from './components/News';
import {
  BrowserRouter as Router,
  Routes,
  Route 
} from "react-router-dom";

export default class App extends Component {

   pageSize = 9;
  render() {
    
    return (
      <div>
        <Router>
        <Navbar/>
        <Routes>
          <Route exact path="/general" element={<News key="general" pageSize={this.pageSize} country="in" Category="general"/>}></Route>
          <Route exact path="/business" element={<News key="business" pageSize={this.pageSize} country="in" Category="business"/>}></Route>
          <Route exact path="/entertainment" element={<News key="entertainment" pageSize={this.pageSize} country="in" Category="entertainment"/>}></Route>
          <Route exact path="/health" element={<News key="health" pageSize={this.pageSize} country="in" Category="health"/>}></Route>
          <Route exact path="/science"element={<News key="science" pageSize={this.pageSize} country="in" Category="science"/>}></Route>
          <Route exact path="/sports" element={<News key="sports" pageSize={this.pageSize} country="in" Category="sports"/>}></Route>
          <Route exact path="/technology"element={<News key="technology" pageSize={this.pageSize} country="in" Category="technology"/>}></Route>
         
        </Routes>
        </Router>
      </div>
    )
  } 
}

