import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import Alert from './Alert';

const Singleinventory = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [singleData, setsingleData] = useState([]);
    const [inputqty, setinputQty] = useState(1);
    const [upspinner, setUpspinner] = useState(false);
    const [despinner, setDespinner] = useState(false);

    const [update, setUpdate] = useState(false);
    const [deletes, setDelete] = useState(false);

    const { name, price, image, qty, discription, supply_name, supply_image, _id } = singleData;

    const addQuantity = async (e) => {
        setUpspinner(true);
        e.preventDefault();
        setUpdate(!update);

        if (inputqty < 1) {

            Alert('enter valid input qty', 'error');
            setUpspinner(false);
            return;
        }

        const fruitsqty = {
            id: _id,
            exist_qty: qty,
            qty: inputqty,

        }


        try {
            const { data } = await axios.put(`http://localhost:5000/updateqty`, fruitsqty);
            setUpspinner(false);
            Alert('Quantity added successfully', 'success');

        }
        catch (err) {
            setUpspinner(false)
            Alert('Quantity added faild', 'error');

        }

    }

    const decreaseqty = async () => {
        setDespinner(true);
        setDelete(!deletes)

        if (qty <= 1) {
            Alert('quantity invaild', 'error');
            setDespinner(false);
            return;
        }
        const fruitsqty = {
            id: _id,
            exist_qty: qty,

        }
        try {
            const { data } = await axios.put(`http://localhost:5000/decreaseqty`, fruitsqty);
            setDespinner(false);
            Alert('delivered success', 'success');
        } catch (err) {
            setDespinner(false);
            Alert('delivered faild', 'error');
        }

    }


    // get single food data
    useEffect(() => {
        const getSingledata = async () => {
            const { data } = await axios.get(`http://localhost:5000/fruit/${id}`);
            setsingleData(data);
        }
        getSingledata();

    }, [id, update, deletes])

    // get single food data


    return (
        <>

            <section className='pt-28 '>
                <div className="container mx-auto px-2">
                    <div className="singledata-all-content grid grid-cols-12 border border-gray-200">
                        <div className="single-fruits-image flex justify-center col-span-12 md:col-span-6 lg:col-span-7">
                            <img className='max-h-80' src={image} alt="" />
                        </div>
                        <div className="single-fruits-discription border-l border-gray-200 p-6 col-span-12 md:col-span-6 lg:col-span-5">
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
                                <form onSubmit={addQuantity}>
                                    <input onChange={(e) => setinputQty(e.target.value)} className='bg-slate-200 font-semibold text-gray-800 mt-1 p-3 h-10 rounded-md outline-none' value={inputqty} type="number" name="" id="" />

                                    <button disabled={upspinner} type="submit" className=" text-white block mt-2 disabled:cursor-not-allowed bg-yellow-500   font-medium rounded-md text-sm w-20 py-2.5 text-center mr-2  items-center">
                                        Add
                                        {upspinner && <i className='bx bx-loader-alt text-sm animate-spin ml-1'></i>}
                                    </button>
                                </form>
                            </div>
                            <div className="delivery-btn flex justify-between mt-8">
                                <Link to="/managefruits"><button className='block bg-yellow-500 rounded-md mt-1 disabled:cursor-not-allowed  text-white font-semibold w-32 py-3 '>Manage Items
                                </button></Link>

                                <button disabled={despinner} onClick={decreaseqty} className='block bg-red-500 rounded-md mt-1 disabled:cursor-not-allowed  text-white font-semibold w-32 py-3 '>Deliveryed
                                    {despinner && <i className='bx bx-loader-alt text-sm animate-spin ml-1'></i>}
                                </button>
                            </div>
                        </div>

                    </div>

                </div>
            </section>

        </>
    );
};

export default Singleinventory;