import React from 'react';

interface NoDataProps {
  message: string;
}

const NoData: React.FC<NoDataProps> = ({ message }) => {
  return (
    <div className="nodata__area">
      <div className="wrap">
        <p>{message}</p>
      </div>
    </div>
  );
};

export default NoData;
