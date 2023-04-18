import React from 'react';
import logo from './logo.svg';
import './App.css';
import Signin from './pages/auth/Signin';
import { baseApiUrl } from './config';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import Dashboard from './pages/Dashboard';
import { AuthProvider } from './contexts/AuthContext';

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Routes>
          <Route path="/signin" Component={Signin} />
          <Route Component={MainLayout}>
            {/* <Route path="/signin" Component={Signin} /> */}
            <Route path="/dashboard" Component={Dashboard} />
          </Route>

        </Routes>
      </AuthProvider>

    </BrowserRouter>
  );
}

export default App;
