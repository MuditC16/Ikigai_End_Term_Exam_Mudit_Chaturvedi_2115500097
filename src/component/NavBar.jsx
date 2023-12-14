import React from 'react'
import { NavLink } from 'react-router-dom'

export default function NavBar() {
    return (
        <div className='flex bg-blue-400 h-18 gap-6 p-4' >

            <div className='border-r-2 border-black sm:pr-2'><NavLink exact to={'/'} className="font-semibold text-white text-lg md:text-2xl hover:text-red-500">Todo List</NavLink></div>
            <div className='border-r-2 border-black sm:pr-2'><NavLink exact to={'/cal'} className="font-semibold text-white text-lg md:text-2xl hover:text-red-500">Calculator</NavLink></div>
            <div className='border-r-2 border-black sm:pr-2'><NavLink exact to={'/social'} className="font-semibold text-white text-lg md:text-2xl hover:text-red-500">Socail Media</NavLink></div>
            <div><NavLink exact to={'/location'} className="font-semibold text-white text-lg md:text-2xl hover:text-red-500">Location</NavLink></div>
            
        </div>
    )
}
