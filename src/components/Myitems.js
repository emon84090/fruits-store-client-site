import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Pagetitle from './Pagetitle';
import Showmyitems from './Showmyitems';
import useFirebaseauth from './user-authentication/useFirebaseauth';

const Myitems = () => {
    const { user, logOut } = useFirebaseauth();
    const [myfruitsdata, setmyFruitsdata] = useState([]);

    useEffect(() => {
        const getOrder = async () => {
            if (user.email) {
                const email = user.email;
                try {
                    const { data } = await axios.get(`https://infinite-falls-08538.herokuapp.com/fruits?email=${email}`, {
                        headers: {
                            authorization: `bearer ${localStorage.getItem('accesstoken')}`
                        }
                    })
                    setmyFruitsdata(data)
                } catch (err) {
                    if (err.response.status === 403 || err.response.status === 401) {
                        logOut()
                    }
                }

            }

        }
        getOrder();

    }, [user.email])
    return (
        <>
            <Pagetitle title="my added fruits"></Pagetitle>
            <section className='pt-32 bg-yellow-50 min-h-screen py-5'>
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
                        {!myfruitsdata.length && <p className='text-center text-md font-semibold py-3'>No Items Found</p>}
                    </div>
                </div>


            </section>
        </>
    );
};

export default Myitems;