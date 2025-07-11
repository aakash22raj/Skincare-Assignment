"use client"
import { useUser } from '@clerk/nextjs';
import React from 'react'


function Provider({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {

    // const { user } = useUser();
    // useEffect(() => {
    //     user && createNewUser();
    // }, [user]);

    // const createNewUser = async () => {
    //     const result = await axios.post('/api/user');
    // }

    return (
        <div>
            {children}
        </div>
    )
}


export default Provider

