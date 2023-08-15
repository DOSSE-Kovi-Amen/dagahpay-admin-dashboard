import React, { useEffect, useState } from 'react';
import '../assets/css/header.css'
import { redirect, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import AuthService from '../services/AuthService';
import { User } from '../constants/types';
import { useAuthContext } from '../contexts/AuthContext';

export default function Header({toggleSidebar}:any) {
    const [user, setUser] = useState<User | undefined>();
    const navigate = useNavigate();
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
        <div className='header' style={{ background: 'white' }}>
            <div className="container">
                <div style={{ height: '60px', display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                    <a href='#' onClick={toggleSidebar}>
                        <FontAwesomeIcon icon={faBars} style={{ height: 20 }} />

                    </a>
                    <div>
                    <div className="dropdown">
                    <a href="#" className="d-flex align-items-center text-dark text-decoration-none dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                        <img src="https://github.com/mdo.png" alt="" width="32" height="32" className="rounded-circle me-2" />
                        <strong>{user?.lastname}</strong>
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
            </div>

        </div>
    );
}
