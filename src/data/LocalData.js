const localData = {
  courses: [  {
        "id": 1,
        "title": "JavaScript для начинающих",
        "description": "Основы JavaScript за 8 недель",
        "categoryId": 1,
        "price": 10900,
        "duration": "8 недель",
        "image": "https://via.placeholder.com/300?text=JavaScript",
        "rating": 4.7,
        "level": "beginner",
        "instructorId": 101,
        lessons: [
          {
        "id": 101,
        "title": "Введение в JavaScript",
        "duration": "45 минут",
        "videoUrl": "https://example.com/videos/js_intro.mp4",
        "courseId": 1
      },
  {
    "id": 102,
    "title": "Переменные и типы данных",
    "duration": "40 минут",
    "videoUrl": "https://example.com/videos/js_variables.mp4",
    "courseId": 1,
    "homework": "Создайте переменные с разными типами данных: строка, число, булево. Выведите их в консоль."
  },
  {
    "id": 103,
    "title": "Операторы и выражения",
    "duration": "35 минут",
    "videoUrl": "https://example.com/videos/js_operators.mp4",
    "courseId": 1,
    "practice": "Напишите программу, которая складывает два числа и проверяет, делится ли результат на 2."
  },
  {
    "id": 104,
    "title": "Условные конструкции: if, else, switch",
    "duration": "45 минут",
    "videoUrl": "https://example.com/videos/js_conditions.mp4",
    "courseId": 1,
    "homework": "Сделайте калькулятор, который выполняет разные действия в зависимости от введённого оператора."
  },
  {
    "id": 105,
    "title": "Циклы: for, while, do...while",
    "duration": "50 минут",
    "videoUrl": "https://example.com/videos/js_loops.mp4",
    "courseId": 1,
    "practice": "Выведите все числа от 1 до 100, которые делятся на 3 и 5 одновременно."
  },
  {
    "id": 106,
    "title": "Функции в JavaScript",
    "duration": "55 минут",
    "videoUrl": "https://example.com/videos/js_functions.mp4",
    "courseId": 1,
    "homework": "Напишите функцию, которая возвращает максимум из двух чисел."
  },
  {
    "id": 107,
    "title": "Массивы и методы массивов",
    "duration": "1 час",
    "videoUrl": "https://example.com/videos/js_arrays.mp4",
    "courseId": 1,
    "practice": "Создайте массив из 5 чисел, найдите их сумму и среднее значение."
  },
  {
    "id": 108,
    "title": "Объекты в JavaScript",
    "duration": "50 минут",
    "videoUrl": "https://example.com/videos/js_objects.mp4",
    "courseId": 1,
    "homework": "Опишите объект 'пользователь' с полями имя, возраст и метод приветствия."
  },
  {
    "id": 109,
    "title": "Введение в DOM и работа с HTML-элементами",
    "duration": "1 час 10 минут",
    "videoUrl": "https://example.com/videos/js_dom.mp4",
    "courseId": 1,
    "miniProject": "Сделайте простую веб-страницу с кнопкой, при нажатии на которую меняется цвет фона."
  },
  {
    "id": 110,
    "title": "События в JavaScript",
    "duration": "45 минут",
    "videoUrl": "https://example.com/videos/js_events.mp4",
    "courseId": 1,
    "homework": "Добавьте обработчики событий для клика, наведения и ввода текста в input на странице."
  },
  {
    "id": 111,
    "title": "Асинхронность: setTimeout, fetch и async/await",
    "duration": "1 час 15 минут",
    "videoUrl": "https://example.com/videos/js_async.mp4",
    "courseId": 1,
    "miniProject": "Сделайте запрос к публичному API (например, JSONPlaceholder) и выведите полученные данные на страницу."
  }
        ],
        "createdAt": "2023-01-15T08:00:00Z",
        "updatedAt": "2023-01-20T10:30:00Z"
      },
      {
        "id": 2,
        "title": "React: полное руководство",
        "description": "Современный React с hooks и Redux",
        "categoryId": 1,
        "price": 14900,
        "duration": "10 недель",
        "image": "https://via.placeholder.com/300?text=React",
        "rating": 4.9,
        "level": "intermediate",
        "instructorId": 102,
        lessons: [
          {
        "id": 201,
        "title": "React и JSX",
        "duration": "50 минут",
        "videoUrl": "https://example.com/videos/react_jsx.mp4",
        "courseId": 2
      },
       {
    id: 202,
    title: "Урок 1: Что такое React?",
    duration: "20 минут",
    videoUrl: "https://example.com/videos/react_intro.mp4",
    courseId: 2
  },
  {
    id: 203,
    title: "Урок 2: Установка окружения с Create React App",
    duration: "25 минут",
    videoUrl: "https://example.com/videos/react_install.mp4",
    courseId: 2
  },
  {
    id: 204,
    title: "Урок 3: Первые компоненты и JSX",
    duration: "30 минут",
    videoUrl: "https://example.com/videos/react_jsx_components.mp4",
    courseId: 2
  },
  {
    id: 205,
    title: "Урок 4: Пропсы и передача данных",
    duration: "25 минут",
    videoUrl: "https://example.com/videos/react_props.mp4",
    courseId: 2
  },
  {
    id: 206,
    title: "Урок 5: Состояние компонента (useState)",
    duration: "30 минут",
    videoUrl: "https://example.com/videos/react_state.mp4",
    courseId: 2
  },
  {
    id: 207,
    title: "Урок 6: Обработка событий",
    duration: "20 минут",
    videoUrl: "https://example.com/videos/react_events.mp4",
    courseId: 2
  },
  {
    id: 208,
    title: "Урок 7: Списки и ключи в React",
    duration: "25 минут",
    videoUrl: "https://example.com/videos/react_lists.mp4",
    courseId: 2
  },
  {
    id: 209,
    title: "Урок 8: Условный рендеринг",
    duration: "20 минут",
    videoUrl: "https://example.com/videos/react_conditions.mp4",
    courseId: 2
  },
  {
    id: 210,
    title: "Урок 9: Хук useEffect и жизненный цикл компонентов",
    duration: "35 минут",
    videoUrl: "https://example.com/videos/react_useeffect.mp4",
    courseId: 2
  },
  {
    id: 211,
    title: "Урок 10: Работа с формами в React",
    duration: "30 минут",
    videoUrl: "https://example.com/videos/react_forms.mp4",
    courseId: 2
  }
        ],
        "createdAt": "2023-02-10T08:00:00Z",
        "updatedAt": "2023-02-15T10:30:00Z"
      },
      {
        "id": 3,
        "title": "Python для анализа данных",
        "description": "Pandas, NumPy и Matplotlib",
        "categoryId": 1,
        "price": 13900,
        "duration": "8 недель",
        "image": "https://via.placeholder.com/300?text=Python",
        "rating": 4.8,
        "level": "intermediate",
        "instructorId": 103,
        lessons: [
         {
    id: 302,
    title: "Урок 1: Введение в анализ данных на Python",
    duration: "20 минут",
    videoUrl: "https://example.com/videos/python_data_intro.mp4",
    courseId: 3
  },
  {
    id: 303,
    title: "Урок 2: Установка Python, Jupyter и библиотек",
    duration: "25 минут",
    videoUrl: "https://example.com/videos/python_setup.mp4",
    courseId: 3
  },
  {
    id: 304,
    title: "Урок 3: Основы NumPy — массивы и вычисления",
    duration: "30 минут",
    videoUrl: "https://example.com/videos/numpy_basics.mp4",
    courseId: 3
  },
  {
    id: 305,
    title: "Урок 4: Pandas — работа с таблицами (DataFrame)",
    duration: "35 минут",
    videoUrl: "https://example.com/videos/pandas_dataframe.mp4",
    courseId: 3
  },
  {
    id: 306,
    title: "Урок 5: Импорт и экспорт данных (CSV, Excel)",
    duration: "25 минут",
    videoUrl: "https://example.com/videos/pandas_io.mp4",
    courseId: 3
  },
  {
    id: 307,
    title: "Урок 6: Фильтрация, сортировка и агрегация данных",
    duration: "30 минут",
    videoUrl: "https://example.com/videos/pandas_filtering.mp4",
    courseId: 3
  },
  {
    id: 308,
    title: "Урок 7: Визуализация данных с Matplotlib",
    duration: "30 минут",
    videoUrl: "https://example.com/videos/matplotlib_intro.mp4",
    courseId: 3
  },
  {
    id: 309,
    title: "Урок 8: Построение графиков с Seaborn",
    duration: "25 минут",
    videoUrl: "https://example.com/videos/seaborn_basics.mp4",
    courseId: 3
  },
  {
    id: 310,
    title: "Урок 9: Анализ пропущенных данных и очистка",
    duration: "35 минут",
    videoUrl: "https://example.com/videos/data_cleaning.mp4",
    courseId: 3
  },
  {
    id: 311,
    title: "Урок 10: Простой проект: анализ продаж",
    duration: "40 минут",
    videoUrl: "https://example.com/videos/sales_analysis_project.mp4",
    courseId: 3
  }
        ],
        "createdAt": "2023-03-05T08:00:00Z",
        "updatedAt": "2023-03-10T10:30:00Z"
      },
      {
        "id": 4,
        "title": "Алгоритмы и структуры данных",
        "description": "Базовые алгоритмы на Python",
        "categoryId": 1,
        "price": 12900,
        "duration": "12 недель",
        "image": "https://via.placeholder.com/300?text=Algorithms",
        "rating": 4.6,
        "level": "advanced",
        "instructorId": 104,
        lessons: [
          {
        "id": 401,
        "title": "Базовые алгоритмы на Python",
        "duration": "1 час 20 минут",
        "videoUrl": "https://example.com/videos/algorithms.mp4",
        "courseId": 4
      }, {
    id: 402,
    title: "Урок 2: Поиск максимума и минимума в списке",
    duration: "20 минут",
    videoUrl: "https://example.com/videos/python_max_min.mp4",
    courseId: 4
  },
  {
    id: 403,
    title: "Урок 3: Сортировка списка (пузырьком и встроенные методы)",
    duration: "30 минут",
    videoUrl: "https://example.com/videos/python_sorting.mp4",
    courseId: 4
  },
  {
    id: 404,
    title: "Урок 4: Линейный и бинарный поиск",
    duration: "25 минут",
    videoUrl: "https://example.com/videos/python_search.mp4",
    courseId: 4
  },
  {
    id: 405,
    title: "Урок 5: Работа со строками — разворот, подсчёт символов",
    duration: "20 минут",
    videoUrl: "https://example.com/videos/python_strings.mp4",
    courseId: 4
  },
  {
    id: 406,
    title: "Урок 6: Рекурсия на примерах",
    duration: "30 минут",
    videoUrl: "https://example.com/videos/python_recursion.mp4",
    courseId: 4
  },
  {
    id: 407,
    title: "Урок 7: Факториал, числа Фибоначчи и другие классические задачи",
    duration: "35 минут",
    videoUrl: "https://example.com/videos/python_classic_tasks.mp4",
    courseId: 4
  },
  {
    id: 408,
    title: "Урок 8: Словари и подсчёт частоты элементов",
    duration: "25 минут",
    videoUrl: "https://example.com/videos/python_dicts.mp4",
    courseId: 4
  },
  {
    id: 409,
    title: "Урок 9: Работа с матрицами (2D списки)",
    duration: "30 минут",
    videoUrl: "https://example.com/videos/python_matrices.mp4",
    courseId: 4
  },
  {
    id: 410,
    title: "Урок 10: Практика — решение олимпиадных задач",
    duration: "40 минут",
    videoUrl: "https://example.com/videos/python_practice.mp4",
    courseId: 4
  }
        ],
        "createdAt": "2023-04-01T08:00:00Z",
        "updatedAt": "2023-04-06T10:30:00Z"
      },
      {
        "id": 5,
        "title": "Node.js: серверная разработка",
        "description": "Backend на JavaScript",
        "categoryId": 1,
        "price": 15900,
        "duration": "9 недель",
        "image": "https://via.placeholder.com/300?text=Node.js",
        "rating": 4.7,
        "level": "intermediate",
        "instructorId": 105,
        lessons: [
          {
        "id": 501,
        "title": "Создание REST API на Node.js",
        "duration": "1 час 15 минут",
        "videoUrl": "https://example.com/videos/node_rest_api.mp4",
        "courseId": 5
      },
       {
    "id": 502,
    "title": "Урок 1: Введение в Backend-разработку на JavaScript",
    "duration": "30 минут",
    "videoUrl": "https://example.com/videos/backend_js_intro.mp4",
    "courseId": 5
  },
  {
    "id": 503,
    "title": "Урок 2: Установка Node.js и настройка окружения",
    "duration": "35 минут",
    "videoUrl": "https://example.com/videos/nodejs_setup.mp4",
    "courseId": 5
  },
  {
    "id": 504,
    "title": "Урок 3: Работа с модулями в Node.js",
    "duration": "40 минут",
    "videoUrl": "https://example.com/videos/nodejs_modules.mp4",
    "courseId": 5
  },
  {
    "id": 505,
    "title": "Урок 4: Создание HTTP-сервера без фреймворков",
    "duration": "45 минут",
    "videoUrl": "https://example.com/videos/http_server.mp4",
    "courseId": 5
  },
  {
    "id": 506,
    "title": "Урок 5: Введение в Express.js",
    "duration": "50 минут",
    "videoUrl": "https://example.com/videos/express_intro.mp4",
    "courseId": 5
  },
  {
    "id": 507,
    "title": "Урок 6: Маршрутизация в Express.js",
    "duration": "40 минут",
    "videoUrl": "https://example.com/videos/express_routing.mp4",
    "courseId": 5
  },
  {
    "id": 508,
    "title": "Урок 7: Работа с Middleware в Express.js",
    "duration": "45 минут",
    "videoUrl": "https://example.com/videos/express_middleware.mp4",
    "courseId": 5
  },
  {
    "id": 509,
    "title": "Урок 8: Подключение MongoDB через Mongoose",
    "duration": "50 минут",
    "videoUrl": "https://example.com/videos/mongodb_mongoose.mp4",
    "courseId": 5
  },
  {
    "id": 510,
    "title": "Урок 9: Создание REST API с использованием Express и MongoDB",
    "duration": "1 час",
    "videoUrl": "https://example.com/videos/rest_api_node.mp4",
    "courseId": 5
  },
  {
    "id": 511,
    "title": "Урок 10: Аутентификация и защита маршрутов (JWT)",
    "duration": "1 час 10 минут",
    "videoUrl": "https://example.com/videos/jwt_auth.mp4",
    "courseId": 5
  }
        ],
        "createdAt": "2023-05-01T08:00:00Z",
        "updatedAt": "2023-05-06T10:30:00Z"
      },
      {
        "id": 6,
        "title": "Vue.js с нуля",
        "description": "Фронтенд на Vue 3",
        "categoryId": 1,
        "price": 11900,
        "duration": "7 недель",
        "image": "https://via.placeholder.com/300?text=Vue.js",
        "rating": 4.5,
        "level": "beginner",
        "instructorId": 106,
        lessons: [
        {
      id: 601,
      title: "Основы Vue.js 3",
      duration: "45 минут",
      videoUrl: "https://example.com/videos/vue3_basics.mp4",
      courseId: 6
    },
    {
      id: 602,
      title: "Установка и настройка окружения",
      duration: "30 минут",
      videoUrl: "https://example.com/videos/vue3_setup.mp4",
      courseId: 6
    },
    {
      id: 603,
      title: "Компоненты и шаблоны",
      duration: "50 минут",
      videoUrl: "https://example.com/videos/vue3_components.mp4",
      courseId: 6
    },
    {
      id: 604,
      title: "Реактивность и data binding",
      duration: "40 минут",
      videoUrl: "https://example.com/videos/vue3_reactivity.mp4",
      courseId: 6
    },
    {
      id: 605,
      title: "Директивы Vue.js",
      duration: "35 минут",
      videoUrl: "https://example.com/videos/vue3_directives.mp4",
      courseId: 6
    },
    {
      id: 606,
      title: "События и методы",
      duration: "30 минут",
      videoUrl: "https://example.com/videos/vue3_events.mp4",
      courseId: 6
    },
    {
      id: 607,
      title: "Работа с формами",
      duration: "40 минут",
      videoUrl: "https://example.com/videos/vue3_forms.mp4",
      courseId: 6
    },
    {
      id: 608,
      title: "Vue Router: навигация по страницам",
      duration: "50 минут",
      videoUrl: "https://example.com/videos/vue3_router.mp4",
      courseId: 6
    },
    {
      id: 609,
      title: "Vuex: управление состоянием",
      duration: "55 минут",
      videoUrl: "https://example.com/videos/vue3_vuex.mp4",
      courseId: 6
    },
    {
      id: 610,
      title: "Практический проект на Vue.js 3",
      duration: "1 час 15 минут",
      videoUrl: "https://example.com/videos/vue3_project.mp4",
      courseId: 6
    }
        ],
        "createdAt": "2023-06-01T08:00:00Z",
        "updatedAt": "2023-06-06T10:30:00Z"
      },
      {
        "id": 7,
        "title": "Тестирование ПО (QA)",
        "description": "Ручное и автоматизированное тестирование",
        "categoryId": 1,
        "price": 9900,
        "duration": "6 недель",
        "image": "https://via.placeholder.com/300?text=QA",
        "rating": 4.4,
        "level": "beginner",
        "instructorId": 107,
        lessons: [
           {
      id: 701,
      title: "Введение в тестирование",
      duration: "50 минут",
      videoUrl: "https://example.com/videos/qa_intro.mp4",
      courseId: 7
    },
    {
      id: 702,
      title: "Типы тестирования",
      duration: "45 минут",
      videoUrl: "https://example.com/videos/qa_types.mp4",
      courseId: 7
    },
    {
      id: 703,
      title: "Тест-дизайн и техники тестирования",
      duration: "55 минут",
      videoUrl: "https://example.com/videos/qa_test_design.mp4",
      courseId: 7
    },
    {
      id: 704,
      title: "Инструменты для тестирования",
      duration: "40 минут",
      videoUrl: "https://example.com/videos/qa_tools.mp4",
      courseId: 7
    },
    {
      id: 705,
      title: "Автоматизация тестирования",
      duration: "1 час",
      videoUrl: "https://example.com/videos/qa_automation.mp4",
      courseId: 7
    },
    {
      id: 706,
      title: "Тестирование API",
      duration: "50 минут",
      videoUrl: "https://example.com/videos/qa_api_testing.mp4",
      courseId: 7
    },
    {
      id: 707,
      title: "Управление дефектами и баг-трекинг",
      duration: "45 минут",
      videoUrl: "https://example.com/videos/qa_bug_tracking.mp4",
      courseId: 7
    },
    {
      id: 708,
      title: "Практический кейс по тестированию ПО",
      duration: "1 час 10 минут",
      videoUrl: "https://example.com/videos/qa_practice.mp4",
      courseId: 7
    }
        ],
        "createdAt": "2023-07-01T08:00:00Z",
        "updatedAt": "2023-07-06T10:30:00Z"
      },
      {
        "id": 8,
        "title": "UI/UX дизайн с нуля",
        "description": "Проектирование интерфейсов",
        "categoryId": 2,
        "price": 12900,
        "duration": "6 недель",
        "image": "https://via.placeholder.com/300?text=UI/UX",
        "rating": 4.6,
        "level": "beginner",
        "instructorId": 108,
          lessons: [
    {
      id: 801,
      title: "Основы UI/UX дизайна",
      duration: "1 час",
      videoUrl: "https://example.com/videos/uiux_intro.mp4",
      courseId: 8
    },
    {
      id: 802,
      title: "Исследование пользователей и анализ",
      duration: "50 минут",
      videoUrl: "https://example.com/videos/uiux_user_research.mp4",
      courseId: 8
    },
    {
      id: 803,
      title: "Прототипирование и вайрфреймы",
      duration: "55 минут",
      videoUrl: "https://example.com/videos/uiux_prototyping.mp4",
      courseId: 8
    },
    {
      id: 804,
      title: "Визуальный дизайн и цветовые схемы",
      duration: "45 минут",
      videoUrl: "https://example.com/videos/uiux_visual_design.mp4",
      courseId: 8
    },
    {
      id: 805,
      title: "Инструменты для UI/UX дизайнеров",
      duration: "40 минут",
      videoUrl: "https://example.com/videos/uiux_tools.mp4",
      courseId: 8
    },
    {
      id: 806,
      title: "Тестирование дизайна и юзабилити",
      duration: "50 минут",
      videoUrl: "https://example.com/videos/uiux_testing.mp4",
      courseId: 8
    },
    {
      id: 807,
      title: "Создание портфолио дизайнера",
      duration: "45 минут",
      videoUrl: "https://example.com/videos/uiux_portfolio.mp4",
      courseId: 8
    }
  ],
        "createdAt": "2023-08-01T08:00:00Z",
        "updatedAt": "2023-08-06T10:30:00Z"
      },
      {
        "id": 9,
        "title": "Figma для начинающих",
        "description": "Дизайн интерфейсов в Figma",
        "categoryId": 2,
        "price": 8900,
        "duration": "4 недели",
        "image": "https://via.placeholder.com/300?text=Figma",
        "rating": 4.8,
        "level": "beginner",
        "instructorId": 109,
 lessons: [
    {
      id: 901,
      title: "Работа с Figma",
      duration: "40 минут",
      videoUrl: "https://example.com/videos/figma.mp4",
      courseId: 9
    },
    {
      id: 902,
      title: "Создание первого проекта",
      duration: "35 минут",
      videoUrl: "https://example.com/videos/figma_project.mp4",
      courseId: 9
    },
    {
      id: 903,
      title: "Инструменты и панели Figma",
      duration: "45 минут",
      videoUrl: "https://example.com/videos/figma_tools.mp4",
      courseId: 9
    },
    {
      id: 904,
      title: "Прототипирование в Figma",
      duration: "50 минут",
      videoUrl: "https://example.com/videos/figma_prototyping.mp4",
      courseId: 9
    },
    {
      id: 905,
      title: "Совместная работа и комментарии",
      duration: "30 минут",
      videoUrl: "https://example.com/videos/figma_collaboration.mp4",
      courseId: 9
    }
  ],
        "createdAt": "2023-09-01T08:00:00Z",
        "updatedAt": "2023-09-06T10:30:00Z"
      },
      {
        "id": 10,
        "title": "Моушн-дизайн в After Effects",
        "description": "Анимация интерфейсов",
        "categoryId": 2,
        "price": 14900,
        "duration": "8 недель",
        "image": "https://via.placeholder.com/300?text=Motion",
        "rating": 4.7,
        "level": "intermediate",
        "instructorId": 110,
        lessons: [
    {
      id: 1001,
      title: "Введение в моушн-дизайн",
      duration: "1 час 10 минут",
      videoUrl: "https://example.com/videos/motion.mp4",
      courseId: 10
    },
    {
      id: 1002,
      title: "Основы интерфейса After Effects",
      duration: "55 минут",
      videoUrl: "https://example.com/videos/ae_interface.mp4",
      courseId: 10
    },
    {
      id: 1003,
      title: "Создание простых анимаций",
      duration: "1 час",
      videoUrl: "https://example.com/videos/ae_basic_animation.mp4",
      courseId: 10
    },
    {
      id: 1004,
      title: "Работа с ключевыми кадрами",
      duration: "50 минут",
      videoUrl: "https://example.com/videos/ae_keyframes.mp4",
      courseId: 10
    },
    {
      id: 1005,
      title: "Экспорт и оптимизация видео",
      duration: "40 минут",
      videoUrl: "https://example.com/videos/ae_export.mp4",
      courseId: 10
    }
  ],
        "createdAt": "2023-10-01T08:00:00Z",
        "updatedAt": "2023-10-06T10:30:00Z"
      },
      {
        "id": 11,
        "title": "3D-моделирование в Blender",
        "description": "Создание 3D-объектов",
        "categoryId": 2,
        "price": 16900,
        "duration": "10 недель",
        "image": "https://via.placeholder.com/300?text=Blender",
        "rating": 4.5,
        "level": "intermediate",
        "instructorId": 111,
        lessons: [
    {
      id: 1101,
      title: "Основы Blender",
      duration: "1 час 30 минут",
      videoUrl: "https://example.com/videos/blender.mp4",
      courseId: 11
    },
    {
      id: 1102,
      title: "Интерфейс и навигация",
      duration: "1 час",
      videoUrl: "https://example.com/videos/blender_interface.mp4",
      courseId: 11
    },
    {
      id: 1103,
      title: "Моделирование простых объектов",
      duration: "1 час 15 минут",
      videoUrl: "https://example.com/videos/blender_modeling.mp4",
      courseId: 11
    },
    {
      id: 1104,
      title: "Текстурирование и материалы",
      duration: "50 минут",
      videoUrl: "https://example.com/videos/blender_texturing.mp4",
      courseId: 11
    },
    {
      id: 1105,
      title: "Анимация в Blender",
      duration: "1 час",
      videoUrl: "https://example.com/videos/blender_animation.mp4",
      courseId: 11
    },
    {
      id: 1106,
      title: "Рендеринг и экспорт",
      duration: "45 минут",
      videoUrl: "https://example.com/videos/blender_rendering.mp4",
      courseId: 11
    }
  ],
        "createdAt": "2023-11-01T08:00:00Z",
        "updatedAt": "2023-11-06T10:30:00Z"
      },
      {
        "id": 12,
        "title": "Графический дизайн",
        "description": "Основы работы в Photoshop и Illustrator",
        "categoryId": 2,
        "price": 11900,
        "duration": "6 недель",
        "image": "https://via.placeholder.com/300?text=Graphic",
        "rating": 4.6,
        "level": "beginner",
        "instructorId": 112,
        lessons: [
         
    {
      "id": 1101,
      "title": "Основы Blender",
      "duration": "1 час 30 минут",
      "videoUrl": "https://example.com/videos/blender.mp4",
      "courseId": 11
    },
    {
      "id": 1102,
      "title": "Интерфейс и навигация",
      "duration": "1 час",
      "videoUrl": "https://example.com/videos/blender_interface.mp4",
      "courseId": 11
    },
    {
      "id": 1103,
      "title": "Моделирование простых объектов",
      "duration": "1 час 15 минут",
      "videoUrl": "https://example.com/videos/blender_modeling.mp4",
      "courseId": 11
    },
    {
      "id": 1104,
      "title": "Текстурирование и материалы",
      "duration": "50 минут",
      "videoUrl": "https://example.com/videos/blender_texturing.mp4",
      "courseId": 11
    },
    {
      "id": 1105,
      "title": "Анимация в Blender",
      "duration": "1 час",
      "videoUrl": "https://example.com/videos/blender_animation.mp4",
      "courseId": 11
    },
    {
      "id": 1106,
      "title": "Рендеринг и экспорт",
      "duration": "45 минут",
      "videoUrl": "https://example.com/videos/blender_rendering.mp4",
      "courseId": 11
    },
    {
      "id": 1107,
      "title": "Работа с освещением",
      "duration": "50 минут",
      "videoUrl": "https://example.com/videos/blender_lighting.mp4",
      "courseId": 11
    },
    {
      "id": 1108,
      "title": "Скульптинг в Blender",
      "duration": "1 час 20 минут",
      "videoUrl": "https://example.com/videos/blender_sculpting.mp4",
      "courseId": 11
    },
    {
      "id": 1109,
      "title": "Основы физики и симуляций",
      "duration": "1 час",
      "videoUrl": "https://example.com/videos/blender_physics.mp4",
      "courseId": 11
    },
    {
      "id": 1110,
      "title": "Создание финального проекта",
      "duration": "1 час 30 минут",
      "videoUrl": "https://example.com/videos/blender_final_project.mp4",
      "courseId": 11
    }
        ],
        "createdAt": "2023-12-01T08:00:00Z",
        "updatedAt": "2023-12-06T10:30:00Z"
      },

      {
        "id": 13,
        "title": "Английский для IT-специалистов",
        "description": "Технический английский для разработчиков",
        "categoryId": 3,
        "price": 9900,
        "duration": "8 недель",
        "image": "https://via.placeholder.com/300?text=IT+English",
        "rating": 4.7,
        "level": "intermediate",
        "instructorId": 113,
        lessons: [
        
    {
      "id": 1301,
      "title": "Введение в технический английский",
      "duration": "45 минут",
      "videoUrl": "https://example.com/videos/it_english_intro.mp4",
      "courseId": 13
    },
    {
      "id": 1302,
      "title": "Английский для программирования",
      "duration": "1 час",
      "videoUrl": "https://example.com/videos/programming_english.mp4",
      "courseId": 13
    },
    {
      "id": 1303,
      "title": "Общение в IT-командах",
      "duration": "50 минут",
      "videoUrl": "https://example.com/videos/team_communication.mp4",
      "courseId": 13
    },
    {
      "id": 1304,
      "title": "Чтение технической документации",
      "duration": "1 час 10 минут",
      "videoUrl": "https://example.com/videos/tech_docs_reading.mp4",
      "courseId": 13
    },
    {
      "id": 1305,
      "title": "Написание электронных писем",
      "duration": "40 минут",
      "videoUrl": "https://example.com/videos/email_writing.mp4",
      "courseId": 13
    },
    {
      "id": 1306,
      "title": "Презентации и доклады",
      "duration": "1 час",
      "videoUrl": "https://example.com/videos/presentations.mp4",
      "courseId": 13
    },
    {
      "id": 1307,
      "title": "Собеседование на IT-должность",
      "duration": "55 минут",
      "videoUrl": "https://example.com/videos/it_interview.mp4",
      "courseId": 13
    },
    {
      "id": 1308,
      "title": "Английский для DevOps и системных администраторов",
      "duration": "50 минут",
      "videoUrl": "https://example.com/videos/devops_english.mp4",
      "courseId": 13
    },
    {
      "id": 1309,
      "title": "Технический сленг и сокращения",
      "duration": "45 минут",
      "videoUrl": "https://example.com/videos/technical_slang.mp4",
      "courseId": 13
    },
    {
      "id": 1310,
      "title": "Итоговый тест и практика",
      "duration": "1 час 15 минут",
      "videoUrl": "https://example.com/videos/final_test.mp4",
      "courseId": 13
    }
        ],
        "createdAt": "2024-01-01T08:00:00Z",
        "updatedAt": "2024-01-06T10:30:00Z"
      },

      {
        "id": 14,
        "title": "Немецкий A1-B1",
        "description": "Базовый и средний уровень немецкого",
        "categoryId": 3,
        "price": 10900,
        "duration": "12 недель",
        "image": "https://via.placeholder.com/300?text=German",
        "rating": 4.5,
        "level": "beginner",
        "instructorId": 114,
        lessons: [
            {
      "id": 1401,
      "title": "Грамматика немецкого",
      "duration": "1 час",
      "videoUrl": "https://example.com/videos/german_grammar.mp4",
      "courseId": 14
    },
    {
      "id": 1402,
      "title": "Немецкий алфавит и произношение",
      "duration": "45 минут",
      "videoUrl": "https://example.com/videos/german_alphabet.mp4",
      "courseId": 14
    },
    {
      "id": 1403,
      "title": "Основы разговорной речи",
      "duration": "1 час 10 минут",
      "videoUrl": "https://example.com/videos/german_speaking.mp4",
      "courseId": 14
    },
    {
      "id": 1404,
      "title": "Чтение и понимание текста",
      "duration": "50 минут",
      "videoUrl": "https://example.com/videos/german_reading.mp4",
      "courseId": 14
    },
    {
      "id": 1405,
      "title": "Письмо и составление предложений",
      "duration": "1 час",
      "videoUrl": "https://example.com/videos/german_writing.mp4",
      "courseId": 14
    },
    {
      "id": 1406,
      "title": "Словарный запас для повседневного общения",
      "duration": "55 минут",
      "videoUrl": "https://example.com/videos/german_vocab.mp4",
      "courseId": 14
    },
    {
      "id": 1407,
      "title": "Немецкие предлоги и артикли",
      "duration": "40 минут",
      "videoUrl": "https://example.com/videos/german_prepositions.mp4",
      "courseId": 14
    },
    {
      "id": 1408,
      "title": "Диалоги и ситуации из жизни",
      "duration": "1 час 15 минут",
      "videoUrl": "https://example.com/videos/german_dialogues.mp4",
      "courseId": 14
    },
    {
      "id": 1409,
      "title": "Разговорные фразы и выражения",
      "duration": "45 минут",
      "videoUrl": "https://example.com/videos/german_phrases.mp4",
      "courseId": 14
    },
    {
      "id": 1410,
      "title": "Итоговое повторение и практика",
      "duration": "1 час",
      "videoUrl": "https://example.com/videos/german_review.mp4",
      "courseId": 14
    },
        ],
        "createdAt": "2024-02-01T08:00:00Z",
        "updatedAt": "2024-02-06T10:30:00Z"
      },
      {
        "id": 15,
        "title": "Французский для начинающих",
        "description": "Основы французского языка",
        "categoryId": 3,
        "price": 9900,
        "duration": "8 недель",
        "image": "https://via.placeholder.com/300?text=French",
        "rating": 4.4,
        "level": "beginner",
        "instructorId": 115,
        lessons: [
          
    {
      "id": 1501,
      "title": "Введение во французский язык",
      "duration": "50 минут",
      "videoUrl": "https://example.com/videos/french_intro.mp4",
      "courseId": 15
    },
    {
      "id": 1502,
      "title": "Произношение и алфавит",
      "duration": "45 минут",
      "videoUrl": "https://example.com/videos/french_pronunciation.mp4",
      "courseId": 15
    },
    {
      "id": 1503,
      "title": "Основы грамматики",
      "duration": "1 час",
      "videoUrl": "https://example.com/videos/french_grammar.mp4",
      "courseId": 15
    },
    {
      "id": 1504,
      "title": "Разговорные выражения и приветствия",
      "duration": "40 минут",
      "videoUrl": "https://example.com/videos/french_greetings.mp4",
      "courseId": 15
    },
    {
      "id": 1505,
      "title": "Числа и даты",
      "duration": "30 минут",
      "videoUrl": "https://example.com/videos/french_numbers.mp4",
      "courseId": 15
    },
    {
      "id": 1506,
      "title": "Составление предложений",
      "duration": "1 час",
      "videoUrl": "https://example.com/videos/french_sentences.mp4",
      "courseId": 15
    },
    {
      "id": 1507,
      "title": "Словарный запас для начинающих",
      "duration": "45 минут",
      "videoUrl": "https://example.com/videos/french_vocab.mp4",
      "courseId": 15
    },
    {
      "id": 1508,
      "title": "Диалоги на каждый день",
      "duration": "1 час 10 минут",
      "videoUrl": "https://example.com/videos/french_dialogues.mp4",
      "courseId": 15
    },
    {
      "id": 1509,
      "title": "Французские предлоги и артикли",
      "duration": "50 минут",
      "videoUrl": "https://example.com/videos/french_prepositions.mp4",
      "courseId": 15
    },
    {
      "id": 1510,
      "title": "Итоговое повторение и практика",
      "duration": "1 час",
      "videoUrl": "https://example.com/videos/french_review.mp4",
      "courseId": 15
    }
        ],
        "createdAt": "2024-03-01T08:00:00Z",
        "updatedAt": "2024-03-06T10:30:00Z"
      },
      {
        "id": 16,
        "title": "Итальянский язык A1-A2",
        "description": "Базовый уровень итальянского",
        "categoryId": 3,
        "price": 10900,
        "duration": "10 недель",
        "image": "https://via.placeholder.com/300?text=Italian",
        "rating": 4.6,
        "level": "beginner",
        "instructorId": 116,
        lessons: [
          {
      "id": 1601,
      "title": "Введение в итальянский язык",
      "duration": "50 минут",
      "videoUrl": "https://example.com/videos/italian_intro.mp4",
      "courseId": 16
    },
    {
      "id": 1602,
      "title": "Итальянский алфавит и произношение",
      "duration": "45 минут",
      "videoUrl": "https://example.com/videos/italian_alphabet.mp4",
      "courseId": 16
    },
    {
      "id": 1603,
      "title": "Простые фразы и приветствия",
      "duration": "40 минут",
      "videoUrl": "https://example.com/videos/italian_greetings.mp4",
      "courseId": 16
    },
    {
      "id": 1604,
      "title": "Основы грамматики: артикли и существительные",
      "duration": "1 час",
      "videoUrl": "https://example.com/videos/italian_grammar1.mp4",
      "courseId": 16
    },
    {
      "id": 1605,
      "title": "Глаголы и спряжение в настоящем времени",
      "duration": "1 час 10 минут",
      "videoUrl": "https://example.com/videos/italian_verbs.mp4",
      "courseId": 16
    },
    {
      "id": 1606,
      "title": "Числа, даты и время",
      "duration": "45 минут",
      "videoUrl": "https://example.com/videos/italian_numbers.mp4",
      "courseId": 16
    },
    {
      "id": 1607,
      "title": "Словарный запас по темам: семья, дом, работа",
      "duration": "1 час",
      "videoUrl": "https://example.com/videos/italian_vocab1.mp4",
      "courseId": 16
    },
    {
      "id": 1608,
      "title": "Составление предложений",
      "duration": "50 минут",
      "videoUrl": "https://example.com/videos/italian_sentences.mp4",
      "courseId": 16
    },
    {
      "id": 1609,
      "title": "Диалоги в повседневных ситуациях",
      "duration": "1 час",
      "videoUrl": "https://example.com/videos/italian_dialogues.mp4",
      "courseId": 16
    },
    {
      "id": 1610,
      "title": "Обобщение пройденного материала и тест",
      "duration": "1 час",
      "videoUrl": "https://example.com/videos/italian_review.mp4",
      "courseId": 16
    }
        ],
        "createdAt": "2024-04-01T08:00:00Z",
        "updatedAt": "2024-04-06T10:30:00Z"
      },
      {
        "id": 17,
        "title": "Маркетинг в социальных сетях",
        "description": "SMM и продвижение бренда",
        "categoryId": 4,
        "price": 13900,
        "duration": "6 недель",
        "image": "https://via.placeholder.com/300?text=SMM",
        "rating": 4.7,
        "level": "beginner",
        "instructorId": 117,
        lessons: [
            {
      "id": 1701,
      "title": "Введение в SMM",
      "duration": "45 минут",
      "videoUrl": "https://example.com/videos/smm_intro.mp4",
      "courseId": 17
    },
    {
      "id": 1702,
      "title": "Анализ целевой аудитории",
      "duration": "50 минут",
      "videoUrl": "https://example.com/videos/smm_audience.mp4",
      "courseId": 17
    },
    {
      "id": 1703,
      "title": "Платформы: Instagram, Facebook, TikTok",
      "duration": "1 час",
      "videoUrl": "https://example.com/videos/smm_platforms.mp4",
      "courseId": 17
    },
    {
      "id": 1704,
      "title": "Создание контент-стратегии",
      "duration": "55 минут",
      "videoUrl": "https://example.com/videos/smm_content_strategy.mp4",
      "courseId": 17
    },
    {
      "id": 1705,
      "title": "График публикаций и планирование",
      "duration": "40 минут",
      "videoUrl": "https://example.com/videos/smm_schedule.mp4",
      "courseId": 17
    },
    {
      "id": 1706,
      "title": "Визуальный стиль и оформление профиля",
      "duration": "50 минут",
      "videoUrl": "https://example.com/videos/smm_visuals.mp4",
      "courseId": 17
    },
    {
      "id": 1707,
      "title": "Продвижение и реклама в соцсетях",
      "duration": "1 час",
      "videoUrl": "https://example.com/videos/smm_ads.mp4",
      "courseId": 17
    },
    {
      "id": 1708,
      "title": "Работа с блогерами и партнёрами",
      "duration": "45 минут",
      "videoUrl": "https://example.com/videos/smm_collab.mp4",
      "courseId": 17
    },
    {
      "id": 1709,
      "title": "Аналитика и метрики эффективности",
      "duration": "50 минут",
      "videoUrl": "https://example.com/videos/smm_analytics.mp4",
      "courseId": 17
    },
    {
      "id": 1710,
      "title": "Создание успешной SMM-кампании: практика",
      "duration": "1 час 10 минут",
      "videoUrl": "https://example.com/videos/smm_practice.mp4",
      "courseId": 17
    }
        ],
        "createdAt": "2024-05-01T08:00:00Z",
        "updatedAt": "2024-05-06T10:30:00Z"
      },
      {
        "id": 18,
        "title": "SEO-продвижение сайта",
        "description": "Оптимизация и повышение трафика",
        "categoryId": 4,
        "price": 14900,
        "duration": "8 недель",
        "image": "https://via.placeholder.com/300?text=SEO",
        "rating": 4.8,
        "level": "intermediate",
        "instructorId": 118,
        lessons: [
           {
      "id": 1801,
      "title": "Введение в SEO",
      "duration": "45 минут",
      "videoUrl": "https://example.com/videos/seo_intro.mp4",
      "courseId": 18
    },
    {
      "id": 1802,
      "title": "Как работают поисковые системы",
      "duration": "50 минут",
      "videoUrl": "https://example.com/videos/seo_search_engines.mp4",
      "courseId": 18
    },
    {
      "id": 1803,
      "title": "Ключевые слова и семантическое ядро",
      "duration": "55 минут",
      "videoUrl": "https://example.com/videos/seo_keywords.mp4",
      "courseId": 18
    },
    {
      "id": 1804,
      "title": "On-page SEO: структура и контент",
      "duration": "1 час",
      "videoUrl": "https://example.com/videos/seo_onpage.mp4",
      "courseId": 18
    },
    {
      "id": 1805,
      "title": "Оптимизация заголовков и мета-тегов",
      "duration": "40 минут",
      "videoUrl": "https://example.com/videos/seo_meta_tags.mp4",
      "courseId": 18
    },
    {
      "id": 1806,
      "title": "Внутренняя перелинковка",
      "duration": "35 минут",
      "videoUrl": "https://example.com/videos/seo_links.mp4",
      "courseId": 18
    },
    {
      "id": 1807,
      "title": "Внешняя SEO-оптимизация и линкбилдинг",
      "duration": "1 час",
      "videoUrl": "https://example.com/videos/seo_backlinks.mp4",
      "courseId": 18
    },
    {
      "id": 1808,
      "title": "Мобильная оптимизация и Core Web Vitals",
      "duration": "45 минут",
      "videoUrl": "https://example.com/videos/seo_mobile.mp4",
      "courseId": 18
    },
    {
      "id": 1809,
      "title": "Техническое SEO",
      "duration": "1 час",
      "videoUrl": "https://example.com/videos/seo_technical.mp4",
      "courseId": 18
    },
    {
      "id": 1810,
      "title": "SEO-аудит сайта: практика",
      "duration": "1 час 10 минут",
      "videoUrl": "https://example.com/videos/seo_audit.mp4",
      "courseId": 18
    }
        ],
        "createdAt": "2024-06-01T08:00:00Z",
        "updatedAt": "2024-06-06T10:30:00Z"
      },
      {
        "id": 19,
        "title": "Контент-маркетинг",
        "description": "Создание эффективного контента",
        "categoryId": 4,
        "price": 12900,
        "duration": "5 недель",
        "image": "https://via.placeholder.com/300?text=Content",
        "rating": 4.6,
        "level": "beginner",
        "instructorId": 119,
        lessons: [
           {
      "id": 1901,
      "title": "Введение в контент-маркетинг",
      "duration": "40 минут",
      "videoUrl": "https://example.com/videos/content_intro.mp4",
      "courseId": 19
    },
    {
      "id": 1902,
      "title": "Целевая аудитория и анализ потребностей",
      "duration": "45 минут",
      "videoUrl": "https://example.com/videos/content_audience.mp4",
      "courseId": 19
    },
    {
      "id": 1903,
      "title": "Контент-стратегия: как её создать",
      "duration": "50 минут",
      "videoUrl": "https://example.com/videos/content_strategy.mp4",
      "courseId": 19
    },
    {
      "id": 1904,
      "title": "Типы контента и их назначение",
      "duration": "55 минут",
      "videoUrl": "https://example.com/videos/content_types.mp4",
      "courseId": 19
    },
    {
      "id": 1905,
      "title": "Планирование и календарь публикаций",
      "duration": "35 минут",
      "videoUrl": "https://example.com/videos/content_calendar.mp4",
      "courseId": 19
    },
    {
      "id": 1906,
      "title": "SEO для контента",
      "duration": "40 минут",
      "videoUrl": "https://example.com/videos/content_seo.mp4",
      "courseId": 19
    },
    {
      "id": 1907,
      "title": "Дистрибуция контента",
      "duration": "45 минут",
      "videoUrl": "https://example.com/videos/content_distribution.mp4",
      "courseId": 19
    },
    {
      "id": 1908,
      "title": "Аналитика и измерение эффективности",
      "duration": "50 минут",
      "videoUrl": "https://example.com/videos/content_analytics.mp4",
      "courseId": 19
    }
        ],
        "createdAt": "2024-07-01T08:00:00Z",
        "updatedAt": "2024-07-06T10:30:00Z"
      },
      {
        "id": 20,
        "title": "Email-маркетинг",
        "description": "Рассылки и автоматизация",
        "categoryId": 4,
        "price": 9900,
        "duration": "4 недели",
        "image": "https://via.placeholder.com/300?text=Email",
        "rating": 4.5,
        "level": "beginner",
        "instructorId": 120,
        lessons: [
           {
      "id": 2001,
      "title": "Введение в Email-маркетинг",
      "duration": "30 минут",
      "videoUrl": "https://example.com/videos/email_intro.mp4",
      "courseId": 20
    },
    {
      "id": 2002,
      "title": "Создание email-стратегии",
      "duration": "45 минут",
      "videoUrl": "https://example.com/videos/email_strategy.mp4",
      "courseId": 20
    },
    {
      "id": 2003,
      "title": "Платформы и инструменты рассылки",
      "duration": "40 минут",
      "videoUrl": "https://example.com/videos/email_tools.mp4",
      "courseId": 20
    },
    {
      "id": 2004,
      "title": "Создание эффективного письма",
      "duration": "50 минут",
      "videoUrl": "https://example.com/videos/email_design.mp4",
      "courseId": 20
    },
    {
      "id": 2005,
      "title": "Сегментация и персонализация",
      "duration": "35 минут",
      "videoUrl": "https://example.com/videos/email_segmentation.mp4",
      "courseId": 20
    },
    {
      "id": 2006,
      "title": "A/B тестирование писем",
      "duration": "40 минут",
      "videoUrl": "https://example.com/videos/email_abtest.mp4",
      "courseId": 20
    },
    {
      "id": 2007,
      "title": "Автоматизация email-рассылок",
      "duration": "45 минут",
      "videoUrl": "https://example.com/videos/email_automation.mp4",
      "courseId": 20
    },
    {
      "id": 2008,
      "title": "Метрики и аналитика email-кампаний",
      "duration": "50 минут",
      "videoUrl": "https://example.com/videos/email_metrics.mp4",
      "courseId": 20
    }
        ],
        "createdAt": "2024-08-01T08:00:00Z",
        "updatedAt": "2024-08-06T10:30:00Z"
 } ],
  instructors: [ {
        "id": 101,
        "name": "Алексей Иванов",
        "photo": "https://randomuser.me/api/portraits/men/11.jpg"
      },
      {
        "id": 102,
        "name": "Марина Петрова",
        "photo": "https://randomuser.me/api/portraits/women/22.jpg"
      },
      {
        "id": 103,
        "name": "Сергей Кузнецов",
        "photo": "https://randomuser.me/api/portraits/men/33.jpg"
      },
      {
        "id": 104,
        "name": "Елена Смирнова",
        "photo": "https://randomuser.me/api/portraits/women/44.jpg"
      },
      {
        "id": 105,
        "name": "Дмитрий Орлов",
        "photo": "https://randomuser.me/api/portraits/men/55.jpg"
      },
      {
        "id": 106,
        "name": "Ольга Новикова",
        "photo": "https://randomuser.me/api/portraits/women/66.jpg"
      },
      {
        "id": 107,
        "name": "Игорь Соколов",
        "photo": "https://randomuser.me/api/portraits/men/77.jpg"
      },
      {
        "id": 108,
        "name": "Наталья Крылова",
        "photo": "https://randomuser.me/api/portraits/women/88.jpg"
      },
      {
        "id": 109,
        "name": "Анна Васильева",
        "photo": "https://randomuser.me/api/portraits/women/99.jpg"
      },
      {
        "id": 110,
        "name": "Владимир Зайцев",
        "photo": "https://randomuser.me/api/portraits/men/12.jpg"
      },
      {
        "id": 111,
        "name": "Мария Орлова",
        "photo": "https://randomuser.me/api/portraits/women/13.jpg"
      },
      {
        "id": 112,
        "name": "Павел Михайлов",
        "photo": "https://randomuser.me/api/portraits/men/14.jpg"
      },
      {
        "id": 113,
        "name": "Ирина Федорова",
        "photo": "https://randomuser.me/api/portraits/women/15.jpg"
      },
      {
        "id": 114,
        "name": "Андрей Волков",
        "photo": "https://randomuser.me/api/portraits/men/16.jpg"
      },
      {
        "id": 115,
        "name": "Екатерина Гусева",
        "photo": "https://randomuser.me/api/portraits/women/17.jpg"
      },
      {
        "id": 116,
        "name": "Виктор Козлов",
        "photo": "https://randomuser.me/api/portraits/men/18.jpg"
      },
      {
        "id": 117,
        "name": "Оксана Лебедева",
        "photo": "https://randomuser.me/api/portraits/women/19.jpg"
      },
      {
        "id": 118,
        "name": "Роман Егоров",
        "photo": "https://randomuser.me/api/portraits/men/20.jpg"
      },
      {
        "id": 119,
        "name": "Татьяна Соколова",
        "photo": "https://randomuser.me/api/portraits/women/21.jpg"
      },
      {
        "id": 120,
        "name": "Константин Морозов",
        "photo": "https://randomuser.me/api/portraits/men/23.jpg"
      } ],
  categories: [ {
        "id": 1,
        "title": "Программирование"
      },
      {
        "id": 2,
        "title": "Дизайн"
      },
      {
        "id": 3,
        "title": "Языки"
      },
      {
        "id": 4,
        "title": "Маркетинг"
      }],
  
};

export default localData;
