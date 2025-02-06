import { ReactNode } from 'react';
import './button.scss';

const Button = ({ children, onClick }: { children: ReactNode, onClick: () => void }) => {
  
  return (
    <button className="button" onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
