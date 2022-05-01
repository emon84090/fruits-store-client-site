import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Alert from './components/Alert';

const Addfruits = () => {
    const navigate = useNavigate();
    const [addspinner, setAddspinner] = useState(false);
    const [fruitsinfo, setFruitsinfo] = useState({
        image: '',
        name: '',
        price: '',
        qty: '1',
        discription: '',
        supply_name: '',
        supply_image: ''

    });

    const handleinput = (e) => {

        setFruitsinfo({ ...fruitsinfo, [e.target.name]: e.target.value })
    }

    const submitForm = async (e) => {
        setAddspinner(true);
        e.preventDefault();

        try {
            const { data } = await axios.post(`http://localhost:5000/addfoods`, fruitsinfo);
            console.log(data);
            setAddspinner(false);
            Alert('food added success', 'success');
            navigate('/managefruits');

        } catch (err) {
            setAddspinner(false);
            Alert('food added faild', 'error');
        }

    }

    return (
        <>
            <section className='pt-32 bg-yellow-50 pb-5 min-h-screen'>
                <div className="container mx-auto">
                    <h2 className='text-center text-2xl font-semibold mb-4 capitalize'>Add fruits</h2>
                    <div className="fruits-add-form rounded-md max-w-xl p-8 mx-auto bg-white shadow-xl w-full">
                        <form onSubmit={submitForm}>
                            <div className="input-field mb-3">
                                <input onChange={handleinput} placeholder='enter fruits photo url' className='p-4 w-full h-12 outline-none rounded-sm placeholder:capitalize placeholder:text-sm bg-slate-300 bg-opacity-30 font-semibold text-gray-600' type="text" name="image" required />
                            </div>

                            <div className="input-field mb-3">
                                <input onChange={handleinput} placeholder='enter fruits name' className='p-4 w-full h-12 outline-none rounded-sm placeholder:capitalize placeholder:text-sm bg-slate-300 bg-opacity-30 font-semibold text-gray-600' type="text" name="name" required />
                            </div>
                            <div className="input-field mb-3">
                                <input onChange={handleinput} placeholder='fruits prize $' className='p-4 w-full h-12 outline-none rounded-sm placeholder:capitalize placeholder:text-sm bg-slate-300 bg-opacity-30 font-semibold text-gray-600' type="text" name="price" required />
                            </div>
                            <div className="input-field mb-3">
                                <input value={fruitsinfo.qty} onChange={handleinput} placeholder='Quantity' className='p-4 w-full h-12 outline-none rounded-sm placeholder:capitalize placeholder:text-sm bg-slate-300 bg-opacity-30 font-semibold text-gray-600' type="number" name="qty" required />
                            </div>
                            <div className="input-field mb-3">
                                <input onChange={handleinput} placeholder='Enter Description' className='p-4 w-full h-12 outline-none rounded-sm placeholder:capitalize placeholder:text-sm bg-slate-300 bg-opacity-30 font-semibold text-gray-600' type="text" name="discription" required />
                            </div>
                            <div className="input-field mb-3">
                                <input onChange={handleinput} placeholder='supplyer name' className='p-4 w-full h-12 outline-none rounded-sm placeholder:capitalize placeholder:text-sm bg-slate-300 bg-opacity-30 font-semibold text-gray-600' type="text" name="supply_name" required />
                            </div>
                            <div className="input-field mb-3">
                                <input onChange={handleinput} placeholder='supplyer photo url' className='p-4 w-full h-12 outline-none rounded-sm placeholder:capitalize placeholder:text-sm bg-slate-300 bg-opacity-30 font-semibold text-gray-600' type="text" name="supply_image" required />
                            </div>
                            <button type="submit" class="mt-3 focus:outline-none capitalize text-white bg-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-sm w-24 py-2.5 mr-2 mb-2 dark:focus:ring-yellow-900">Add fruits  {addspinner && <i className='bx bx-loader-alt text-sm animate-spin ml-1'></i>}</button>
                        </form>
                    </div>

                </div>

            </section>
        </>
    );
};

export default Addfruits;