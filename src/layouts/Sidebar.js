import { useCallback, useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const menuItems = [
  { to: "/", icon: "🏠", text: "Главная", end: true },
  { to: "/favorites", icon: "⭐", text: "Избранное" }
];

const categories = [
  { to: "/category/Программирование", icon: "💻", text: "Программирование" },
  { to: "/category/Дизайн", icon: "🎨", text: "Дизайн" },
  { to: "/category/Маркетинг", icon: "📊", text: "Маркетинг" }
];

export default function Sidebar() {
  const { currentUser, logout } = useAuth();
  const location = useLocation();
  const [collapsed, setCollapsed] = useState(false);
  
  const toggleSidebar = useCallback(() => setCollapsed(prev => !prev), []);
  
  if (['/login', '/register'].includes(location.pathname)) return null;

  return (
    <aside className={`sidebar ${collapsed ? 'collapsed' : ''}`}>
      <button className="sidebar-toggle" onClick={toggleSidebar}>
        {collapsed ? '»' : '«'}
      </button>
      
      <div className="sidebar-content">
        <div className="sidebar-header">
          <h1 className="sidebar-logo">{collapsed ? 'EP' : 'EduPlatform'}</h1>
          
          <div className={`sidebar-auth ${collapsed ? 'collapsed' : ''}`}>
            {!currentUser ? (
              <>
                <NavLink to="/login" className="auth-link" title="Вход">
                  {collapsed ? '🔑' : 'Войти'}
                </NavLink>
                <NavLink to="/register" className="auth-link" title="Регистрация">
                  {collapsed ? '✏️' : 'Регистрация'}
                </NavLink>
              </>
            ) : (
              <button onClick={logout} className="auth-link" title="Выход">
                {collapsed ? '🚪' : 'Выйти'}
              </button>
            )}
          </div>
        </div>
        
        <nav className="sidebar-nav">
          <SidebarSection title="Меню" items={menuItems} collapsed={collapsed} />
          <SidebarSection title="Категории" items={categories} collapsed={collapsed} />
        </nav>
      </div>
    </aside>
  );
}

function SidebarSection({ title, items, collapsed }) {
  return (
    <div className="sidebar-section">
      <h3 className="sidebar-title">{collapsed ? '' : title}</h3>
      <ul className="nav-menu">
        {items.map((item) => (
          <li key={item.to} className="nav-item">
            <NavLink to={item.to} className="nav-link" end={item.end}>
              <span className="nav-icon">{item.icon}</span>
              {!collapsed && <span className="nav-text">{item.text}</span>}
            </NavLink>
          </li>
        ))}
      </ul>
    </div>
  );
}