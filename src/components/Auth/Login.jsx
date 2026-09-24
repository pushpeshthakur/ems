import React, { useState } from 'react';


const Login = ({handleLogin}) => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

const submitHandler = (e) => {
    e.preventDefault();
    handleLogin(email, password)

    //console.log("Email:", email);
    //console.log("Password:", password);
    // Handle form submission logic here

    setEmail('');
    setPassword('');
    
}

    return (
        <div className='flex h-screen w-screen items-center justify-center bg-gray-300'>
            <div className='border-2 rounded-3xl border-emerald-700'>
                <form 
                    onSubmit={(e) => {
                        submitHandler(e)
                    }}
                    className='flex flex-col  rounded-2xl p-10' >
                    <h1 className='text-center text-2xl'>EMS</h1>
                    <label className='p-3'>Email</label>
                    <input 
                    value={email}
                    onChange={(e) => {
                        setEmail(e.target.value);
                    }}
                    required className="text-xl outline-none bg-white border-2 border-emerald-600 rounded-2xl py-3 px-3 text-gray-600 placeholder:text-sm" 
                    type="email" 
                    placeholder=" Enter your email" 
                    />
                    <label className="p-3">Password</label>
                    <input 
                    value={password}
                    onChange={(e) => {
                        setPassword(e.target.value);
                    }}
                    required className="text-xl outline-none border-2 bg-white border-emerald-600 rounded-2xl py-3 px-3 text-gray-600 placeholder:text-sm" 
                    type="password" 
                    placeholder="Enter your password" 
                    />
                    <button className="mt-6 text-xl bg-emerald-600 rounded-full py-3 px-27 text-black-400" type="submit">Log in</button>
                </form>
            </div>
        </div>
    )
}

export default Login; 