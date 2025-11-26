import React from 'react';

const ResearchGuide: React.FC = () => {
  const chairmanStudents = [
    { name: 'Mr. Rakesh Chhalotre', roll: '12610', level: 'Ph.D.', subject: 'Agril. Statistics', status: 'Ongoing' },
    { name: 'Mr. Bappa Saha', roll: '21416', level: 'M.Sc.', subject: 'Agril. Statistics', status: 'Completed' },
    { name: 'Mr. Akarsh Singh', roll: '21599', level: 'M.Sc.', subject: 'Agril. Statistics', status: 'Completed' },
    { name: 'Mr. Umesh T.H.', roll: '21847', level: 'M.Sc.', subject: 'Agril. Statistics', status: 'Completed' },
    { name: 'Ms. Punuru Lingamma', roll: '21855', level: 'M.Sc.', subject: 'Agril. Statistics', status: 'Completed' }
  ];

  const coChairmanStudents = [
    { name: 'Mr. Veershetty', roll: '11998', level: 'Ph.D.', subject: 'Agril. Statistics', status: 'Ongoing' },
    { name: 'Ms. Moumita Baishya', roll: '11714', level: 'Ph.D.', subject: 'Agril. Statistics', status: 'Completed' },
    { name: 'Mr. Swarup Bera', roll: '21849', level: 'M.Sc.', subject: 'Agril. Statistics', status: 'Completed' }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold text-blue-900 mb-8">Research Guide</h2>

      <div className="space-y-8">
        <div className="bg-white rounded-lg shadow-md p-6">
          <h3 className="text-xl font-semibold text-blue-800 mb-4">Chairman of Students</h3>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-blue-100">
                  <th className="px-4 py-3 text-left font-semibold text-gray-700">Name</th>
                  <th className="px-4 py-3 text-left font-semibold text-gray-700">Roll No.</th>
                  <th className="px-4 py-3 text-left font-semibold text-gray-700">Level</th>
                  <th className="px-4 py-3 text-left font-semibold text-gray-700">Subject</th>
                  <th className="px-4 py-3 text-left font-semibold text-gray-700">Status</th>
                </tr>
              </thead>
              <tbody>
                {chairmanStudents.map((student, index) => (
                  <tr key={index} className={index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
                    <td className="px-4 py-3 border-b text-gray-700">{student.name}</td>
                    <td className="px-4 py-3 border-b text-gray-700">{student.roll}</td>
                    <td className="px-4 py-3 border-b text-gray-700">{student.level}</td>
                    <td className="px-4 py-3 border-b text-gray-700">{student.subject}</td>
                    <td className="px-4 py-3 border-b text-gray-700 text-green-600 font-semibold">{student.status}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6">
          <h3 className="text-xl font-semibold text-blue-800 mb-4">Co-Chairman of Students</h3>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-blue-100">
                  <th className="px-4 py-3 text-left font-semibold text-gray-700">Name</th>
                  <th className="px-4 py-3 text-left font-semibold text-gray-700">Roll No.</th>
                  <th className="px-4 py-3 text-left font-semibold text-gray-700">Level</th>
                  <th className="px-4 py-3 text-left font-semibold text-gray-700">Subject</th>
                  <th className="px-4 py-3 text-left font-semibold text-gray-700">Status</th>
                </tr>
              </thead>
              <tbody>
                {coChairmanStudents.map((student, index) => (
                  <tr key={index} className={index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
                    <td className="px-4 py-3 border-b text-gray-700">{student.name}</td>
                    <td className="px-4 py-3 border-b text-gray-700">{student.roll}</td>
                    <td className="px-4 py-3 border-b text-gray-700">{student.level}</td>
                    <td className="px-4 py-3 border-b text-gray-700">{student.subject}</td>
                    <td className="px-4 py-3 border-b text-gray-700 text-green-600 font-semibold">{student.status}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* <div className="bg-green-50 rounded-lg p-6 border-l-4 border-green-600">
          <h3 className="font-semibold text-green-900 mb-3">Supervision Summary</h3>
          <ul className="space-y-2 text-gray-700">
            <li className="flex items-start">
              <span className="text-green-600 mr-3 font-bold">•</span>
              <span>5 M.Sc. students guided (Chairman)</span>
            </li>
            <li className="flex items-start">
              <span className="text-green-600 mr-3 font-bold">•</span>
              <span>1 Ph.D. student (Chairman) - Ongoing</span>
            </li>
            <li className="flex items-start">
              <span className="text-green-600 mr-3 font-bold">•</span>
              <span>1 Ph.D. student (Co-Chairman) - Ongoing</span>
            </li>
            <li className="flex items-start">
              <span className="text-green-600 mr-3 font-bold">•</span>
              <span>1 Ph.D. student (Co-Chairman) - Completed</span>
            </li>
            <li className="flex items-start">
              <span className="text-green-600 mr-3 font-bold">•</span>
              <span>1 M.Sc. student (Co-Chairman) - Completed</span>
            </li>
          </ul>
        </div> */}
      </div>
    </div>
  );
};

export default ResearchGuide;
