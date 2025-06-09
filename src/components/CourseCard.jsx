import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';

export default function CourseCard({ course }) {
  const { favoriteCourses, toggleFavoriteCourse } = useContext(AuthContext);
  const isFavorite = favoriteCourses.some(c => c.id === course.id);

  const handleFavorite = (e) => {
    e.preventDefault();
    e.stopPropagation();
    toggleFavoriteCourse(course);
  };

  const shortDescription = course.description 
    ? `${course.description.substring(0, 100)}...`
    : 'Описание отсутствует';

  const formattedPrice = course.price 
    ? `${course.price} ₽` 
    : 'Цена не указана';

  const duration = course.duration || 'Длительность не указана';

  return (
    <Link to={`/courses/${course.id}`} className="course-card">
      <div className="card-header">
        <img src={course.image} alt={course.title} className="course-image" />
        
        <button 
          className="favorite-icon"
          onClick={handleFavorite}
          title={isFavorite ? 'Убрать из избранного' : 'Добавить в избранное'}
        >
          <span style={{ color: isFavorite ? 'red' : 'gray' }}>
            {isFavorite ? '❤️' : '🤍'}
          </span>
        </button>

        <h3>{course.title}</h3>
      </div>
      <p className="instructor">Преподаватель: {course.instructor}</p>
      <p className="short-description">{shortDescription}</p>
      <p className="course-info">{duration} </p>
    </Link>
  );
}
