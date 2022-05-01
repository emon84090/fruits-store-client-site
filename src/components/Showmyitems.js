import React from 'react';

const Showmyitems = ({ data }) => {
    const { name, price, qty, supply_name, supply_image } = data;
    return (
        <>
            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">

                <td className="px-6 py-4">
                    {name}
                </td>
                <td className="px-6 py-4">
                    ${price}
                </td>

                <td className="px-6 py-4">
                    {qty}
                </td>
                <td className="px-6 py-4">
                    {supply_name}
                </td>
                <td className="px-6 py-4 ">
                    <img alt="supplyerImage" src={supply_image} className="mx-auto object-cover rounded-full h-10 w-10 " />
                </td>
            </tr>
        </>
    );
};

export default Showmyitems;