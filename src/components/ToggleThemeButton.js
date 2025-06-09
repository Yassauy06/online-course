import { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';

function ToggleThemeButton() {
  const { theme, toggleTheme } = useContext(AuthContext);
  
  return (
    <button 
      onClick={toggleTheme}
      className="theme-toggle"
      aria-label={`Переключить на ${theme === 'light' ? 'тёмную' : 'светлую'} тему`}
    >
      {theme === 'light' ? '🌙' : '☀️'}
    </button>
  );
}

export default ToggleThemeButton;