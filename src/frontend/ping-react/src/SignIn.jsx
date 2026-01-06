import React, { useState } from 'react';
import './SignIn.css';
import './index.css'

function SignIn() {
    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);

    const EyeIcon = ({ open }) => (
        open ? (
            // Eye open icon
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.477 0 8.268 2.943 9.542 7-1.274 4.057-5.065 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
            </svg>
        ) : (
            // Eye closed icon
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.875 18.825A10.05 10.05 0 0112 19c-4.477 0-8.268-2.943-9.542-7a9.959 9.959 0 012.405-3.448m3.035-2.544A9.953 9.953 0 0112 5c4.477 0 8.268 2.943 9.542 7a9.956 9.956 0 01-1.305 2.438M3 3l18 18" />
            </svg>
        )
    );

    return (
        <div>
            <h1 className="mx-auto md:mx-0 text-3xl font-bold text-cyan-900 mt-10 text-center absolute left-0 right-0 cursor-pointer hover:text-4xl duration-300"><a href="#">Ping</a></h1>

            <form className="w-auto mx-auto sm:w-auto absolute left-8 right-8 text-center my-32 sm:my-64 p-10 center justify-center align-middle">
                <h1 className="text-2xl sm:text-3xl font-bold mb-8">Welcome back</h1>
                <input
                    type="email"
                    className="duration-300 sm:w-[400px] w-[250px] mx-auto block bg-zinc-100 p-3 rounded-lg mt-3 outline-none font-semibold"
                    placeholder="Email"
                />

                {/* Password field with eye toggle */}
                <div className="relative sm:w-[400px] w-[250px] mx-auto mt-3">
                    <input
                        type={showPassword ? "text" : "password"}
                        className="w-full bg-zinc-100 p-3 rounded-lg outline-none font-semibold"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <button
                        type="button"
                        className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500"
                        onClick={() => setShowPassword(!showPassword)}
                    >
                        <EyeIcon open={showPassword} />
                    </button>
                </div>

                <button type="submit" className="text-black hover:text-white mt-8 bg-cyan-500 sm:w-[400px] w-[250px] p-3 rounded-full font-semibold hover:bg-cyan-600 duration-300">Sign In</button>
            </form>

            <p className="absolute bottom-0 left-0 right-0 text-center mb-4 sm:mb-8">
                Don't have an account? <a href="/signup" className="text-cyan-900 font-semibold hover:underline cursor-pointer">Sign Up</a>
            </p>
        </div>
    )
}

export default SignIn;
