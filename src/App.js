
import './App.css';

import React, { Component } from 'react'
import Navbar from './components/Navbar'
import News from './components/News';
import LoadingBar from 'react-top-loading-bar'


import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";


export default class App extends Component {

  state={
    progress:0,

  }
  setProgress=(prog)=>{
    this.setState({progress:prog})
  }
//page top loader



  pAgesize=7;
  render() {
    return (
      <div>
         
          <Router>     
          <Navbar/>
         
          <LoadingBar
           color='#f11946'
           progress={this.state.progress}
           onLoaderFinished={() => this.setProgress(0)}
        />
          <Routes>
          <Route  path="/"         element={<News  getProgress={this.setProgress}  pagesize={this.pAgesize}   key="general"  country='in' category='general'/>}  />
          <Route  path="/business" element={<News  getProgress={this.setProgress}  pagesize={this.pAgesize}   key="business"  country='in' category='business'/>}   />
          <Route  path="/science" element={<News   getProgress={this.setProgress}  pagesize={this.pAgesize}   key="science"  country='in' category='science'/>}   />
          <Route  path="/sports"  element={<News   getProgress={this.setProgress}  pagesize={this.pAgesize}   key="sports"  country='in' category='sports'/>}  />
          <Route  path="/technology"element={<News getProgress={this.setProgress}  pagesize={this.pAgesize}   key="tech" country='in' category='technology'/>} />
          <Route  path="/health"  element={<News   getProgress={this.setProgress}  pagesize={this.pAgesize}   key="health"  country='in' category='health'/>}   />
          </Routes>
          
        </Router>
      </div>
        
    )
  }
}



