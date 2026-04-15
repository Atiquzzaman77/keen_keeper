import Image from 'next/image';
import React from 'react';

const Footer = () => {
    return (
        <footer className='bg-[#244D3F] py-10 md:py-16'>
            <div className='max-w-7xl mx-auto px-6 md:px-12'>
                
                
                <div className='flex flex-col items-center text-center'>
                    
                    
                    <div className='mb-10 w-full'>
                        <h1 className='text-4xl sm:text-5xl md:text-7xl text-white tracking-tight'>
                            <span className='font-extrabold'>Keen</span>
                            <span className='font-bold'>Keeper</span>
                        </h1>
                        <p className='text-white/80 text-sm sm:text-base md:text-lg max-w-2xl mx-auto mt-6 leading-relaxed'>
                            Your personal shelf of meaningful connections. Browse, tend, and nurture the relationships that matter most.
                        </p>
                    </div>

                    
                    <div className='flex flex-col items-center gap-6 w-full'>
                        <h3 className='text-white font-medium text-lg md:text-xl uppercase tracking-widest opacity-90'>
                            Social Links
                        </h3>
                        <div className='flex flex-wrap justify-center gap-4 md:gap-8'>
                            
                            
                            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" 
                               className="bg-white rounded-full hover:scale-110 transition-all duration-300 flex items-center justify-center w-14 h-14 md:w-20 md:h-20 shadow-xl border-4 border-white/10">
                                <Image 
                                    src='/instagram.png' 
                                    alt='Instagram' 
                                    width={32} 
                                    height={32}
                                    className="md:w-10.5 md:h-10.5"
                                />
                            </a>

                            
                            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" 
                               className="bg-white rounded-full hover:scale-110 transition-all duration-300 flex items-center justify-center w-14 h-14 md:w-20 md:h-20 shadow-xl border-4 border-white/10">
                                <Image 
                                    src='/facebook.png' 
                                    alt='Facebook' 
                                    width={32} 
                                    height={32}
                                    className="md:w-10.5 md:h-10.5"
                                />
                            </a>

                            
                            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" 
                               className="bg-white rounded-full hover:scale-110 transition-all duration-300 flex items-center justify-center w-14 h-14 md:w-20 md:h-20 shadow-xl border-4 border-white/10">
                                <Image 
                                    src='/twitter.png' 
                                    alt='Twitter' 
                                    width={32} 
                                    height={32}
                                    className="md:w-10.5 md:h-10.5"
                                />
                            </a>
                        </div>
                    </div>
                </div>

                
                <div className='border-t border-white/10 mt-16 pt-10'>
                    <div className='flex flex-col lg:flex-row justify-between items-center gap-6 text-center lg:text-left'>
                        <p className='text-white/40 text-sm md:text-base'>
                            © {new Date().getFullYear()} <span className='text-white/60 font-semibold'>KeenKeeper</span>. All rights reserved.
                        </p>
                        
                        <div className='flex flex-wrap justify-center gap-5 md:gap-10 text-xs md:text-sm font-medium'>
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