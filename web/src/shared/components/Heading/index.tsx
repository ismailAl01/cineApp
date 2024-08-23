import React from 'react';

interface MainHeadingProps {
  title?: string;
  short?: string;
}

const Heading: React.FC<MainHeadingProps> = ({ title = "", short }) => {
  return (
    <div className={`heading__area `}>
      <h2>{title}</h2>
      <p>{short}</p>
    </div>
  );
};

export default Heading;
