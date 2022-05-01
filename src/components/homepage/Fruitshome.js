import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Showfruitsdata from './Showfruitsdata';

const Fruitshome = () => {
    const [fruitsdata, setFruitsdata] = useState([]);

    useEffect(() => {
        const getData = async () => {
            const { data } = await axios.get('http://localhost:5000/fruits');
            setFruitsdata(data)
        }
        getData();

    }, [])

    return (
        <>
            <section id='fruits' className='py-10 mt-10 '>
                <div className="container mx-auto px-2">
                    <div className="fruits-all-content grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                        {fruitsdata.map((val) => <Showfruitsdata data={val} key={val._id} ></Showfruitsdata>)}

                    </div>

                </div>

            </section>
        </>
    );
};

export default Fruitshome;