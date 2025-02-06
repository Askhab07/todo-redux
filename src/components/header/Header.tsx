import { format } from 'date-fns';
import { ru } from 'date-fns/locale';
import './header.scss';
import { Link, useLocation } from 'react-router-dom';
import { IoClose } from 'react-icons/io5';
import ThemeToggle from '../theme/ThemeToggle';

interface IHeaderProps {
  className: string;
}

const Header: React.FC<IHeaderProps> = ({ className }) => {
  const location = useLocation();
  const date = format(new Date(), 'MMMM do, yyyy', { locale: ru });
  const formattedDate = date.charAt(0).toUpperCase() + date.slice(1);

  return (
    <header className={`header ${className}`}>
      {location.pathname === '/' ? (
        ''
      ) : (
        <Link to='/'>
          <div className="header-close">
            <IoClose className="header-close__icon" />
          </div>
        </Link>
      )}
      <div className="header-date">
        {location.pathname === '/' ? formattedDate : 'Add New Task'}
      </div>
      <div className="header-title">
        {location.pathname === '/' ? <ThemeToggle /> : ""}
        {location.pathname === '/' ? 'My Todo List' : ''}
      </div>
    </header>
  );
};

export default Header;
