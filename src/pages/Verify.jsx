import React from 'react'

const Verify = () => {
    return (
        <div className=' relative min-h-screen  bg-yellow-50   w-full flex justify-center items-center  '>
            <div className=' bg-white shadow-lg rounded-lg w-2/5 p-5  text-center '  >
                <div className='text-2xl text-blue-500 flex items-center justify-center font-bold mb-3 '>
                    <h1>📩Check Your Email</h1>
                </div>
                <p className='text-gray-500 font-medium '>
                    We've sent you an email to verify your account. Please check your inbox and
                    click the verification link
                </p>
            </div>
        </div>
    )
}

export default Verify
