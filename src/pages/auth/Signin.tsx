import React, { useEffect, useState } from "react";
import '../../assets/css/Signin.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserCircle, faCog, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import AuthService from "../../services/AuthService";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { Credentials } from "../../constants/types";
import { useAuthContext } from "../../contexts/AuthContext";

export default function Signin() {
    const navigate = useNavigate();
    const [credentials, setCredentials] = useState<Credentials>({
        email: "",
        password: "",
    });
    const { setAuthenticated } = useAuthContext();
    const [error, setError] = useState<string | null>(null);
    // Authentication
    const { isAuthenticated } = useAuthContext();

    useEffect(() => { 
    
        if (isAuthenticated) { return navigate('/dashboard') }

    }
    
    ,[isAuthenticated])
    async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();

        try {
            const authService = new AuthService()
            const data = await authService.login(credentials);
            // Stocker le token d'authentification ou la session ici
            localStorage.setItem('token', data.token);
            setAuthenticated(true);

            navigate("/dashboard");
        } catch (error: any) {
            console.error(error);
            setError(error.message);
        }
    }
    return (
        <div className="body">
            <main className="form-signin w-100 m-auto">
                <form onSubmit={handleSubmit}>
                    <div className="text-center">
                        <FontAwesomeIcon icon={faUserCircle} size="5x" style={{ color:'gray' }} />
                    </div>
                    <h1 className="h3 mb-3 fw-normal text-center">Admin sign in</h1>

                    <div className="form-floating">
                        <input type="email" className="form-control" id="email"
                            value={credentials.email}
                            onChange={(event) =>
                                setCredentials({ ...credentials, email: event.target.value })
                            }
                            placeholder="Email address" />
                        <label htmlFor="email">Email address</label>
                    </div>
                    <div className="form-floating">
                        <input type="password" className="form-control"
                            value={credentials.password}
                            onChange={(event) =>
                                setCredentials({ ...credentials, password: event.target.value })
                            }
                            id="password" placeholder="Password" />
                        <label htmlFor="password">Password</label>
                    </div>

                    <div className="checkbox mb-3">
                        <label>
                            <input type="checkbox" value="remember-me" /> Remember me
                        </label>
                    </div>
                    <button className="w-100 btn btn-lg btn-primary" type="submit">Sign in</button>
                    {error && <p className="text-danger mt-2">{error}</p>}
                </form>
                
            </main>
        </div>
    );
}