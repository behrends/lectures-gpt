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
          className={`p-4 border rounded mb-2 ${
            selectedLectureId === lecture.id ? 'bg-blue-100' : ''
          }`}
        >
          {lecture.name}
        </li>
      ))}
    </ul>
  );
}
