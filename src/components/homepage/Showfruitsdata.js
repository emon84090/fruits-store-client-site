import React from 'react';
import { Link } from 'react-router-dom';

const Showfruitsdata = ({ data }) => {
    const { name, price, image, qty, discription, supply_name, supply_image, _id } = data;
    return (
        <>
            <div className="fruits-item shadow-xl rounded-md p-5 ">
                <div className="fruits-image">
                    <img className='max-h-64' src={image} alt="" />
                </div>
                <div className="fruits-dis flex justify-between items-center">
                    <div className="fruits-prize ">
                        <span className="bg-yellow-100 shadow-sm text-yellow-900 text-md font-semibold mr-2 px-3 py-1  rounded dark:bg-yellow-200 dark:text-yellow-900">${price}</span>
                    </div>
                    <div className="flex items-center mt-4 ">
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
                </div>
                <div className="name  mt-1">
                    <h3 className='text-2xl font-semibold'>{name}</h3>
                    <h3 className='text-md text-gray-800 font-semibold my-1'>Quantity:{qty}</h3>
                    <p className='mt-1 text-gray-600 text-md'>{discription}</p>
                </div>
                <div className="manage-btn  mt-3">
                    <Link to={`/inventory/${_id}`}>
                        <button className="h-10 px-5 font-semibold text-indigo-100 transition-colors duration-150 bg-yellow-500 rounded-full focus:shadow-outline hover:bg-yellow-600">manage</button>
                    </Link>
                </div>

            </div>
        </>
    );
};

export default Showfruitsdata;