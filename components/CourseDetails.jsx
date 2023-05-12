const CourseDetails = ({ course, language }) => {
  if (!course) {
    return (
      <div>
        <p className="text-xl font-semibold">
          {language === 'English'
            ? 'Please select a course'
            : 'Bitte wählen Sie einen Kurs'}
        </p>
      </div>
    );
  }

  return (
    <div>
      <h2 className="text-2xl font-semibold">{course.name}</h2>
      <p>{course.description}</p>
      <p>
        {language === 'English' ? 'Instructor:' : 'Dozent:'}{' '}
        {course.instructor}
      </p>
      <p>
        {language === 'English' ? 'Credits:' : 'Credits:'}{' '}
        {course.credits}
      </p>
      {course.prerequisites.length > 0 && (
        <>
          <p>
            {language === 'English'
              ? 'Prerequisites:'
              : 'Voraussetzungen:'}
          </p>
          <ul>
            {course.prerequisites.map((prerequisite, index) => (
              <li key={index}>{prerequisite}</li>
            ))}
          </ul>
        </>
      )}
    </div>
  );
};

export default CourseDetails;
