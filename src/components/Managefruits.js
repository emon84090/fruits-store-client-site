import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Alert from './Alert';
import Showmanagefruites from './Showmanagefruites';

const Managefruits = () => {
    const [fruitstable, setFruitstable] = useState([]);

    useEffect(() => {
        const getData = async () => {
            const { data } = await axios.get('https://infinite-falls-08538.herokuapp.com/allfruits');
            setFruitstable(data)
        }
        getData();

    }, [])
    const deleteData = (id) => {

        if (window.confirm('are you sure,want to delete')) {
            try {
                const { data } = axios.delete(`https://infinite-falls-08538.herokuapp.com/delete/${id}`);
                Alert('data delete success', 'success');

                const filterData = fruitstable.filter((e) => e._id !== id);
                setFruitstable(filterData)
            } catch (err) {
                Alert('data delete faild', 'error');
            }


        }


    }
    return (
        <>
            <section className='pt-32 bg-yellow-50 min-h-screen py-5'>
                <div className="container mx-auto px-2">
                    <div className="add-fruits">
                        <Link to="/addfruits">
                            <button type="button" class="capitalize  font-semibold py-2.5 px-5 mr-2 text-sm  text-gray-900 bg-white rounded-lg border  hover:text-yellow-500  0  inline-flex items-center">
                                add fruits
                                <i className='bx bx-plus ml-1'></i>
                            </button>
                        </Link>
                    </div>
                    <h2 className='text-center font-bold text-2xl pb-5 text-gray-700'>All Fruits</h2>
                    <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
                        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400 animate__animated animate__fadeInLeft">
                            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                                <tr>

                                    <th scope="col" className="px-6 py-3">
                                        Fruits name
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        Prize
                                    </th>

                                    <th scope="col" className="px-6 py-3">
                                        Quantity
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        Syppler name
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        Operation
                                    </th>

                                </tr>
                            </thead>
                            <tbody>
                                {fruitstable.map((val) => <Showmanagefruites deleteData={deleteData} data={val} key={val._id}></Showmanagefruites>)}


                            </tbody>
                        </table>
                    </div>
                </div>


            </section>

        </>
    );
};

export default Managefruits;