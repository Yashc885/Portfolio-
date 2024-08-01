// Layout.js
import React, { useState, useEffect } from 'react';
import Index from './Index.js'; 
import Section from "../../Utils/Assets/section.svg"

const PreLoader = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate a delay for demonstration purposes
    const timeout = setTimeout(() => {
      setLoading(false);
    }, 1000);

    // Clear timeout on component unmount
    return () => clearTimeout(timeout);
  }, []);

  return (
    <>
        <Image
      src={Section}
      alt="Hero"
      width={1572}
      height={795}
      className="absolute top-0 -z-10"
    />
      {loading ? (
        <Index />
      ) : (
        <div>
          {/* Your main content */}
          <h1>Welcome to My Website</h1>
          <p>This is the main content of your website.</p>
        </div>
      )}
    </>
  );
}

export default PreLoader;
