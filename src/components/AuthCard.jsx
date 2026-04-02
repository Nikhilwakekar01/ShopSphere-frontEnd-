import { useState } from "react"
import { Eye, EyeOff, Loader2 } from "lucide-react"
import { useNavigate } from 'react-router-dom'
import { toast } from "sonner"
import axios from "axios"
import LogIn from "@/pages/LogIn"

const AuthCard = () => {
    const [isSignUp, setIsSignUp] = useState(false)
    const [showPassword, setShowPassword] = useState(false)
    const [showConfirmPassword, setShowConfirmPassword] = useState(false)
    const [loading, setLoading] = useState(false);
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        confirmPassword: "",
    })
    const navigate = useNavigate()

    const handleInputChange = (e) => {
        const { name, value } = e.target
        setFormData((prev) => ({
            ...prev,
            [name]: value
        }))
    }

    const handleToggle = () => {
        // setIsSignUp(!isSignUp)
        // <LogIn/>
        navigate('/login')
        setFormData({
            firstName: "",
            lastName: "",
            email: "",
            password: "",
            confirmPassword: "",
        })
        setShowPassword(false)
        setShowConfirmPassword(false)
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        console.log("Form submitted:", { isSignUp, formData })
        console.log("hello ");

        try {
            setLoading(true)
            const res = await axios.post('http://localhost:5000/api/register', formData, {
                headers: {
                    "content-Type": "application/json"
                }
            })
            if (res.data.success) {
                navigate('/verify')
                toast.success(res.data.message)
            }
            console.log("hello i am here");

        } catch (error) {
            console.log("error ala re");

            console.log(error);

            toast.error(error.response.data.message);

        } finally {
            setLoading(false)
        }
    }

    return (
        <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">

            <div className="w-full max-w-md ">
                <div className='flex items-center justify-center text-2xl font-sans font-bold m-3  text-[#003d29]'>
                    <img src='/cart.svg' className='w-11' />
                    ShopSphere
                </div>
                <div className="bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden transition-all duration-300">
                    {/* Header */}
                    <div className="px-6 py-8">
                        <h1 className="text-2xl font-bold text-gray-900 text-center">
                            Create your account
                        </h1>
                        <p className="text-gray-600 text-center mt-2 text-sm">
                            Join us and start shopping smarter
                        </p>
                    </div>

                    {/* Form */}
                    <form className="px-6 pb-6">
                        {/* Signup Fields */}

                        <>
                            <div className="grid grid-cols-2 gap-3 mb-4">
                                <div>
                                    <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-2">
                                        First Name
                                    </label>
                                    <input
                                        id="firstName"
                                        type="text"
                                        name="firstName"
                                        value={formData.firstName}
                                        onChange={handleInputChange}
                                        className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition"
                                        placeholder="John"
                                    />
                                </div>
                                <div>
                                    <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-2">
                                        Last Name
                                    </label>
                                    <input
                                        id="lastName"
                                        type="text"
                                        name="lastName"
                                        value={formData.lastName}
                                        onChange={handleInputChange}
                                        className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition"
                                        placeholder="Doe"
                                    />
                                </div>
                            </div>
                        </>


                        {/* Email Field */}
                        <div className="mb-4">
                            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                                Email Address
                            </label>
                            <input
                                id="email"
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleInputChange}
                                className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition"
                                placeholder="you@example.com"
                            />
                        </div>

                        {/* Password Field */}
                        <div className="mb-4">
                            <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">
                                Password
                            </label>
                            <div className="relative">
                                <input
                                    id="password"
                                    type={showPassword ? "text" : "password"}
                                    name="password"
                                    value={formData.password}
                                    onChange={handleInputChange}
                                    className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition pr-10"
                                    placeholder="••••••••"
                                />
                                <button
                                    type="button"
                                    onClick={() => setShowPassword(!showPassword)}
                                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700 transition"
                                    aria-label={showPassword ? "Hide password" : "Show password"}
                                >
                                    {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                                </button>
                            </div>
                        </div>

                        {/* Confirm Password Field (Signup Only) */}

                        <div className="mb-6">
                            <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700 mb-2">
                                Confirm Password
                            </label>
                            <div className="relative">
                                <input
                                    id="confirmPassword"
                                    type={showConfirmPassword ? "text" : "password"}
                                    name="confirmPassword"
                                    value={formData.confirmPassword}
                                    onChange={handleInputChange}
                                    className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition pr-10"
                                    placeholder="••••••••"
                                />
                                <button
                                    type="button"
                                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700 transition"
                                    aria-label={showConfirmPassword ? "Hide password" : "Show password"}
                                >
                                    {showConfirmPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                                </button>
                            </div>
                        </div>


                        {/* Submit Button */}
                        <button
                            type="submit"
                            className="w-full bg-blue-600 hover:bg-blue-700 active:bg-blue-800 text-white font-semibold py-2 px-4 rounded-lg transition duration-200 mb-4"
                            onClick={handleSubmit}
                        >


                            {/* {isSignUp && loading ? (
                                <span className="flex items-center justify-center">
                                    <Loader2 className="h-4 w-4 animate-spin mr-2" />
                                    Please wait
                                </span>
                            ) : (
                                isSignUp ? "Sign Up" : "Login")} */}
                            {loading ? <span className="flex items-center justify-center">
                                <Loader2 className="h-4 w-4 animate-spin mr-2" />
                                Please wait
                            </span> : "SignUp"}

                        </button>

                        {/* Divider */}
                        <div className="flex items-center gap-3 mb-4">
                            <div className="flex-1 border-t border-gray-200"></div>
                            <span className="text-sm text-gray-500 font-medium">OR</span>
                            <div className="flex-1 border-t border-gray-200"></div>
                        </div>

                        {/* Social Buttons */}
                        <div className="space-y-2 mb-6">
                            <button
                                type="button"
                                className="w-full flex items-center justify-center gap-2 border border-gray-200 hover:bg-gray-50 text-gray-700 font-medium py-2 px-4 rounded-lg transition"
                            >
                                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                                    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                                    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
                                    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
                                </svg>
                                Continue with Google
                            </button>
                            <button
                                type="button"
                                className="w-full flex items-center justify-center gap-2 border border-gray-200 hover:bg-gray-50 text-gray-700 font-medium py-2 px-4 rounded-lg transition"
                            >
                                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                                </svg>
                                Continue with Facebook
                            </button>
                        </div>

                        {/* Toggle Text */}
                        <p className="text-center text-sm text-gray-600">
                            {isSignUp ? "Already have an account? " : "Don't have an account? "}
                            <button
                                type="button"
                                onClick={handleToggle}
                                className="text-blue-600 hover:text-blue-700 font-semibold transition"
                            >
                                {/* {isSignUp ? "Login" : "Sign up"} */}
                                Login
                            </button>
                        </p>
                    </form>
                </div>
            </div>
        </div>
    )
}


export default AuthCard;