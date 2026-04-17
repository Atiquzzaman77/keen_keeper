
import React, { Suspense } from 'react';
import Friends from "../components/Friends";
import Header from "../components/Header";



const home = () => {
    return (
        <section className="py-12 px-4">
          <Header></Header>
           <Suspense fallback={<span className="loading loading-infinity loading-xl"></span>}>
            <Friends></Friends>
           </Suspense>
        </section>
    );
};

export default home;