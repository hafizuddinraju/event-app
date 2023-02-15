import { useRouter } from 'next/router';
import React, { useEffect } from 'react';
import { useContext } from 'react';
import Spinner from '../components/Spinner/Spinner';
import { AuthContext } from '../context/AuthProvider';

const ProtectRoute = ({children}) => {
    const {user, loading} = useContext(AuthContext);
    const router = useRouter();
    if(loading){
        return <Spinner></Spinner>
    }

    useEffect(()=>{
        if(!user){
            router.push('/login')
        }

    },[router, user])
    return <> {user ? children : null}</>
};

export default ProtectRoute;