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

const CourseSearch = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredCourses, setFilteredCourses] = useState(courses);
  const [selectedCourse, setSelectedCourse] = useState(null);

  useEffect(() => {
    const results = courses.filter((course) =>
      course.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredCourses(results);
  }, [searchTerm]);

  const handleCourseClick = (course) => {
    setSelectedCourse(course);
  };

  return (
    <div className="bg-gray-100 min-h-screen p-4">
      <div className="w-full max-w-2xl mx-auto">
        <h1 className="text-4xl font-semibold mb-4">
          University Courses
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-white p-4 shadow-lg rounded-lg">
            <input
              type="text"
              placeholder="Search for a course..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded-md focus:border-blue-500 focus:outline-none"
            />
            <ul className="mt-4 divide-y divide-gray-200">
              {filteredCourses.map((course) => (
                <li
                  key={course.id}
                  className="py-2 cursor-pointer hover:bg-gray-100"
                  onClick={() => handleCourseClick(course)}
                >
                  {course.name}
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-white p-4 shadow-lg rounded-lg">
            <CourseDetails course={selectedCourse} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseSearch;
