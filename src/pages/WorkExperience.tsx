import React from 'react';

const WorkExperience: React.FC = () => {
  const experience = [
    {
      designation: 'Senior Scientist',
      employer: 'ICAR-IASRI, New Delhi',
      payScale: 'Level 12',
      from: '02.07.2021',
      to: 'Till date',
      duration: 'Current Position'
    },
    {
      designation: 'Scientist (Sr. Scale)',
      employer: 'ICAR-IASRI, New Delhi',
      payScale: 'Rs. 15600–39100 (RGP 7000) -Level 11',
      from: '02.07.2016',
      to: '01.07.2021',
      duration: '5 years'
    },
    {
      designation: 'Scientist',
      employer: 'ICAR-Indian Agricultural Statistics Research Institute, New Delhi',
      payScale: 'Rs. 15600–39100 (RGP 6000)',
      from: '10.10.2012',
      to: '01.07.2016',
      duration: '3 years, 8 months, 22 days'
    },
    {
      designation: 'Scientist (FOCARS Training)',
      employer: 'ICAR (NAARM, Hyderabad)',
      payScale: 'Rs. 15600–39100 (RGP 6000)',
      from: '02.07.2012',
      to: '09.10.2012',
      duration: '3 months 7 days'
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold text-blue-900 mb-8">Work Experience</h2>

      <div className="bg-white rounded-lg shadow-md overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="bg-blue-700 text-white">
                <th className="px-4 py-3 text-left font-semibold">Designation</th>
                <th className="px-4 py-3 text-left font-semibold">Employer</th>
                <th className="px-4 py-3 text-left font-semibold">Pay Scale</th>
                <th className="px-4 py-3 text-left font-semibold">From</th>
                <th className="px-4 py-3 text-left font-semibold">To</th>
                <th className="px-4 py-3 text-left font-semibold">Duration</th>
              </tr>
            </thead>
            <tbody>
              {experience.map((exp, index) => (
                <tr key={index} className={index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
                  <td className="px-4 py-3 border-b font-semibold text-gray-700">{exp.designation}</td>
                  <td className="px-4 py-3 border-b text-gray-700">{exp.employer}</td>
                  <td className="px-4 py-3 border-b text-gray-700 text-sm">{exp.payScale}</td>
                  <td className="px-4 py-3 border-b text-gray-700">{exp.from}</td>
                  <td className="px-4 py-3 border-b text-gray-700">{exp.to}</td>
                  <td className="px-4 py-3 border-b text-gray-700">{exp.duration}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* <div className="mt-8 bg-blue-50 rounded-lg p-6 border-l-4 border-blue-600">
        <h3 className="font-semibold text-blue-900 mb-3">Career Overview</h3>
        <p className="text-gray-700 mb-4">
          I joined ICAR in 2012 as a Scientist after completing my Ph.D. and have progressively advanced through the ranks based on research contributions and project management experience. My career has been marked by continuous involvement in developing sampling methodologies, leading research projects, and contributing to agricultural statistics policy at national and international levels.
        </p>
        <p className="text-gray-700">
          Currently, as a Senior Scientist, I lead several ongoing projects related to agricultural census methodologies, crop yield estimation using remote sensing, and livestock statistics. My work spans from theoretical developments in statistical estimation to practical applications in field data collection and analysis.
        </p>
      </div> */}
    </div>
  );
};

export default WorkExperience;
