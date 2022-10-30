import React from 'react'
import { NavLink } from 'react-router-dom'

const Layout = () => {
  return (
    <div className='d-flex m-auto border rounded-pill p-1 px-2 mt-4 mb-4'>
        <NavLink className="border border-0 rounded-pill p-1 text-light text-decoration-none" style={({isActive}) => {return {backgroundColor: !isActive ? 'green' : ''}}} to='/'>FAN SIGNUP</NavLink>
        <NavLink className="border border-0 rounded-pill p-1 text-light text-decoration-none" style={({isActive}) => {return {backgroundColor: isActive ? 'green' : ''}}} to='talenat_signup'>TALENAT SIGNUP</NavLink>
    </div>
  )
}

export default Layout