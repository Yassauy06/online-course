import { createContext, useState, useEffect, useCallback, useContext } from 'react';
import localData from '../data/LocalData';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(() => {
    const saved = localStorage.getItem('user');
    return saved ? JSON.parse(saved) : null;
  });

  const [courseList, setCourseList] = useState([]);
  const [filteredCourses, setFilteredCourses] = useState([]);
  const [categories, setCategories] = useState([]);
  const [favoriteCourses, setFavoriteCourses] = useState(() => {
    const stored = localStorage.getItem('favorites');
    return stored ? JSON.parse(stored) : [];
  });
  const [isLoading, setIsLoading] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);
  const [theme, setTheme] = useState(() => localStorage.getItem('theme') || 'light');

  const fetchCourses = useCallback(async () => {
    try {
      setIsLoading(true);
      setErrorMessage(null);

      const { courses, instructors, categories: catData } = localData;

      const normalizedCourses = courses.map(course => ({
        ...course,
        lessons: course.lessons || [], 
        category: catData.find(c => c.id === course.categoryId)?.title || 'Другое',
        instructor: instructors.find(i => i.id === course.instructorId)?.name || 'Преподаватель неизвестен',
      }));

      setCourseList(normalizedCourses);
      extractCategories(normalizedCourses);
    } catch (err) {
      console.error('Ошибка загрузки курсов:', err);
      setErrorMessage('Не удалось загрузить курсы.');
    } finally {
      setIsLoading(false);
    }
  }, []);

  const extractCategories = (courses) => {
    const unique = [...new Set(courses.map(course => course.category))];
    setCategories(['Все', ...unique]);
  };

  const filterCourses = useCallback((category = 'Все', searchTerm = '') => {
    let filtered = [...courseList];

    if (category !== 'Все') {
      filtered = filtered.filter(course => course.category === category);
    }

    if (searchTerm) {
      const term = searchTerm.toLowerCase();
      filtered = filtered.filter(course =>
        course.title?.toLowerCase().includes(term) ||
        course.description?.toLowerCase().includes(term) ||
        course.instructor?.toLowerCase().includes(term)
      );
    }

    setFilteredCourses(filtered);
  }, [courseList]);

  const getCourseDetails = useCallback(async (courseId) => {
    const course = localData.courses.find(c => String(c.id) === String(courseId));
    if (!course) throw new Error('Курс не найден');

    const instructor = localData.instructors.find(i => i.id === course.instructorId);
    const category = localData.categories.find(cat => cat.id === course.categoryId);

    return {
      ...course,
      instructor: instructor?.name || 'Преподаватель неизвестен',
      category: category?.title || 'Другое',
      lessons: course.lessons || [],  // Уроки из курса
    };
  }, []);

  const toggleFavoriteCourse = useCallback((course) => {
    setFavoriteCourses(prev => {
      const updated = prev.some(c => c.id === course.id)
        ? prev.filter(c => c.id !== course.id)
        : [...prev, course];
      localStorage.setItem('favorites', JSON.stringify(updated));
      return updated;
    });
  }, []);

  const register = async (email, password) => {
    const user = { id: Date.now(), email, password };
    setCurrentUser(user);
    localStorage.setItem('user', JSON.stringify(user));
    return { success: true };
  };

  const login = async (email, password) => {
    const user = { id: Date.now(), email, password };
    setCurrentUser(user);
    localStorage.setItem('user', JSON.stringify(user));
    return { success: true };
  };

  const logout = () => {
    setCurrentUser(null);
    localStorage.removeItem('user');
  };

  const toggleTheme = () => {
    setTheme(prev => (prev === 'light' ? 'dark' : 'light'));
  };

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  useEffect(() => {
    fetchCourses();
  }, [fetchCourses]);

  return (
    <AuthContext.Provider
      value={{
        currentUser,
        courseList,
        filteredCourses,
        categories,
        favoriteCourses,
        isLoading,
        errorMessage,
        fetchCourses,
        filterCourses,
        getCourseDetails,
        toggleFavoriteCourse,
        setCurrentUser,
        toggleTheme,
        theme,
        register,
        login,
        logout
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
