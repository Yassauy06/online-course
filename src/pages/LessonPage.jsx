import { useParams, Link, useNavigate } from 'react-router-dom';
import { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../context/AuthContext';

export default function LessonPage() {
  const { lessonId } = useParams();
  const navigate = useNavigate();
  const { courseList } = useContext(AuthContext);
  const [lesson, setLesson] = useState(null);
  const [course, setCourse] = useState(null);
  const [nextLessonId, setNextLessonId] = useState(null);

  useEffect(() => {
    if (!courseList || !Array.isArray(courseList)) {
      setLesson(null);
      setCourse(null);
      return;
    }

    const allLessons = courseList.flatMap(course => course.lessons || []);

    const currentLesson = allLessons.find(l => String(l.id) === String(lessonId));

    if (currentLesson) {
      setLesson(currentLesson);

      const parentCourse = courseList.find(c => c.id === currentLesson.courseId);
      setCourse(parentCourse || null);

      if (parentCourse && Array.isArray(parentCourse.lessons)) {
        const index = parentCourse.lessons.findIndex(l => String(l.id) === String(lessonId));
        const next = parentCourse.lessons[index + 1];
        setNextLessonId(next ? next.id : null);
      }
    } else {
      setLesson(null);
      setCourse(null);
    }
  }, [lessonId, courseList]);

  if (!lesson || !course) {
    return (
      <div className="lesson-page">
        <p>Загрузка урока...</p>
      </div>
    );
  }

  return (
    <div className="lesson-page">
      <h1>{lesson.title}</h1>
      {lesson.description && <p>{lesson.description}</p>}

      <video 
        src={lesson.videoUrl} 
        controls 
        width="100%" 
        style={{ maxWidth: '800px', borderRadius: '12px', marginBottom: '20px' }} 
      />

      <p><strong>Курс:</strong> {course.title}</p>
      <p><strong>Продолжительность:</strong> {lesson.duration}</p>

      <div style={{ display: 'flex', gap: '16px', marginTop: '20px' }}>
        <Link to={`/courses/${course.id}`}>&larr; Назад к курсу</Link>

        {nextLessonId && (
          <button
            onClick={() => navigate(`/courses/${course.id}/lessons/${nextLessonId}`)}
            style={{
              padding: '8px 16px',
              backgroundColor: '#4caf50',
              color: '#fff',
              border: 'none',
              borderRadius: '8px',
              cursor: 'pointer',
              
            }}
          >
            Следующий урок →
          </button>
        )}
      </div>
    </div>
  );
}
