import { useState, useEffect } from 'react';
import CourseDetails from './CourseDetails';

const coursesByLanguage = {
  en: [
    {
      id: 1,
      name: 'Introduction to Computer Science',
      description:
        'An introductory course covering the fundamentals of computer science, programming, and problem-solving techniques.',
      instructor: 'Prof. John Doe',
      credits: 3,
      prerequisites: [],
    },
    {
      id: 2,
      name: 'Data Structures and Algorithms',
      description:
        'A comprehensive study of data structures and algorithms, including their design, analysis, and implementation.',
      instructor: 'Dr. Jane Smith',
      credits: 4,
      prerequisites: ['Introduction to Computer Science'],
    },
    {
      id: 3,
      name: 'Operating Systems',
      description:
        'An exploration of operating system concepts, including process management, memory management, file systems, and system security.',
      instructor: 'Dr. Alice Johnson',
      credits: 4,
      prerequisites: ['Introduction to Computer Science'],
    },
    {
      id: 4,
      name: 'Computer Networks',
      description:
        'A study of computer networking principles, protocols, and technologies with a focus on the Internet and related systems.',
      instructor: 'Prof. Bob Brown',
      credits: 4,
      prerequisites: ['Introduction to Computer Science'],
    },
    {
      id: 5,
      name: 'Software Engineering',
      description:
        'An introduction to software engineering methodologies, tools, and best practices for designing, implementing, and maintaining high-quality software.',
      instructor: 'Prof. Mary Davis',
      credits: 4,
      prerequisites: ['Introduction to Computer Science'],
    },
    {
      id: 6,
      name: 'Artificial Intelligence',
      description:
        'A survey of artificial intelligence concepts, techniques, and applications, including knowledge representation, search, machine learning, and robotics.',
      instructor: 'Dr. Richard Wilson',
      credits: 4,
      prerequisites: ['Data Structures and Algorithms'],
    },
    {
      id: 7,
      name: 'Machine Learning',
      description:
        'An in-depth study of machine learning algorithms and techniques, including supervised, unsupervised, and reinforcement learning approaches.',
      instructor: 'Dr. Susan Clark',
      credits: 4,
      prerequisites: [
        'Data Structures and Algorithms',
        'Probability and Statistics',
      ],
    },
    {
      id: 8,
      name: 'Computer Graphics',
      description:
        'A course focused on the principles and techniques of computer graphics, including 2D and 3D rendering, modeling, and animation.',
      instructor: 'Prof. James Taylor',
      credits: 4,
      prerequisites: ['Data Structures and Algorithms'],
    },
  ],
  de: [
    {
      id: 1,
      name: 'Einführung in die Informatik',
      description:
        'Ein einführender Kurs, der die Grundlagen der Informatik, Programmierung und Problemlösungstechniken behandelt.',
      instructor: 'Prof. John Doe',
      credits: 3,
      prerequisites: [],
    },
    {
      id: 2,
      name: 'Datenstrukturen und Algorithmen',
      description:
        'Eine umfassende Untersuchung von Datenstrukturen und Algorithmen, einschließlich ihrer Entwurf, Analyse und Implementierung.',
      instructor: 'Dr. Jane Smith',
      credits: 4,
      prerequisites: ['Einführung in die Informatik'],
    },
    {
      id: 3,
      name: 'Betriebssysteme',
      description:
        'Eine Untersuchung von Betriebssystemkonzepten, einschließlich Prozessverwaltung, Speicherverwaltung, Dateisysteme und Systemsicherheit.',
      instructor: 'Dr. Alice Johnson',
      credits: 4,
      prerequisites: ['Einführung in die Informatik'],
    },
    {
      id: 4,
      name: 'Rechnernetze',
      description:
        'Eine Untersuchung der Prinzipien, Protokolle und Technologien von Rechnernetzen mit Schwerpunkt auf dem Internet und verwandten Systemen.',
      instructor: 'Prof. Bob Brown',
      credits: 4,
      prerequisites: ['Einführung in die Informatik'],
    },
    {
      id: 5,
      name: 'Softwaretechnik',
      description:
        'Eine Einführung in Methoden, Werkzeuge und bewährte Verfahren der Softwaretechnik zur Gestaltung, Implementierung und Wartung von qualitativ hochwertiger Software.',
      instructor: 'Prof. Mary Davis',
      credits: 4,
      prerequisites: ['Einführung in die Informatik'],
    },
    {
      id: 6,
      name: 'Künstliche Intelligenz',
      description:
        'Eine Übersicht über Konzepte, Techniken und Anwendungen der künstlichen Intelligenz, einschließlich Wissensrepräsentation, Suche, maschinelles Lernen und Robotik.',
      instructor: 'Dr. Richard Wilson',
      credits: 4,
      prerequisites: ['Datenstrukturen und Algorithmen'],
    },
    {
      id: 7,
      name: 'Maschinelles Lernen',
      description:
        'Eine eingehende Untersuchung von Algorithmen und Techniken des maschinellen Lernens, einschließlich überwachter, unüberwachter und bestärkender Lernansätze.',
      instructor: 'Dr. Susan Clark',
      credits: 4,
      prerequisites: [
        'Datenstrukturen und Algorithmen',
        'Wahrscheinlichkeit und Statistik',
      ],
    },
    {
      id: 8,
      name: 'Computergrafik',
      description:
        'Ein Kurs, der sich auf die Prinzipien und Techniken der Computergrafik konzentriert, einschließlich 2D- und 3D-Rendering, Modellierung und Animation.',
      instructor: 'Prof. James Taylor',
      credits: 4,
      prerequisites: ['Datenstrukturen und Algorithmen'],
    },
  ],
  fr: [
    {
      id: 1,
      name: "Introduction à l'informatique",
      description:
        "Un cours d'introduction couvrant les fondamentaux de l'informatique, de la programmation et des techniques de résolution de problèmes.",
      instructor: 'Prof. John Doe',
      credits: 3,
      prerequisites: [],
    },
    {
      id: 2,
      name: 'Structures de données et algorithmes',
      description:
        'Une étude approfondie des structures de données et des algorithmes, y compris leur conception, analyse et mise en œuvre.',
      instructor: 'Dr. Jane Smith',
      credits: 4,
      prerequisites: ["Introduction à l'informatique"],
    },
    {
      id: 3,
      name: "Systèmes d'exploitation",
      description:
        "Une exploration des concepts des systèmes d'exploitation, y compris la gestion des processus, la gestion de la mémoire, les systèmes de fichiers et la sécurité du système.",
      instructor: 'Dr. Alice Johnson',
      credits: 4,
      prerequisites: ["Introduction à l'informatique"],
    },
    {
      id: 4,
      name: 'Réseaux informatiques',
      description:
        "Une étude des principes, protocoles et technologies de réseaux informatiques, avec un accent sur l'Internet et les systèmes connexes.",
      instructor: 'Prof. Bob Brown',
      credits: 4,
      prerequisites: ["Introduction à l'informatique"],
    },
    {
      id: 5,
      name: 'Génie logiciel',
      description:
        'Une introduction aux méthodologies, outils et meilleures pratiques du génie logiciel pour concevoir, mettre en œuvre et maintenir un logiciel de haute qualité.',
      instructor: 'Prof. Mary Davis',
      credits: 4,
      prerequisites: ["Introduction à l'informatique"],
    },
    {
      id: 6,
      name: 'Intelligence artificielle',
      description:
        "Un aperçu des concepts, techniques et applications de l'intelligence artificielle, y compris la représentation des connaissances, la recherche, l'apprentissage automatique et la robotique.",
      instructor: 'Dr. Richard Wilson',
      credits: 4,
      prerequisites: ['Structures de données et algorithmes'],
    },
    {
      id: 7,
      name: 'Apprentissage automatique',
      description:
        "Une étude approfondie des algorithmes et techniques d'apprentissage automatique, y compris les approches d'apprentissage supervisé, non supervisé et par renforcement.",
      instructor: 'Dr. Susan Clark',
      credits: 4,
      prerequisites: [
        'Structures de données et algorithmes',
        'Probabilités et statistiques',
      ],
    },
    {
      id: 8,
      name: 'Graphiques informatiques',
      description:
        "Un cours axé sur les principes et techniques de graphiques informatiques, y compris le rendu 2D et 3D, la modélisation et l'animation.",
      instructor: 'Prof. James Taylor',
      credits: 4,
      prerequisites: ['Structures de données et algorithmes'],
    },
  ],
};

