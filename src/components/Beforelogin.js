import React from 'react'
import {Link} from "react-router-dom";

const Beforelogin = () => {
  return (
    <>
       <Link className="btn btn-primary mx-2" to="/login" role="button">Login</Link>
          <Link className="btn btn-primary mx-2" to="/signup" role="button">Signup</Link> 
    </>
  )
}

export default Beforelogin