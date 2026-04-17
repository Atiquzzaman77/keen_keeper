"use client"; 
import { ChartNoAxesCombined, Clock, House, Menu } from 'lucide-react';
import Link from 'next/link'; 
import React, { useState } from 'react';
import { usePathname } from 'next/navigation'; 

const Navbar = () => {
    const pathname = usePathname(); 

    
    const getBtnClass = (path) => 
        `btn btn-sm md:btn-md flex items-center gap-2 border-none transition-all duration-300 rounded-xl px-5 ${
            pathname === path 
            ? 'bg-[#244D3F] text-white hover:bg-[#1a3a2f] shadow-md' 
            : 'bg-transparent text-gray-600 hover:bg-gray-100'
        }`;

    return (
        <div className="navbar bg-base-100 shadow-sm px-4 md:px-8 sticky top-0 z-50">
            <div className="navbar-start">
               
                <div className="dropdown lg:hidden">
                    <div tabIndex={0} role="button" className="btn btn-ghost p-0 mr-3">
                        <Menu size={24} />
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow-lg bg-base-100 rounded-box w-52 border border-gray-100">
                        <li><Link href="/">Home</Link></li>
                        <li><Link href="/timeline">Timeline</Link></li>
                        <li><Link href="/stats">Stats</Link></li>
                    </ul>
                </div>
                
                
                <Link href="/" className="text-xl cursor-pointer flex items-center">
                    <span className='text-[#1F2937] font-extrabold'>Keen</span>
                    <span className='text-[#244D3F] font-bold'>Keeper</span>
                </Link>
            </div>
            
            
            <div className="navbar-end hidden lg:flex gap-2">
                <Link href="/">
                    <button className={getBtnClass('/')}>
                        <House size={18} /> Home
                    </button>
                </Link>
                
                <Link href="/timeline">
                    <button className={getBtnClass('/timeline')}>
                        <Clock size={18} /> Timeline
                    </button>
                </Link>
                
                <Link href="/stats">
                    <button className={getBtnClass('/stats')}>
                        <ChartNoAxesCombined size={18} /> Stats
                    </button>
                </Link>
            </div>
        </div>
    );
};

export default Navbar;