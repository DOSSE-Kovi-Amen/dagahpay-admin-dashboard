import React, { useState } from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import Sidebar from '../components/Sidebar';
import Header from '../components/Header';
import ThemeButton from '../components/ThemeButton';
import { useAuthContext } from '../contexts/AuthContext';

export default function MainLayout() {
    const { isAuthenticated } = useAuthContext();
    if (!isAuthenticated) { return <Navigate to="/signin" replace={true} /> }
    const [sidebarVisible, setSidebarVisible] = useState(false);

    const toggleSidebar = () => {
      setSidebarVisible(!sidebarVisible);
    };

    return (
        <div className="container-fluid back">
            <div className="d-flex flex-row">
                <div style={{ width: sidebarVisible ? '280px' : '0' }}>
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
