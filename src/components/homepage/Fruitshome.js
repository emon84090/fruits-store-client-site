import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Showfruitsdata from './Showfruitsdata';

const Fruitshome = () => {
    const [fruitsdata, setFruitsdata] = useState([]);

    useEffect(() => {
        const getData = async () => {
            const { data } = await axios.get('http://localhost:5000/allfruits');
            setFruitsdata(data)
        }
        getData();

    }, [])



    return (
        <>
            <section id='fruits' className='py-10 mt-10 '>
                <div className="container mx-auto px-2">
                    <h1 className='text-2xl font-bold text-center mb-5  md:text-3xl mt-3'>Fruirts</h1>
                    <div className="fruits-all-content grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                        {fruitsdata.slice(0, 6).map((val) => <Showfruitsdata data={val} key={val._id} ></Showfruitsdata>)}

                    </div>

                </div>

                <div className="manage-btn text-center mt-5">
                    <Link to="/managefruits">
                        <button type="button" className="text-white bg-yellow-500 hover:bg-yellow-600 focus:ring-4 focus:outline-none focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center">
                            Manage items
                            <svg className="w-5 h-5 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                        </button>
                    </Link>

                </div>
            </section>
        </>
    );
};

export default Fruitshome;