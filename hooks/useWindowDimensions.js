import React, { useState, useEffect } from 'react';

function getWindowDimensions() {
  if (typeof window === 'undefined') return { width: 1200, height: 1200 };
  const { innerWidth: width, innerHeight: height } = window;

  return {
    width,
    height
  };
}

export function useWindowDimensions() {
  const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());

  useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions());
    }
     
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return windowDimensions;
}