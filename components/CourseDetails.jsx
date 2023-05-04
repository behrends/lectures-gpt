const CourseDetails = ({ course }) => {
  if (!course) {
    return (
      <div className="italic">
        Select a course to see its details.
      </div>
    );
  }

  return (
    <div className="mt-4">
      <h2 className="text-2xl font-semibold mb-2">{course.name}</h2>
      <p>{course.description}</p>
      <p className="mt-2">
        <strong>Instructor:</strong> {course.instructor}
      </p>
      <p>
        <strong>Credits:</strong> {course.credits}
      </p>
      <p>
        <strong>Prerequisites:</strong>{' '}
        {course.prerequisites.length > 0
          ? course.prerequisites.join(', ')
          : 'None'}
      </p>
    </div>
  );
};

export default CourseDetails;
