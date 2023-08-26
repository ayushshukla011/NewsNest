import React, { Component } from 'react'
import {Link} from "react-router-dom";

export class Navbar extends Component {
   under= (event)=>{
    let btn=document.querySelectorAll('.nav-link')
    Array.from(btn).forEach((cate)=>{
      cate.style.textDecoration= "none";
      cate.style.color= "";
    })
    event.target.style.textDecoration= "underline";
    event.target.style.color= "white";
  } 
  render() {
    const togglep=()=>{
      document.body.style.background="rgb(153 180 220)";
      console.log("primary");
    }
    const togglew=()=>{
      document.body.style.background="#f1e0ac";
      console.log("warning");
    }
    const toggled=()=>{
      document.body.style.background="#f0bac0";
      console.log("danger");
    }
    const toggleoo=()=>{
      document.body.style.background="";
      console.log("default");
    }

    return (
      <div >
      <nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-dark ">
      <Link className="navbar-brand" to="/"><img src="./icons8-nbc-32.png" alt="" />NewsNest~</Link >
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse  justify-content-between" id="navbarCollapse">
          <ul className="navbar-nav ">
              <li className="nav-item active">
                  <Link className="nav-link" onClick={this.under} to="/"> <img src="./icons8-globe-16.png" alt="" />Home</Link >
              </li>
              
          
          <li className="nav-item"> <Link className="nav-link" onClick={this.under} to="/business"><img src="./icons8-graph-windows-11-color-16.png" alt="" />Business</Link > </li>
          <li className="nav-item"> <Link className="nav-link" onClick={this.under} to="/science"><img src="./icons8-physics-book-16.png" alt="" />Science</Link > </li>
          <li className="nav-item"> <Link className="nav-link" onClick={this.under} to="/sports"> <img src="./icons8-trophy-16.png" alt="" />Sports</Link > </li>
          <li className="nav-item"> <Link className="nav-link" onClick={this.under} to="/technology"><img src="./icons8-photocopier-16.png" alt="" />Tech</Link > </li>
          <li className="nav-item"> <Link className="nav-link" onClick={this.under} to="/health"><img src="./icons8-health-16.png" alt="" />Health</Link > </li>

          </ul>
          <div className='d-flex' id='theme changer'>
          <div className='mx-2'>
          <button type="button" className="btn btn-primary"  onClick={togglep} style={{height:"30px",widows:"30px"}}></button>
          </div>
          <div className='mx-2'>
          <button type="button" className="btn btn-warning"  onClick={togglew} style={{height:"30px",widows:"30px"}}></button>
          </div>
          <div className='mx-2'>
          <button type="button" className="btn btn-danger" onClick={toggled}  style={{height:"30px",widows:"30px"}}></button>
          </div>
          <div className='mx-2'>
          <button type="button" className="btn btn-light" onClick={toggleoo}  style={{height:"30px",widows:"30px"}}></button>
          </div>
          </div>
      </div>
     
  </nav>
  </div>
    
    )
  }
}

export default Navbar

