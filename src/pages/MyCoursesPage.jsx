import { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
import CourseCard from '../components/CourseCard';

export default function MyCoursesPage() {
  const { user } = useContext(AuthContext);

  return (
    <div className="my-courses-page">
      <h1>Мои курсы</h1>
      {user ? (
        <div className="courses-grid">
          
          <p>Список ваших курсов появится здесь</p>
        </div>
      ) : (
        <p>Пожалуйста, войдите в систему, чтобы просмотреть свои курсы</p>
      )}
    </div>
  );
}