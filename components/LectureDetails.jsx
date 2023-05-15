export default function LectureDetails({ lecture, translation }) {
  return lecture ? (
    <div className="p-4 border border-gray-300 rounded-md">
      <h2 className="text-xl mb-2">{lecture.name}</h2>
      <p>{lecture.description}</p>
      <p>
        <strong>{translation.instructor}:</strong>{' '}
        {lecture.instructor}
      </p>
      <p>
        <strong>{translation.credits}:</strong> {lecture.credits}
      </p>
      <p>
        <strong>{translation.prerequisites}:</strong>{' '}
        {lecture.prerequisites.length > 0
          ? lecture.prerequisites.join(', ')
          : 'None'}
      </p>
    </div>
  ) : (
    <p>{translation.selectPrompt}</p>
  );
}
