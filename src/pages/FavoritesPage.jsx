import { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';
import CourseCard from '../components/CourseCard';

export default function FavoritesPage() {
  const { currentUser, favoriteCourses } = useContext(AuthContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (!currentUser) {
      navigate('/login', { state: { from: '/favorites' } });
    }
  }, [currentUser, navigate]);

  if (!currentUser) {
    return null; 
  }
console.log("LocalStorage user:", localStorage.getItem('user'));
  return (
    <div className="favorites-page">
      <h1>Избранные курсы</h1>
      {favoriteCourses.length === 0 ? (
        <p>У вас пока нет избранных курсов</p>
      ) : (
        <div className="courses-grid">
          {favoriteCourses.map(course => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>
      )}
    </div>
  );
}