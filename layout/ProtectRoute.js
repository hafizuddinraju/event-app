import { useRouter } from 'next/router';
import React, { useEffect } from 'react';
import { useContext } from 'react';
import { AuthContext } from '../context/AuthProvider';

const ProtectRoute = ({children}) => {
    const {user} = useContext(AuthContext);
    const router = useRouter();

    useEffect(()=>{
        if(!user){
            router.push('/login')
        }

    },[router, user])
    return <> {user ? children : null}</>
};

export default ProtectRoute;