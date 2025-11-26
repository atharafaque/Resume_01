import React from 'react';

const CoursesTaught: React.FC = () => {
  const coursesByYear = [
    {
      year: 'Academic Year 2023-24',
      courses: [
        'Advanced Sampling Techniques (STAT 613)',
        'Sampling Techniques (STAT 564)',
        'Statistical Inference (STAT 562)',
        'Modelling and Simulation (MCA-603)',
        'Basic Mathematics-I (MATH 101) (for B.Tech. students)'
      ]
    },
    {
      year: 'Academic Year 2022-23',
      courses: [
        'Advanced Sampling Techniques (STAT 613)',
        'Advanced Statistical Computing (STAT 601)',
        'Sampling Techniques (STAT 564)',
        'Statistical Inference (STAT 562)',
        'Modelling and Simulation (MCA-603)'
      ]
    },
    {
      year: 'Academic Year 2021-22',
      courses: [
        'Advanced Sampling Techniques (STAT 614)',
        'Advanced Statistical Computing (STAT 601)',
        'Sampling Techniques (STAT 565)',
        'Statistical Inference (STAT 562)',
        'Modelling and Simulation (CA-571)'
      ]
    },
    {
      year: 'Academic Year 2020-21',
      courses: [
        'Advanced Statistical Computing (STAT 601)',
        'Statistical Inference (STAT 562)',
        'Sampling Techniques (STAT 565)',
        'Data Analysis using Statistical Packages (STAT 531)',
        'Advanced Data Analysis using Statistical Software (AS 574)',
        'Modelling and Simulation (CA-571)'
      ]
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold text-blue-900 mb-8">Courses Taught</h2>

      <div className="space-y-8">
        {coursesByYear.map((item, index) => (
          <div key={index} className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-lg font-semibold text-blue-800 mb-4 pb-2 border-b-2 border-blue-300">{item.year}</h3>
            <ul className="space-y-2">
              {item.courses.map((course, courseIndex) => (
                <li key={courseIndex} className="flex items-start text-gray-700">
                  <span className="text-blue-600 mr-3 font-bold">•</span>
                  <span>{course}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="mt-8 bg-blue-50 rounded-lg p-6 border-l-4 border-blue-600">
        <h3 className="font-semibold text-blue-900 mb-3">Teaching Profile</h3>
        <p className="text-gray-700 mb-4">
          As a faculty member of the P.G. School at IARI, New Delhi and Senior Certificate Course instructor at ICAR-IASRI, I have been teaching specialized courses in Agricultural Statistics and Computer Applications to M.Sc./Ph.D. students.
        </p>
        <p className="text-gray-700">
          My teaching experience covers advanced statistical methodologies, sampling techniques, statistical inference, computational methods, and modeling approaches applied to agricultural research problems.
        </p>
      </div>
    </div>
  );
};

export default CoursesTaught;
