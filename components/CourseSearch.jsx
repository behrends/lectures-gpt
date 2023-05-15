import { useState, useEffect } from 'react';
import CourseDetails from './CourseDetails';

const courses = [
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
];

const coursesGerman = [
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
];

const CourseSearch = () => {
  const [search, setSearch] = useState('');
  const [filteredCourses, setFilteredCourses] = useState(courses);
  const [selectedCourse, setSelectedCourse] = useState(null);
  const [language, setLanguage] = useState('English');
  const [courseList, setCourseList] = useState(courses);

  useEffect(() => {
    const result = courseList.filter((course) =>
      course.name.toLowerCase().includes(search.toLowerCase())
    );
    setFilteredCourses(result);
  }, [search, courseList]);

  useEffect(() => {
    if (language === 'English') {
      setCourseList(courses);
    } else if (language === 'Deutsch') {
      setCourseList(coursesGerman);
    }

    if (selectedCourse) {
      const updatedSelectedCourse = courseList.find(
        (course) => course.id === selectedCourse.id
      );
      setSelectedCourse(updatedSelectedCourse);
    }
  }, [language, courseList, selectedCourse]);

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
            <option value="English">English</option>
            <option value="Deutsch">Deutsch</option>
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
              type="text"
              placeholder={
                language === 'English'
                  ? 'Search courses...'
                  : 'Kurse suchen...'
              }
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full border border-gray-300 rounded-md p-2 focus:border-blue-500 focus:outline-none"
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
              language={language}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseSearch;
