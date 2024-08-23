import React from 'react';

type ComponentProps = {
  alignment?: "left" | "center" | "right";
  mode?: "default" | "primary" | "secondary" | "primary--outline" | "secondary--outline"; // Optional mode prop
  label: string;
  icon?: React.ReactNode;
  size?: string;
  to?: string;
  onClick?: React.MouseEventHandler<HTMLAnchorElement>;
};


const Component: React.FC<ComponentProps> = ({
  mode = "primary",
  alignment = "left",
  icon,
  label,
  size,
  to,
  onClick,
  ...rest
}) => (
  <div className={`button__wrapper ${alignment}`}>
    <a
      href={to}
      onClick={onClick}
      className={`${mode} ${size}`}
      {...rest}
    >
      <span>{label}</span>
      {icon && icon}
    </a>
  </div>
);

export default Component;
