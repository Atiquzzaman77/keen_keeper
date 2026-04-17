import Image from 'next/image';
import React from 'react';

const Footer = () => {
    return (
        <footer className='bg-[#244D3F] py-10 md:py-16'>
            <div className='max-w-7xl mx-auto px-6 md:px-12'>
                
                <div className='flex flex-col items-center text-center'>
                    
                    
                    <div className='mb-10 w-full'>
                        <h1 className='text-4xl sm:text-5xl md:text-6xl text-white tracking-tight'>
                            <span className='font-extrabold'>Keen</span>
                            <span className='font-bold'>Keeper</span>
                        </h1>
                        <p className='text-white/80 text-sm sm:text-base max-w-2xl mx-auto mt-4 leading-relaxed'>
                            Your personal shelf of meaningful connections. Browse, tend, and nurture the relationships that matter most.
                        </p>
                    </div>

                    
                    <div className='flex flex-col items-center gap-6 w-full'>
                        
                        <div className='flex flex-wrap justify-center gap-4 md:gap-6'>
                            
                            
                            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" 
                               className="bg-white/10 hover:bg-white rounded-full transition-all duration-300 flex items-center justify-center w-10 h-10 md:w-12 md:h-12 shadow-lg backdrop-blur-sm group">
                                <Image 
                                    src='/instagram.png' 
                                    alt='Instagram' 
                                    width={24} 
                                    height={24}
                                    className="w-5 h-5 md:w-6 md:h-6 group-hover:invert-0 transition-all"
                                />
                            </a>

                        
                            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" 
                               className="bg-white/10 hover:bg-white rounded-full transition-all duration-300 flex items-center justify-center w-10 h-10 md:w-12 md:h-12 shadow-lg backdrop-blur-sm group">
                                <Image 
                                    src='/facebook.png' 
                                    alt='Facebook' 
                                    width={24} 
                                    height={24}
                                    className="w-5 h-5 md:w-6 md:h-6 group-hover:invert-0 transition-all"
                                />
                            </a>

                            
                            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" 
                               className="bg-white/10 hover:bg-white rounded-full transition-all duration-300 flex items-center justify-center w-10 h-10 md:w-12 md:h-12 shadow-lg backdrop-blur-sm group">
                                <Image 
                                    src='/twitter.png' 
                                    alt='Twitter' 
                                    width={24} 
                                    height={24}
                                    className="w-5 h-5 md:w-6 md:h-6 group-hover:invert-0 transition-all"
                                />
                            </a>
                        </div>
                    </div>
                </div>

                
                <div className='border-t border-white/10 mt-16 pt-10'>
                    <div className='flex flex-col lg:flex-row justify-between items-center gap-6 text-center lg:text-left'>
                        <p className='text-white/40 text-sm'>
                            © {new Date().getFullYear()} <span className='text-white/60 font-semibold'>KeenKeeper</span>. All rights reserved.
                        </p>
                        
                        <div className='flex flex-wrap justify-center gap-6 md:gap-10 text-xs font-medium'>
                            <a href="#" className='text-white/50 hover:text-white transition-colors duration-200'>Privacy Policy</a>
                            <a href="#" className='text-white/50 hover:text-white transition-colors duration-200'>Terms of Service</a>
                            <a href="#" className='text-white/50 hover:text-white transition-colors duration-200'>Cookie Policy</a>
                        </div>
                    </div>
                </div>

            </div>
        </footer>
    );
};

export default Footer;