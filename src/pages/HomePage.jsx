import { useState, useContext, useEffect } from 'react';
import { useParams, useNavigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';
import CourseCard from '../components/CourseCard';

export default function HomePage() {
  const {
    filteredCourses,
    categories,
    isLoading,
    errorMessage,
    filterCourses,
    fetchCourses,
    courseList 
  } = useContext(AuthContext);

  const { category: urlCategory } = useParams();
  const navigate = useNavigate();
  const location = useLocation();

  const [searchTerm, setSearchTerm] = useState('');
  const [activeCategory, setActiveCategory] = useState('Все');
  const [localLoading, setLocalLoading] = useState(false);
  const [localError, setLocalError] = useState(null);

  useEffect(() => {
    const loadData = async () => {
      if (courseList.length === 0) { 
        setLocalLoading(true);
        setLocalError(null);
        try {
          await fetchCourses();
        } catch (err) {
          setLocalError('Не удалось загрузить курсы. Попробуйте позже.');
          console.error('Ошибка загрузки:', err);
        } finally {
          setLocalLoading(false);
        }
      }
    };
    
    loadData();
  }, [fetchCourses, courseList.length]);

  useEffect(() => {
    if (urlCategory) {
      try {
        const decodedCategory = decodeURIComponent(urlCategory);
        setActiveCategory(decodedCategory);
        if (location.state?.fromCategory) {
          setSearchTerm('');
        }
      } catch (e) {
        console.error('Ошибка декодирования категории:', e);
        setActiveCategory('Все');
      }
    } else {
      setActiveCategory('Все');
    }
  }, [urlCategory, location.state]);

  useEffect(() => {
    filterCourses(activeCategory, searchTerm);
  }, [activeCategory, searchTerm, filterCourses]);

  const handleRetry = () => {
    setLocalError(null);
    fetchCourses();
  };

  const handleCategoryChange = (category) => {
    setActiveCategory(category);
    navigate(category === 'Все' ? '/' : `/category/${encodeURIComponent(category)}`, {
      state: { fromCategory: true }
    });
  };

  const showLoading = isLoading || localLoading;
  const showError = errorMessage || localError;

  if (showLoading) {
    return (
      <div className="loading-container">
        <div className="spinner"></div>
        <p>Загрузка курсов...</p>
      </div>
    );
  }

  if (showError) {
    return (
      <div className="error-container">
        <p>{showError}</p>
        <button 
          onClick={handleRetry}
          className="retry-button"
        >
          Попробовать снова
        </button>
      </div>
    );
  }

  return (
    <div className="home-page">
      <h1>{activeCategory === 'Все' ? 'Все курсы' : `Курсы: ${activeCategory}`}</h1>
      
      <div className="search-container">
        <input
          type="text"
          placeholder="Поиск курсов..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="search-input"
          disabled={filteredCourses.length === 0}
        />

        <div className="categories">
          {categories.map(category => (
            <button
              key={category}
              className={`category-btn ${activeCategory === category ? 'active' : ''}`}
              onClick={() => handleCategoryChange(category)}
              disabled={categories.length <= 1} 
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      <div className="courses-grid">
        {filteredCourses.length > 0 ? (
          filteredCourses.map(course => (
            <CourseCard 
              key={course.id} 
              course={course} 
            />
          ))
        ) : (
          <div className="no-courses">
            <p>Нет курсов, соответствующих вашему запросу</p>
            {searchTerm || activeCategory !== 'Все' ? (
              <button
                onClick={() => {
                  setSearchTerm('');
                  setActiveCategory('Все');
                }}
                className="clear-filters"
              >
                Сбросить фильтры
              </button>
            ) : (
              <p>Попробуйте загрузить данные снова</p>
            )}
          </div>
        )}
      </div>
    </div>
  );
}