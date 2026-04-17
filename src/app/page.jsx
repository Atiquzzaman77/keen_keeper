'use client'; 

import React, { Suspense, lazy } from 'react';
import Header from "../components/Header";


const Friends = lazy(() => import("../components/Friends"));

const home = () => {
    return (
        <section className="py-12 px-4 min-h-screen">
            <Header />
            
            <Suspense fallback={
               
                <div className="flex items-center justify-center min-h-100 w-full">
                    <span className="loading loading-infinity loading-lg text-[#244D3F]"></span>
                </div>
            }>
                <Friends />
            </Suspense>
        </section>
    );
};

export default home;