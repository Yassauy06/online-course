// AuthLayout.js
import { Outlet } from "react-router-dom";
import { useState, useContext } from 'react';
import { AuthContext } from '../context/AuthContext';

export default function AuthLayout() {
  
  const { theme, toggleTheme } = useContext(AuthContext);
  return (
    <div className="auth-page">
      <div className={`auth-container ${theme}`}>
        <div className="auth-logo">
          <span>EduPlatform</span>
        </div>
        <Outlet /> 
      </div>
    </div>
  );
}