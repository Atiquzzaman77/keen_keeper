"use client"; 
import { ChartNoAxesCombined, Clock, House, Menu } from 'lucide-react';
import React, { useState } from 'react';

const Navbar = () => {
    
    const [active, setActive] = useState('home');

    
    const getBtnClass = (name) => 
        `btn flex items-center gap-2 border-none transition-colors ${
            active === name 
            ? 'bg-[#244D3F] text-white hover:bg-[#244D3F]' 
            : 'bg-transparent text-gray-700 hover:bg-gray-200'
        }`;

    return (
        <div className="navbar bg-base-100 shadow-sm px-4 md:px-8">
            <div className="navbar-start">
                
                <div className="dropdown lg:hidden">
                    <div tabIndex={0} role="button" className="btn btn-ghost p-0 mr-2">
                        <Menu size={24} />
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        <li><a onClick={() => setActive('home')}>Home</a></li>
                        <li><a onClick={() => setActive('timeline')}>Timeline</a></li>
                        <li><a onClick={() => setActive('stats')}>Stats</a></li>
                    </ul>
                </div>
                
                <a className="text-xl cursor-pointer">
                    <span className='text-[#1F2937] font-extrabold'>Keen</span>
                    <span className='text-[#244D3F] font-bold'>Keeper</span>
                </a>
            </div>
            
            
            <div className="navbar-end hidden lg:flex gap-3">
                <button 
                    onClick={() => setActive('home')} 
                    className={getBtnClass('home')}
                >
                    <House size={18} /> home
                </button>
                
                <button 
                    onClick={() => setActive('timeline')} 
                    className={getBtnClass('timeline')}
                >
                    <Clock size={18} /> timeline
                </button>
                
                <button 
                    onClick={() => setActive('stats')} 
                    className={getBtnClass('stats')}
                >
                    <ChartNoAxesCombined size={18} /> stats
                </button>
            </div>
        </div>
    );
};

export default Navbar;