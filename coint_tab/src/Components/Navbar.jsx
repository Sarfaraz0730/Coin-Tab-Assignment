import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
      <Link to="/">Home</Link>
     <Link to="/about" style={ {margin:"10px 40px" }} >About</Link>
     <Link to="/service" style={ {margin:"10px 20px" }} >Service</Link>
  
   
     {/* <Link to="/userdetails" style={ {margin:"0px 10px" }} >UserDetails</Link> */}
     
    </div>
  )
}

export default Navbar
