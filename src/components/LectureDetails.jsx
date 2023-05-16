export default function LectureDetails({ lecture, translation }) {
  if (!lecture) return <div>Please select a lecture</div>;

  return (
    <div className="p-4 border-2 rounded-lg border-red-600 bg-white">
      <h2 className="font-bold text-2xl mb-4">{lecture.name}</h2>
      <p className="mb-2">{lecture.description}</p>
      <p className="mb-2">
        <span className="font-bold">{translation.instructor}: </span>
        {lecture.instructor}
      </p>
      <p className="mb-2">
        <span className="font-bold">{translation.credits}: </span>
        {lecture.credits}
      </p>
      <p className="mb-2">
        <span className="font-bold">
          {translation.prerequisites}:{' '}
        </span>
        {lecture.prerequisites.join(', ') || 'None'}
      </p>
    </div>
  );
}
