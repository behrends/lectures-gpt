export default function LectureList({
  lectures,
  selectedLectureId,
  onSelectLecture,
}) {
  return (
    <ul>
      {lectures.map((lecture) => (
        <li
          key={lecture.id}
          onClick={() => onSelectLecture(lecture.id)}
          className={`p-4 border-2 rounded-lg mb-4 cursor-pointer ${
            selectedLectureId === lecture.id
              ? 'border-red-600'
              : 'border-gray-300'
          }`}
        >
          <h2 className="font-bold text-lg">{lecture.name}</h2>
        </li>
      ))}
    </ul>
  );
}
