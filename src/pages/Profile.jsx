import React from 'react'
import { useState } from 'react';


import OrderContent from '@/components/Profile/OrderContent';
import ProfileContent from '@/components/Profile/ProfileContent';
import SideBar from '@/components/Profile/SideBar';
import { useParams } from 'react-router-dom';


const Profile = () => {
  const [activeTab, setActiveTab] = useState('profile');
  const params = useParams()
  const userId =params.userId

  const renderContent = () => {
    switch (activeTab) {
      case 'orders':
        return <OrderContent/>;
      case 'profile':
      default:
        return <ProfileContent/>;
    }
  }; 
  return (
    <div className="flex min-h-screen bg-background  ">
      <SideBar activeTab={activeTab} setActiveTab={setActiveTab} />
      <main className="flex-1 md:ml-0">
        {renderContent()}
      </main>
    </div>
  )
}

export default Profile
