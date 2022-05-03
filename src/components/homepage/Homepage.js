import React from 'react';
import Banner from './Banner';
import Contact from './Contact';
import Fruitshome from './Fruitshome';
import Story from './Story';

const Homepage = () => {
    return (
        <>
            <Banner></Banner>
            <Fruitshome></Fruitshome>
            <Story></Story>
            <Contact></Contact>
        </>
    );
};

export default Homepage;