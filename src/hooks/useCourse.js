import { useState, useEffect } from 'react';
import api from '../services/api';

export const useCourse = (courseId) => {
  const [course, setCourse] = useState(null);
  const [instructor, setInstructor] = useState(null);
  const [category, setCategory] = useState(null);
  const [lessons, setLessons] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchCourseData = async () => {
    try {
      setLoading(true);
      
      const { course: courseData, included } = await api.fetchCourseById(courseId);
      setCourse(courseData);
      
      if (courseData.instructorId) {
        const instructorData = await api.fetchInstructorById(courseData.instructorId);
        setInstructor(instructorData);
      }
      
      if (courseData.categoryId) {
        const categoryData = await api.fetchCategoryById(courseData.categoryId);
        setCategory(categoryData);
      }
      
      const lessonsData = await api.fetchLessons({ courseId });
      setLessons(lessonsData);
      
      setError(null);
    } catch (err) {
      setError(err.message);
      setCourse(null);
      setLessons([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (courseId) {
      fetchCourseData();
    }
  }, [courseId]);

  return {
    course,
    instructor,
    category,
    lessons,
    loading,
    error,
    refresh: fetchCourseData
  };
};