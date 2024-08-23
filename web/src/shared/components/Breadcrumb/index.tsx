import React from 'react';
import Container from '@/shared/components/Container';

interface BreadcrumbProps {
  title: string;
  subtitle: string;
  backgroundImage: string;
  large?: boolean
}

const Breadcrumb: React.FC<BreadcrumbProps> = ({ title, subtitle, backgroundImage, large = false }) => {
  return (
    <Container>
      <div
        className={`breadcrumb__area  ${large && "breadcrumb--large"}`}
        style={{
          backgroundImage: `linear-gradient(to top, rgba(0, 0, 0, 0.8),rgba(0, 0, 0, 0)), url(${backgroundImage})`
        }}
      >
        <div className={"breadcrumb__area--content"}>
          <span>{subtitle}</span>
          <h1>{title}</h1>
        </div>
      </div>
    </Container>
  );
};

export default Breadcrumb;
