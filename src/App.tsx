import React from 'react';
import logo from './logo.svg';
import './App.css';
import Signin from './pages/auth/Signin';
import { baseApiUrl } from './config';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import Dashboard from './pages/Dashboard';
import { AuthProvider } from './contexts/AuthContext';
import Account from './pages/Account';

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Routes>
          <Route path="/" element={<Navigate to="/dashboard" />} />

          <Route path="/signin" Component={Signin} />
          <Route Component={MainLayout}>
            {/* <Route path="/signin" Component={Signin} /> */}
            <Route path="/dashboard" Component={Dashboard} />
            <Route path="/account" Component={Account} />

          </Route>

        </Routes>
      </AuthProvider>

    </BrowserRouter>
  );
}

export default App;
