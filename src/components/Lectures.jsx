'use client';
import { useState, useEffect } from 'react';
import CourseSelection from './CourseSelection';
import LectureDetails from './LectureDetails';
import LectureList from './LectureList';
import translations from '@/lib/translations';
import lectures from '@/lib/data';

export default function Lectures() {
  const [language, setLanguage] = useState('de');
  const [search, setSearch] = useState('');
  const [selectedLectureId, setSelectedLectureId] = useState(null);
  const [lectureList, setLectureList] = useState(lectures[language]);

  useEffect(() => {
    setLectureList(lectures[language]);
  }, [language]);

  const selectedLecture = lectureList.find(
    (lecture) => lecture.id === selectedLectureId
  );

  return (
    <div className="container mx-auto p-4">
      <div className="mb-4">
        <CourseSelection translation={translations[language]} />
      </div>
      <div className="flex justify-between items-start mb-8">
        <h1 className="text-4xl font-bold">
          {translations[language].title}
        </h1>
        <div>
          <select
            value={language}
            onChange={(e) => setLanguage(e.target.value)}
            className="p-1 border border-gray-300 rounded-md"
          >
            <option value="en">EN</option>
            <option value="de">DE</option>
            <option value="fr">FR</option>
          </select>
        </div>
      </div>
      <input
        type="text"
        placeholder={translations[language].searchPlaceholder}
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="cursor-pointer mb-8 p-2 border border-gray-300 focus:outline-none focus:border-red-600 rounded-md w-full"
      />
      <div className="flex justify-between space-x-8">
        <div className="w-1/2">
          <LectureList
            lectures={lectureList.filter((lecture) =>
              lecture.name
                .toLowerCase()
                .includes(search.toLowerCase())
            )}
            selectedLectureId={selectedLectureId}
            onSelectLecture={setSelectedLectureId}
          />
        </div>
        <div className="w-1/2">
          <LectureDetails
            lecture={selectedLecture}
            translation={translations[language]}
          />
        </div>
      </div>
    </div>
  );
}
