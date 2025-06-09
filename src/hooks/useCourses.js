import { useState, useEffect } from 'react';
import api from '../services/api';

export const useCourses = (initialParams = {}) => {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [meta, setMeta] = useState(null);
  const [params, setParams] = useState(initialParams);

  const fetchCourses = async () => {
    try {
      setLoading(true);
      const { data, meta } = await api.fetchCourses(params);
      setCourses(data);
      setMeta(meta);
      setError(null);
    } catch (err) {
      setError(err.message);
      setCourses([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCourses();
  }, [params]);

  return {
    courses,
    loading,
    error,
    meta,
    params,
    setParams,
    refresh: fetchCourses
  };
};