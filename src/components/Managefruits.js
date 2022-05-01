import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Alert from './Alert';
import Showmanagefruites from './Showmanagefruites';

const Managefruits = () => {
    const [fruitstable, setFruitstable] = useState([]);

    useEffect(() => {
        const getData = async () => {
            const { data } = await axios.get('http://localhost:5000/fruits');
            setFruitstable(data)
        }
        getData();

    }, [])
    const deleteData = (id) => {

        if (window.confirm('are you sure,want to delete')) {
            try {
                const { data } = axios.delete(`http://localhost:5000/delete/${id}`);
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
            <section className='pt-32'>
                <div className="container mx-auto px-2">
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