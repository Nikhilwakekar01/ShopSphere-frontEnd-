import axios from 'axios';
import { LogIn } from 'lucide-react';
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

const VerifyMail = () => {
    const { token } = useParams();
    const [status, setStatus] = useState("Verifying...");
    const navigate = useNavigate()

    const verifyEmail = async () => {
        try {
            const res = await axios.post(`http://localhost:5000/api/verify`, {}, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })
            if (res.data.success) {
                setStatus('✅Email Verified Successfully🎉')
                
                setTimeout(() => {
                    navigate('/login')
                }, 2000);
            }
        } catch (error) {
            console.log(error);
            setStatus("Verification failed. Please try again")
        }
    }
    useEffect(() => {
        verifyEmail()
    }, [token])

    return (
        <div className='relative min-h-screen  bg-yellow-50   w-full flex justify-center items-center'>
            <div className='text-2xl bg-white flex items-center justify-center font-bold p-7 rounded-xl overflow-hidden shadow-xl'>
                <h1 className='text-blue-500'>{status}</h1>
            </div>
        </div>
    )
}

export default VerifyMail
