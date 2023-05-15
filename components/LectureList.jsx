export default function LectureList({
  lectures,
  selectedLecture,
  onSelectLecture,
}) {
  return (
    <div className="mb-4">
      {lectures.map((lecture) => (
        <div
          key={lecture.id}
          className={`p-4 border border-gray-300 rounded-md mb-2 ${
            selectedLecture === lecture ? 'bg-gray-200' : ''
          }`}
          onClick={() => onSelectLecture(lecture)}
        >
          {lecture.name}
        </div>
      ))}
    </div>
  );
}
