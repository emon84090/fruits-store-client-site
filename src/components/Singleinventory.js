import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Singleinventory = () => {
    const { id } = useParams();
    const [singleData, setsingleData] = useState([]);
    const [inputqty, setinputQty] = useState(1);


    const { name, price, image, qty, discription, supply_name, supply_image, _id } = singleData;


    const addQuantity = async () => {

        const fruitsqty = {
            id: _id,
            exist_qty: qty,
            qty: inputqty,

        }
        const { data } = await axios.put(`http://localhost:5000/updateqty`, fruitsqty);

    }


    // get single food data
    useEffect(() => {
        const getSingledata = async () => {
            const { data } = await axios.get(`http://localhost:5000/fruit/${id}`);
            setsingleData(data);
        }
        getSingledata();

    }, [id])

    // get single food data


    return (
        <>

            <section className='pt-28 '>
                <div className="container mx-auto">
                    <div className="singledata-all-content grid grid-cols-12 border border-gray-100">
                        <div className="single-fruits-image flex justify-center col-span-7">
                            <img className='max-h-80' src={image} alt="" />
                        </div>
                        <div className="single-fruits-discription border-l border-gray-100 p-10 col-span-5">
                            <div className="fruits-information flex justify-between">
                                <h3 className='text-3xl font-semibold  capitalize '>{name}</h3>
                                <h3 className='text-2xl font-semibold'>${price}</h3>
                            </div>
                            <div className="flex items-center mt-6 ">
                                <a href="#" className="block relative">
                                    <img alt="supplyerImage" src={supply_image} className="mx-auto object-cover rounded-full h-10 w-10 " />
                                </a>
                                <div className="flex flex-col justify-between ml-4 text-sm">
                                    <p className="text-gray-800 dark:text-white">
                                        supply by
                                    </p>
                                    <p className="text-gray-400 dark:text-gray-300">
                                        {supply_name}
                                    </p>
                                </div>
                            </div>

                            <p className='mt-4 text-gray-600'>{discription}</p>
                            <p className='mt-4 text-gray-800 text-xl font-semibold'>Quantity:{qty}</p>
                            <div className="fruites-manage-system mt-4">
                                <p className='text-sm'>Add Quantity</p>
                                <input onChange={(e) => setinputQty(e.target.value)} className='bg-slate-200 font-semibold text-gray-800 mt-1 p-3 h-10 rounded-md outline-none' defaultValue="1" type="number" name="" id="" />
                                <button onClick={addQuantity} className='block bg-yellow-500 rounded-md mt-1 text-white font-semibold px-5 py-2 '>Add</button>
                            </div>
                            <div className="delivery-btn flex justify-end">
                                <button className='block bg-red-500 rounded-md mt-1 text-white font-semibold px-5 py-3 '>Deliveryed</button>
                            </div>
                        </div>

                    </div>

                </div>
            </section>

        </>
    );
};

export default Singleinventory;