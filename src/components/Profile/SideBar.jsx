import React from 'react'
import { LogOut, User, Package } from 'lucide-react';
import { Avatar, AvatarImage, AvatarFallback } from '../ui/avatar';
import axios from 'axios';
import { toast } from 'sonner';
import { useDispatch, useSelector } from 'react-redux';
import { setUser } from '@/redux/userSlice';
import { useNavigate } from 'react-router-dom';
import store from '@/redux/store';

const SideBar = ({ activeTab, setActiveTab }) => {
    // const handleLogout = () => {
    //     console.log('Logging out...');
    // };

    const menuItems = [
        { id: 'profile', label: 'My Profile', icon: User },
        { id: 'orders', label: 'Orders', icon: Package },
    ];


    const accessToken = localStorage.getItem('accessToken')
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const { user } = useSelector(store => store.user)
    const fullName = `${user.firstName} ${user.lastName}`

    const handleLogOut = async (e) => {
        e.preventDefault()

        try {
            const res = await axios.post('https://shopsphere-backend-w8hw.onrender.com/api/logout', {}, {
                headers: {
                    Authorization: `Bearer ${accessToken}`
                }
            })
            if (res.data.success) {
                dispatch(setUser(null))
                toast.success(res.data.message)
                setTimeout(() => {
                    navigate('/')
                }, 1000)
            }
        } catch (error) {
            console.log("log out error");
            console.log(error);
            console.log(error.response?.data);


        } finally {
            dispatch(setUser(null))
            navigate('/')
        }

    }




    return (
        <aside className="w-full ml-40 md:w-64 bg-white border-r border-border shadow-sm md:min-h-screen">
            <div className="p-6 border-b border-border">
                <div className="flex items-center gap-4 mb-2">
                    <Avatar className="h-12 w-12">
                        <AvatarImage src="/placeholder.svg" alt="User" />
                        <AvatarFallback className="bg-blue-100 text-blue-700 font-semibold">{user.firstName.charAt(0)}{user.lastName.charAt(0)}</AvatarFallback>
                    </Avatar>
                    <div className="flex-1 min-w-0">
                        <h3 className="font-semibold text-foreground truncate capitalize">{fullName}</h3>
                        <p className="text-sm text-muted-foreground truncate">{user.role}</p>
                    </div>
                </div>
                <p className="text-xs text-muted-foreground">Mumbai, Punjab Maharashtra</p>
            </div>

            <nav className="p-4">
                <p className="text-xs font-semibold text-muted-foreground uppercase mb-4">Menu</p>
                <div className="space-y-2">
                    {menuItems.map((item) => {
                        const Icon = item.icon;
                        const isActive = activeTab === item.id;
                        return (
                            <button
                                key={item.id}
                                onClick={() => setActiveTab(item.id)}
                                className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${isActive
                                    ? 'bg-blue-50 text-blue-600 font-medium'
                                    : 'text-muted-foreground hover:bg-gray-50'
                                    }`}
                            >
                                <Icon className="h-5 w-5 flex-shrink-0" />
                                <span className="text-sm">{item.label}</span>
                            </button>
                        );
                    })}
                </div>
            </nav>

            <div className="p-4 border-t border-border mt-auto md:mt-0">
                <button
                    onClick={handleLogOut}
                    className="w-full flex items-center gap-3 px-4 py-3 text-muted-foreground hover:bg-gray-50 rounded-lg transition-colors text-sm"
                >
                    <LogOut className="h-5 w-5" />
                    <span>Logout</span>
                </button>
            </div>
        </aside>
    )
}

export default SideBar
