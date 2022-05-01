import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Showmyitems from './Showmyitems';
import useFirebaseauth from './user-authentication/useFirebaseauth';

const Myitems = () => {
    const { user } = useFirebaseauth();
    const [myfruitsdata, setmyFruitsdata] = useState([]);

    useEffect(() => {
        const getOrder = async () => {
            if (user.email) {
                const email = user.email;
                const { data } = await axios.get(`http://localhost:5000/fruits?email=${email}`)
                setmyFruitsdata(data)
            }

        }
        getOrder();

    }, [user.email])
    return (
        <>
            <section className='pt-32 bg-yellow-50 h-screen'>
                <div className="container mx-auto px-2">
                    <h2 className='text-center font-bold text-2xl pb-5 text-gray-700'>My added Fruits</h2>
                    <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
                        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
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
                                        Syppler image
                                    </th>

                                </tr>
                            </thead>
                            <tbody>
                                {myfruitsdata.map((val) => <Showmyitems data={val} key={val._id}></Showmyitems>)}
                            </tbody>
                        </table>
                    </div>
                </div>


            </section>
        </>
    );
};

export default Myitems;