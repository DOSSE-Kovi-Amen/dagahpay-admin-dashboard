import React, { useEffect, useState } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { useAuthContext } from "../contexts/AuthContext";

export default function Dashboard() {
  const navigate=useNavigate()
  const { isAuthenticated } = useAuthContext();
// useEffect(() => {
//   first

//   return () => {
//     second
//   }
// }, [third])

  useEffect(() => { 
    
    if (!isAuthenticated) { return navigate('/signin') }

},[isAuthenticated])
  return (
    <div style={{ background:'red' }}>
      
      <Link title="fgg" to={'/signin'}>jjhjh</Link>

    </div>
  );
}