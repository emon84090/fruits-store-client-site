import { onAuthStateChanged, signOut } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Alert from '../Alert';
import auth from './firebaseconfig';

const useFirebaseauth = () => {
    const navigate = useNavigate();
    const [user, setUser] = useState({})
    useEffect(() => {

        onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user)
            } else {
                setUser()
            }
        });
    }, [])

    const logOut = () => {

        signOut(auth).then(() => {
            Alert('logOut success', 'success');
            navigate('/')
        }).catch((error) => {
            Alert('something went wrong', 'error');
        });



    }

    return { user, logOut }

};

export default useFirebaseauth;