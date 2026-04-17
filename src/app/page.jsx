
import React from 'react';
import Friends from "../components/Friends";
import Header from "../components/Header";



const home = () => {
    return (
        <section className="py-12 px-4">
          <Header></Header>
           <Friends></Friends>
        </section>
    );
};

export default home;