import React from 'react';
import Swal from 'sweetalert2'

const Alert = (message, status) => {

    return Swal.fire(
        '',
        `${message}`,
        `${status}`
    )
};

export default Alert;