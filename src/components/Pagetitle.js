import React from 'react';
import { Helmet } from 'react-helmet-async';

const Pagetitle = ({ title }) => {
    return (
        <Helmet>
            <title>{title} -Fruits Store</title>

        </Helmet>

    );
};

export default Pagetitle;