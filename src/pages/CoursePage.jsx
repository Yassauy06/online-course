import { useParams, Link } from 'react-router-dom';
import { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../context/AuthContext';

export default function CoursePage() {
  const { id: courseId } = useParams();
  const { getCourseDetails } = useContext(AuthContext);
  const [course, setCourse] = useState(null);
  const [lessons, setLessons] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

 useEffect(() => {
  const fetchData = async () => {
    try {
      if (!courseId) throw new Error('ID курса не указан');

      const courseData = await getCourseDetails(courseId);
      setCourse(courseData);
      setLessons(courseData.lessons || []);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  fetchData();
}, [courseId, getCourseDetails]);



  if (loading) return <div>Загрузка...</div>;
  if (error) return <div>Ошибка: {error}</div>;
  if (!course) return <div>Курс не найден</div>;

  return (
    <div className="course-page">
      <h1>{course.title}</h1>
      <p>{course.description}</p>
      
      <h2>Уроки</h2>
      {lessons.length > 0 ? (
        <ul>
          <ul>
  {lessons.map((lesson, index) => (
    <li key={lesson.id}>
      <Link className='link-lesson' to={`/courses/${course.id}/lessons/${lesson.id}`}>
        Урок {index + 1}: {lesson.title}
      </Link>
    </li>
  ))}
</ul>

        </ul>
      ) : (
        <p>Уроки не найдены</p>
      )}
      
      <Link to="/">Назад</Link>
    </div>
  );
}