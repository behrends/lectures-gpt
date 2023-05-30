import { useState } from 'react';

export default function CourseSelection({ translation }) {
  const [selectedCourse, setSelectedCourse] = useState('');

  const courses = [
    'WWI21A',
    'TIF21A',
    'WWI21B',
    'TIF21B',
    'WWI22A',
    'TIF22A',
    'WWI22B',
    'TIF22B',
    'WWI23A',
    'TIF23A',
    'WWI23B',
    'TIF23B',
  ];

  const handleChange = (event) => {
    setSelectedCourse(event.target.value);
  };

  return (
    <div>
      <select value={selectedCourse} onChange={handleChange}>
        <option value="">{translation.selectCourse}</option>
        {courses.map((course, index) => (
          <option key={index} value={course}>
            {course}
          </option>
        ))}
      </select>
    </div>
  );
}
