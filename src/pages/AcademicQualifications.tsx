import React from 'react';

const AcademicQualifications: React.FC = () => {
  const qualifications = [
    {
      level: 'Ph.D.',
      degree: 'Ph.D.',
      institute: 'ICAR-Indian Agricultural Research Institute, New Delhi, India',
      year: '2014',
      subject: 'Agricultural Statistics',
      fellowship: 'IARI Fellowship',
      marks: '8.52/10.0'
    },
    {
      level: 'Masters',
      degree: 'M.Sc.',
      institute: 'ICAR-IARI, New Delhi, India',
      year: '2009',
      subject: 'Agricultural Statistics',
      fellowship: 'ICAR JRF Fellowship',
      marks: '8.43/10.0'
    },
    {
      level: 'Bachelors',
      degree: 'B.Sc. (Ag.) Hons.',
      institute: 'Bidhan Chandra Krishi Viswavidyalaya, Nadia, West Bengal, India',
      year: '2007',
      subject: 'Agriculture',
      fellowship: 'Institute Merit Fellowship',
      marks: '7.57/10.0'
    },
    {
      level: 'Higher Secondary',
      degree: 'Higher Secondary',
      institute: 'West Bengal Council of Higher Secondary Education, West Bengal, India',
      year: '2003',
      subject: '-',
      fellowship: '-',
      marks: '81%'
    },
    {
      level: 'Matriculation',
      degree: 'Matriculation',
      institute: 'West Bengal Council of Higher Education, West Bengal, India',
      year: '2001',
      subject: '-',
      fellowship: '-',
      marks: '78.4%'
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold text-blue-900 mb-8">Academic Qualifications</h2>

      <div className="bg-white rounded-lg shadow-md overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="bg-blue-700 text-white">
                <th className="px-4 py-3 text-left font-semibold">Level</th>
                <th className="px-4 py-3 text-left font-semibold">Degree</th>
                <th className="px-4 py-3 text-left font-semibold">Institute/University</th>
                <th className="px-4 py-3 text-left font-semibold">Year</th>
                <th className="px-4 py-3 text-left font-semibold">Subject(s)</th>
                <th className="px-4 py-3 text-left font-semibold">Fellowship</th>
                <th className="px-4 py-3 text-left font-semibold">Marks</th>
              </tr>
            </thead>
            <tbody>
              {qualifications.map((qual, index) => (
                <tr key={index} className={index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
                  <td className="px-4 py-3 border-b font-semibold text-gray-700">{qual.level}</td>
                  <td className="px-4 py-3 border-b text-gray-700">{qual.degree}</td>
                  <td className="px-4 py-3 border-b text-gray-700">{qual.institute}</td>
                  <td className="px-4 py-3 border-b text-gray-700">{qual.year}</td>
                  <td className="px-4 py-3 border-b text-gray-700">{qual.subject}</td>
                  <td className="px-4 py-3 border-b text-gray-700">{qual.fellowship}</td>
                  <td className="px-4 py-3 border-b text-gray-700 font-semibold">{qual.marks}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="mt-8 bg-blue-50 rounded-lg p-6 border-l-4 border-blue-600">
        <h3 className="font-semibold text-blue-900 mb-3">Academic Achievements</h3>
        <ul className="space-y-2 text-gray-700">
          <li className="flex items-start">
            <span className="text-blue-600 mr-3 font-bold">•</span>
            <span>1st Rank in IARI Ph.D. Entrance Examination (2009)</span>
          </li>
          <li className="flex items-start">
            <span className="text-blue-600 mr-3 font-bold">•</span>
            <span>4th Rank in ICAR JRF exam AIEEA-PG (2007)</span>
          </li>
          <li className="flex items-start">
            <span className="text-blue-600 mr-3 font-bold">•</span>
            <span>Institute Merit Fellowship for B.Sc. (Ag.) studies</span>
          </li>
          <li className="flex items-start">
            <span className="text-blue-600 mr-3 font-bold">•</span>
            <span>ICAR JRF Fellowship for M.Sc. studies</span>
          </li>
          <li className="flex items-start">
            <span className="text-blue-600 mr-3 font-bold">•</span>
            <span>IARI Fellowship for Ph.D. studies</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default AcademicQualifications;
