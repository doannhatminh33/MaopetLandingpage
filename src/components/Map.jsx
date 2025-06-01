'use client';

import React, { useState } from 'react';
import Image from 'next/image';

const Map = () => {
  const [showTooltip, setShowTooltip] = useState(false);
  const locationUrl = "https://www.google.com/maps/place/951+%C4%90.+Gi%E1%BA%A3i+Ph%C3%B3ng,+Gi%C3%A1p+B%C3%A1t,+Ho%C3%A0ng+Mai,+H%C3%A0+N%E1%BB%99i+100000,+Vi%E1%BB%87t+Nam/@20.9784,105.8388248,1015m/data=!3m2!1e3!4b1!4m6!3m5!1s0x3135ac44b0edfa4f:0xd0707aece460d50!8m2!3d20.978395!4d105.8413997!16s%2Fg%2F11lmpkkzvc?entry=ttu&g_ep=EgoyMDI1MDUyOC4wIKXMDSoASAFQAw%3D%3D";

  const handleCopyLink = async (e) => {
    e.preventDefault(); // Prevent the parent link from being triggered
    try {
      await navigator.clipboard.writeText(locationUrl);
      setShowTooltip(true);
      setTimeout(() => setShowTooltip(false), 2000); // Hide tooltip after 2 seconds
    } catch (err) {
      console.error('Failed to copy link:', err);
    }
  };

  return (
    <div className="relative w-full h-[400px]">
      <a 
        href={locationUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="block w-full h-full group"
      >
        <Image
          src="/Location.png"
          alt="Mao Pet Shop Location"
          fill
          className="object-cover rounded-lg transition-opacity group-hover:opacity-90"
        />
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4 rounded-b-lg">
          <div className="flex items-center justify-between max-w-xs mx-auto">
            <div className="flex items-center space-x-2">
              <svg 
                className="w-5 h-5 text-white" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" 
                />
              </svg>
              <p className="text-white font-medium">Open in Google Maps</p>
            </div>
            <button
              onClick={handleCopyLink}
              className="relative flex items-center space-x-1 px-3 py-1 bg-white/10 hover:bg-white/20 rounded-lg transition-colors"
            >
              <svg 
                className="w-5 h-5 text-white" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3" 
                />
              </svg>
              <span className="text-white text-sm">Copy Link</span>
              {showTooltip && (
                <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-black text-white px-3 py-1 rounded-lg text-sm whitespace-nowrap">
                  Link copied!
                  <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-black rotate-45"></div>
                </div>
              )}
            </button>
          </div>
        </div>
      </a>
    </div>
  );
};

export default Map; 