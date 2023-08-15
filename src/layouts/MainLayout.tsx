import React, { useEffect, useState } from 'react';
import { Navigate, Outlet, useNavigate } from 'react-router-dom';
import Sidebar from '../components/Sidebar';
import Header from '../components/Header';
import ThemeButton from '../components/ThemeButton';
import { useAuthContext } from '../contexts/AuthContext';

export default function MainLayout() {
    const navigate=useNavigate()
    const { isAuthenticated } = useAuthContext();
        const [sidebarVisible, setSidebarVisible] = useState(true);

  // useEffect(() => {
  //   first
  
  //   return () => {
  //     second
  //   }
  // }, [third])
  
    useEffect(() => { 
      
    //   if (!isAuthenticated) { return navigate('/signin') }
  
  },[isAuthenticated])
    const toggleSidebar = () => {
      setSidebarVisible(!sidebarVisible);
    };

    return (
        <div className="container-fluid back">
            <div className="d-flex flex-row">
                <div className={`sidebar ${sidebarVisible ? "" : "visible"}`}>
                    <Sidebar />
                </div>
                <div style={{ width: '100%' }}>
                    <Header toggleSidebar={toggleSidebar}/>
                    <Outlet />
                    <ThemeButton/>
                </div>
            </div>
        </div>
    );
}
