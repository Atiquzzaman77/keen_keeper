'use client'
import Link from 'next/link';
import Image from 'next/image';
import React from 'react';
import { Home, ArrowLeft } from 'lucide-react'; // 'npm install lucide-react' করা থাকতে হবে

const NotFoundPage = () => {
    return (
        <div className="min-h-screen bg-base-200 flex flex-col items-center justify-center text-center px-6 py-10">
            
            {/* 404 Visual Section */}
            <div className="relative mb-12">
                <h1 className="text-9xl md:text-[160px] font-extrabold text-[#244D3F] opacity-10 tracking-tighter">
                    404
                </h1>
                
                {/* কেও একজন হারিয়ে গেছে এমন একটি প্রতীকী ইমেজ */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                   {/* এখানে আপনি একটি SVG বা Image বসাতে পারেন, আমি placeholder দিচ্ছি */}
                   <div className="w-32 h-32 md:w-40 md:h-40 bg-[#244D3F]/5 rounded-full flex items-center justify-center border-4 border-[#244D3F]/10 shadow-inner">
                       <span className="text-7xl">🤔</span> 
                   </div>
                </div>
            </div>

            {/* Error Message Section */}
            <div className="max-w-xl mx-auto mb-12">
                <h2 className="text-4xl md:text-5xl font-bold text-[#1F2937] leading-tight">
                    Oops! You've strayed too far.
                </h2>
                <p className="text-lg text-gray-500 mt-6 leading-relaxed">
                    The page you are looking for doesn't exist on your personal shelf of meaningful connections. It might have been moved, deleted, or perhaps you just typed the wrong address.
                </p>
            </div>

            {/* Action Buttons Section */}
            <div className="flex flex-col sm:flex-row gap-5">
                
                {/* হোম পেজে ফিরে যাওয়ার বাটন */}
                <Link href="/" className="btn bg-[#244D3F] hover:bg-[#1a3a2f] text-white border-none flex items-center gap-2.5 px-8 py-3 rounded-full text-base font-semibold shadow-lg hover:shadow-xl transition-all duration-300">
                    <Home size={20} />
                    Return to Home
                </Link>
                
                {/* আগের পেজে ফিরে যাওয়ার বাটন */}
                <button 
                    onClick={() => window.history.back()} 
                    className="btn bg-white hover:bg-gray-100 text-gray-700 border border-gray-200 flex items-center gap-2.5 px-8 py-3 rounded-full text-base font-semibold shadow hover:shadow-md transition-all duration-300"
                >
                    <ArrowLeft size={20} />
                    Go Back
                </button>
            </div>

            {/* KeenKeeper Logo (হালকা করে নিচে) */}
            <div className="absolute bottom-10 opacity-30">
                <h3 className="text-2xl text-gray-400">
                    <span className="font-extrabold text-[#244D3F]">Keen</span>Keeper
                </h3>
            </div>
        </div>
    );
};

export default NotFoundPage;