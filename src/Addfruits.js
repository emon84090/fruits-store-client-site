import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Alert from './components/Alert';
import useFirebaseauth from './components/user-authentication/useFirebaseauth';

const Addfruits = () => {
    const { user } = useFirebaseauth();

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
        const fruitsdata = {
            email: user.email,
            image: fruitsinfo.image,
            name: fruitsinfo.name,
            price: fruitsinfo.price,
            qty: fruitsinfo.qty,
            discription: fruitsinfo.discription,
            supply_name: fruitsinfo.supply_name,
            supply_image: fruitsinfo.supply_image
        }


        try {
            const { data } = await axios.post(`http://localhost:5000/addfoods`, fruitsdata);
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
            <section className='pt-32 bg-yellow-400 pb-5 min-h-screen'>
                <div className="container mx-auto">

                    <div className="fruits-add-all-content grid grid-cols-1 md:grid-cols-2 gap-5 px-2">
                        <div className="fruits-add-content animate__animated animate__fadeInLeft rounded-md  p-8 mx-auto bg-white shadow-xl w-full order-3 md:order-2">
                            <h2 className='text-center text-2xl font-semibold mb-4 capitalize'>Add fruits</h2>
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
                                <button type="submit" className="mt-3 focus:outline-none capitalize text-white bg-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-sm w-24 py-2.5 mr-2 mb-2 dark:focus:ring-yellow-900">Add fruits  {addspinner && <i className='bx bx-loader-alt text-sm animate-spin ml-1'></i>}</button>
                            </form>
                        </div>

                        <div className="fruirts-right order-2">
                            <img className=' object-cover' src="https://i.ibb.co/2Z4fKNt/Screenshot-13-removebg-preview.png" alt="" />

                        </div>
                    </div>


                </div>

            </section>
        </>
    );
};

export default Addfruits;