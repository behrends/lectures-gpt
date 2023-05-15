function CourseDetails({ course, translation }) {
  if (!course) {
    return <p>{translation.selectPrompt}</p>;
  }

  return (
    <div className="p-4 border border-gray-300 rounded-md">
      <h2 className="text-xl font-semibold mb-2">{course.name}</h2>
      <p>
        {translation.instructor}: {course.instructor}
      </p>
      <p>
        {translation.credits}: {course.credits}
      </p>
      <p>
        {translation.prerequisites}: {course.prerequisites.join(', ')}
      </p>
      <p>{course.description}</p>
    </div>
  );
}

export default CourseDetails;
