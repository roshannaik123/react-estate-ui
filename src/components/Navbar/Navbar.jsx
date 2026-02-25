import React, { useState } from 'react'
import './Navbar.scss'
const Navbar = () => {
  const [open,setOpen]=useState(false);
  return (
    <nav>
      <div className="left">
<a className='logo'>
  <img src= './logo.png' alt="log"/>
  <span>Moder eccom</span>
</a>

  <a href='/'>Home</a>
  <a href='/'>About</a>
  <a href='/'>Contac</a>
  <a href='/'>Agents</a>


      </div>
      <div className="right">
<a href='/signin'>Sign in</a>
<a href='/signin' className='register'>Sign Up</a>
<div className='menuIcon' >
  <img src='/menu.png' onClick={()=>setOpen((prev)=>!prev)}
  alt=''/>

<div className={open ?'menu active' :"menu"}>
  <a href='/'>Home</a>
    <a href='/'>About</a>
  <a href='/'>Contact</a>
  <a href='/'>Agents</a>
  <a href='/'>Sing In</a>
  <a href='/'>Sing Up</a>

</div>
</div>
      </div>
    </nav>
  )
}

export default Navbar;
