import React from 'react';
import Loader from '../Loader';
import './SplashScreen.css'; // Import the CSS file for animations

export default function SplashScreen() {
  return (
    <div className="splash-screen">
      <div className="content-container flex flex-col justify-center items-center">
        <h2 className="text-2xl font-bold fade-in-1">Welcome to Uber</h2>
        <img src="/logo.png" alt="Uber Logo" className="w-28 m-4 pt-2 fade-in-2" />
        <div className="fade-in-3 mt-4">
          <Loader />
        </div>
      </div>
    </div>
  );
}