const translations = {
  en: {
    searchPlaceholder: 'Search courses...',
    instructor: 'Instructor',
    credits: 'Credits',
    prerequisites: 'Prerequisites',
    selectPrompt: 'Select a course to see its details.',
  },
  de: {
    searchPlaceholder: 'Kurse durchsuchen...',
    instructor: 'Dozent',
    credits: 'Kredits',
    prerequisites: 'Voraussetzungen',
    selectPrompt: 'Wählen Sie einen Kurs aus, um Details zu sehen.',
  },
  fr: {
    searchPlaceholder: 'Chercher des cours...',
    instructor: 'Instructeur',
    credits: 'Crédits',
    prerequisites: 'Prérequis',
    selectPrompt: 'Sélectionnez un cours pour voir ses détails.',
  },
};

const CourseSearch = () => {
  const [language, setLanguage] = useState('de');
  const [search, setSearch] = useState('');
  const [filteredCourses, setFilteredCourses] = useState(
    coursesByLanguage[language]
  );
  const [selectedCourse, setSelectedCourse] = useState(null);
  const [courseList, setCourseList] = useState(
    coursesByLanguage[language]
  );

  useEffect(() => {
    const result = courseList.filter((course) =>
      course.name.toLowerCase().includes(search.toLowerCase())
    );
    setFilteredCourses(result);
  }, [search, courseList]);

  useEffect(() => {
    setCourseList(coursesByLanguage[language]);

    if (selectedCourse) {
      const updatedSelectedCourse = coursesByLanguage[language].find(
        (course) => course.id === selectedCourse.id
      );
      setSelectedCourse(updatedSelectedCourse);
    }
  }, [language, selectedCourse]);

  const handleCourseClick = (course) => {
    setSelectedCourse(course);
  };

  return (
    <div className="bg-gray-100 min-h-screen p-4">
      <div className="w-full max-w-2xl mx-auto">
        <div className="flex justify-end">
          <select
            value={language}
            onChange={(e) => setLanguage(e.target.value)}
            className="border border-gray-300 rounded-md p-2 focus:border-blue-500 focus:outline-none"
          >
            <option value="de">Deutsch</option>
            <option value="en">English</option>
            <option value="fr">Français</option>
          </select>
        </div>
        <h1 className="text-4xl font-semibold mb-4">
          {language === 'English'
            ? 'University Courses'
            : 'Universitätskurse'}
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-white p-4 shadow-lg rounded-lg">
            <input
              className="border border-gray-300 rounded-md p-2 focus:border-blue-500 focus:outline-none"
              type="text"
              placeholder={translations[language].searchPlaceholder}
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
            <ul className="mt-4 divide-y divide-gray-200">
              {filteredCourses.map((course) => (
                <li
                  key={course.id}
                  className={`py-2 cursor-pointer hover:bg-gray-100 ${
                    selectedCourse && selectedCourse.id === course.id
                      ? 'bg-blue-100'
                      : ''
                  }`}
                  onClick={() => handleCourseClick(course)}
                >
                  {course.name}
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-white p-4 shadow-lg rounded-lg">
            <CourseDetails
              course={selectedCourse}
              translation={translations[language]}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseSearch;
