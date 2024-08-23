import React from 'react';
import Container from '@/shared/components/Container';


const Hero = () => {
  return (
    <div className="hero__area">
      <Container>
        <div className="hero__area--wrapper" >
          <img src="/banner.jpg" alt="" className="hero__area--media" />
          <div className="hero__area--content">
            <span>Welcome to ALLOCINÉ</span>
            <h1>Explore new universe</h1>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Hero;
