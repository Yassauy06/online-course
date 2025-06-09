import { Routes, Route, Navigate, useLocation } from 'react-router-dom';
import { useAuth } from './context/AuthContext'; 
import { AuthProvider } from './context/AuthContext';
import HomePage from './pages/HomePage';
import CoursePage from './pages/CoursePage';
import RegisterPage from './pages/RegisterPage';
import LoginPage from './pages/LoginPage';
import FavoritesPage from './pages/FavoritesPage';
import NotFoundPage from './pages/NotFoundPage';
import AuthLayout from './layouts/AuthLayout';
import MainLayout from './layouts/MainLayout';
import ToggleThemeButton from './components/ToggleThemeButton';
import LessonPage from './pages/LessonPage';

function ProtectedRoute({ children }) {
  const { currentUser } = useAuth();
  const location = useLocation();
  
  return currentUser ? children : <Navigate to="/login" state={{ from: location }} replace />;
}

function App() {
  return (
    <AuthProvider>
      <ToggleThemeButton />
      <Routes>
        <Route element={<MainLayout />}>
          <Route index element={<HomePage />} />
          <Route path="/courses/:id" element={<CoursePage />} />
          <Route path="/courses/:courseId/lessons/:lessonId" element={<LessonPage />} />

          <Route path="/favorites" element={
            <ProtectedRoute><FavoritesPage /></ProtectedRoute>
          } />
          <Route path="/category/:category" element={<HomePage />} />
        </Route>
        
        <Route element={<AuthLayout />}>
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/login" element={<LoginPage />} />
        </Route>
        
        <Route path="/not-found" element={<NotFoundPage />} />
        <Route path="*" element={<Navigate to="/not-found" replace />} />
      </Routes>
    </AuthProvider>
  );
}

export default App;
