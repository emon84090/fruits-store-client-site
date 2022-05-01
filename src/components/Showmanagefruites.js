import React from 'react';

const Showmanagefruites = ({ data, deleteData }) => {
    const { name, price, qty, supply_name, _id } = data;
    return (
        <>
            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">

                <td class="px-6 py-4">
                    {name}
                </td>
                <td class="px-6 py-4">
                    ${price}
                </td>

                <td class="px-6 py-4">
                    {qty}
                </td>
                <td class="px-6 py-4">
                    {supply_name}
                </td>
                <td class="px-6 py-4 ">

                    <button onClick={() => deleteData(_id)} className='font-medium capitalize text-red-500 dark:text-red-600 hover:underline'>delete</button>
                </td>
            </tr>
        </>
    );
};

export default Showmanagefruites;