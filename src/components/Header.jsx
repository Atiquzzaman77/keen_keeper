import { Plus } from 'lucide-react';
import React from 'react';

const Header = () => {
    return (
        <div className='text-center py-12 md:py-20 px-4'> 
            
            <h1 className='text-3xl md:text-5xl font-bold mb-4'>
                Friends to keep close in your life
            </h1>
            
            <p className='text-gray-500 text-sm md:text-base max-w-2xl mx-auto mb-8'>
                Your personal shelf of meaningful connections. Browse, tend, and nurture the <br className="hidden md:block" />
                relationships that matter most.
            </p>

            <div className='flex justify-center'>
                <button className='btn bg-[#244D3F] hover:bg-[#1a3a2f] text-white border-none flex items-center gap-2 px-6'>
                    <Plus size={20} />
                    Add a Friend
                </button>
            </div>

            
            <div className='flex flex-wrap lg:flex-nowrap max-w-7xl mx-auto justify-center lg:justify-between items-center mt-10 gap-6'>
                
                <div className='bg-white space-y-3 p-8 w-full sm:w-[256px] rounded-xl shadow'>
                    <h1 className='text-[#244D3F] font-semibold text-4xl'>10</h1>
                    <p className='text-[16px] text-gray-500'>Total Friends</p>
                </div>

                
                <div className='bg-white space-y-3 p-8 w-full sm:w-[256px] rounded-xl shadow'>
                    <h1 className='text-[#244D3F] font-semibold text-4xl'>3</h1>
                    <p className='text-[16px] text-gray-500'>On Track</p>
                </div>

                
                <div className='bg-white space-y-3 p-8 w-full sm:w-[256px] rounded-xl shadow'>
                    <h1 className='text-[#244D3F] font-semibold text-4xl'>6</h1>
                    <p className='text-[16px] text-gray-500'>Need Attention</p>
                </div>

                
                <div className='bg-white space-y-3 p-8 w-full sm:w-[256px] rounded-xl shadow'>
                    <h1 className='text-[#244D3F] font-semibold text-4xl'>12</h1>
                    <p className='text-[16px] text-gray-500'>Interactions This Month</p>
                </div>
            </div>

            <div className="divider max-w-7xl mx-auto mt-10"></div>
        </div>
    );
};

export default Header;