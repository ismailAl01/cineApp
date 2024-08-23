import React from 'react';
import Lottie from 'react-lottie';
import animationData from './spinner.json';


const Loader = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice"
    }
  };

  return (
    <div className="loader__area">
      <div className="wrap">
        <Lottie
          options={defaultOptions}
        />
      </div>
    </div>
  );
};

export default Loader;
