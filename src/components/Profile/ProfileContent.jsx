import React from 'react'
import { useState } from 'react';
import { Edit2 } from 'lucide-react';
import { Avatar, AvatarImage, AvatarFallback } from '../ui/avatar';
import { Button } from '../ui/button';
import { Card } from '../ui/card';
import { useSelector } from 'react-redux';
import store from '@/redux/store';


const ProfileContent = () => {
    const [userInfo] = useState({
        firstName: 'Umaima',
        lastName: 'Faisal',
        email: 'Umaimafl030@gmail.com',
        phone: '0316-4567890',
        role: 'Donor',
        country: 'Pakistan',
        city: 'Lahore,Punjab',
    });
    const { user } = useSelector(store => store.user)
    const char = (s)=>{
        s.charAt(0)
    }


    const handleEditProfile = () => {
        console.log('Edit profile clicked');
    };

    const handleEditAddress = () => {
        console.log('Edit address clicked');
    };
    return (
        <div className="p-6 md:p-8 max-w-4xl">


            {/* My Profile Header */}
            <div className="mb-8">
                <h2 className="text-3xl font-bold text-foreground mb-6">My Profile</h2>

                {/* Profile Card */}
                <Card className="p-6 mb-6 border border-border">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center gap-6">
                            <Avatar className="h-20 w-20">
                                <AvatarImage src="/placeholder.svg" alt="Profile" />
                                <AvatarFallback className="bg-blue-100 text-blue-700 text-xl font-semibold">{user.firstName.charAt(0)}{user.lastName.charAt(0)}</AvatarFallback>
                            </Avatar>
                            <div>
                                <h3 className="text-xl font-bold text-foreground">{user.firstName} {user.lastName}</h3>
                                <p className="text-sm text-muted-foreground mt-1">{user.role}</p>
                                <p className="text-xs text-muted-foreground mt-1">{userInfo.country} • {userInfo.city}</p>
                            </div>
                        </div>
                        <Button
                            variant="outline"
                            size="sm"
                            onClick={handleEditProfile}
                            className="gap-2 bg-transparent"
                        >
                            <Edit2 className="h-4 w-4" />
                            Edit
                        </Button>
                    </div>
                </Card>
            </div>

            {/* Personal Information */}
            <Card className="p-6 mb-6 border border-border">
                <div className="flex items-center justify-between mb-6">
                    <h3 className="text-xl font-bold text-foreground">Personal information</h3>
                    <Button
                        variant="outline"
                        size="sm"
                        onClick={handleEditProfile}
                        className="gap-2 bg-transparent"
                    >
                        <Edit2 className="h-4 w-4" />
                        Edit
                    </Button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                        <label className="text-sm text-muted-foreground block mb-1">First Name</label>
                        <p className="text-base font-medium text-foreground">{user.firstName}</p>
                    </div>
                    <div>
                        <label className="text-sm text-muted-foreground block mb-1">Last Name</label>
                        <p className="text-base font-medium text-foreground">{user.lastName}</p>
                    </div>
                    <div>
                        <label className="text-sm text-muted-foreground block mb-1">Email Address</label>
                        <p className="text-base font-medium text-foreground">{user.email}</p>
                    </div>
                    <div>
                        <label className="text-sm text-muted-foreground block mb-1">Phone</label>
                        <p className="text-base font-medium text-foreground">{userInfo.phone}</p>
                    </div>
                    <div className="md:col-span-2">
                        <label className="text-sm text-muted-foreground block mb-1">Role</label>
                        <p className="text-base font-medium text-foreground">{user.role}</p>
                    </div>
                </div>
            </Card>

            {/* Address Information */}
            <Card className="p-6 border border-border">
                <div className="flex items-center justify-between mb-6">
                    <h3 className="text-xl font-bold text-foreground">Address</h3>
                    <Button
                        variant="outline"
                        size="sm"
                        onClick={handleEditAddress}
                        className="gap-2 bg-transparent"
                    >
                        <Edit2 className="h-4 w-4" />
                        Edit
                    </Button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                        <label className="text-sm text-muted-foreground block mb-1">Country</label>
                        <p className="text-base font-medium text-foreground">{userInfo.country}</p>
                    </div>
                    <div>
                        <label className="text-sm text-muted-foreground block mb-1">City/State</label>
                        <p className="text-base font-medium text-foreground">{userInfo.city}</p>
                    </div>
                </div>
            </Card>
        </div>
    )
}

export default ProfileContent
