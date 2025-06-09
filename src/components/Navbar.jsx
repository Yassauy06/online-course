import { Link } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';
import { useContext } from 'react';

export default function Navbar() {
  const { user, logout } = useContext(AuthContext);

  return (
    <header className="header">
      <div className="header-content">
        <div className="search-bar">
          <input type="text" placeholder="Поиск курсов..." />
        </div>
        
        <div className="user-menu">
          {user ? (
            <>
              <span className="user-name">{user.email}</span>
              <button onClick={logout} className="logout-btn">
                Выйти
              </button>
            </>
          ) : (
            <>
              <Link to="/login" className="auth-link">
                Вход
              </Link>
              <Link to="/register" className="auth-link">
                Регистрация
              </Link>
            </>
          )}
        </div>
      </div>
    </header>
  );
}