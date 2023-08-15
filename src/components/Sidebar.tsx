import React, { useEffect, useState } from 'react';
import '../assets/css/main.css'
import { } from 'react-router-dom';
import { User } from '../constants/types';
import AuthService from '../services/AuthService';
import { useAuthContext } from '../contexts/AuthContext';

export default function Sidebar() {
    const [user, setUser] = useState<User | undefined>();
    const { isAuthenticated,setAuthenticated } = useAuthContext();

    async function getCurrentUser(){
        try {
            const authService = new AuthService()
            const data = await authService.currentUser();
            // Stocker le token d'authentification ou la session ici
            console.log(data);
            setUser(data)
            
        } catch (error: any) {
            console.error(error);
            // alert(error.message);
        }

    }
    
     function onLogout(){
        const authService = new AuthService()
        authService.logout();
        setAuthenticated(false);

    }
    useEffect(() => {
        getCurrentUser()
    }, [])
    return (
        <div>
            <div className="d-flex flex-column flex-shrink-0 p-3 text-bg-dark" style={{ width: '280px',height:'100vh' }}>
                <a href="/" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none">
                    {/* <BootstrapIcon className="bi pe-none me-2" width="40" height="32" /> */}
                    <span className="fs-4">Admin Dashboard</span>
                </a>
                <hr />
                <ul className="nav nav-pills flex-column mb-auto">

                    <li>
                        <a href="/dashboard" className="nav-link text-white">
                            {/* <SpeedometerIcon className="bi pe-none me-2" width="16" height="16" /> */}
                            Dashboard
                        </a>
                    </li>
                    <li className="nav-item">
                        <a href="/account" className="nav-link active" aria-current="page">
                            {/* <HomeIcon className="bi pe-none me-2" width="16" height="16" /> */}
                            Home
                        </a>
                    </li>
                    <li>
                        <a href="#" className="nav-link text-white">
                            {/* <TableIcon className="bi pe-none me-2" width="16" height="16" /> */}
                            Orders
                        </a>
                    </li>
                    <li>
                        <a href="#" className="nav-link text-white">
                            {/* <GridIcon className="bi pe-none me-2" width="16" height="16" /> */}
                            Products
                        </a>
                    </li>
                    <li>
                        <a href="#" className="nav-link text-white">
                            {/* <PeopleCircleIcon className="bi pe-none me-2" width="16" height="16" /> */}
                            Customers
                        </a>
                    </li>
                </ul>
                <hr />
                <div className="dropdown">
                    <a href="#" className="d-flex align-items-center text-white text-decoration-none dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                        <img src="https://github.com/mdo.png" alt="" width="32" height="32" className="rounded-circle me-2" />
                        <strong>{user?.firstname+ ' '+ user?.firstname}</strong>
                    </a>
                    <ul className="dropdown-menu dropdown-menu-dark text-small shadow">
                        <li><a className="dropdown-item" href="#">New project...</a></li>
                        <li><a className="dropdown-item" href="#">Settings</a></li>
                        <li><a className="dropdown-item" href="#">Profile</a></li>
                        <li><hr className="dropdown-divider" /></li>
                        <li><a className="dropdown-item" href="#" onClick={onLogout}>Sign out</a></li>
                    </ul>
                </div>
            </div>
        </div>
    );
}
