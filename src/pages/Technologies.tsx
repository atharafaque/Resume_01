import React from 'react';

const Technologies: React.FC = () => {
  const technologies = [
    {
      title: 'Sampling methodology of calibration estimation',
      description: 'Sampling methodology of calibration estimation of finite population parameters under two stage sampling and adaptive cluster sampling design',
      code: 'ICAR-AED-IASRI-Methodology-2024-042',
      year: '2024',
      lead: 'Ankur Biswas',
      associates: 'Kaustav Aditya, Raju Kumar, Deepak Singh, Pradip Basak'
    },
    {
      title: 'Modified sampling methodology for horticultural crops',
      description: 'Modified sampling methodology for estimation of area and production of horticultural crops',
      code: 'ICAR-AED-IASRI-Methodology-2024-027',
      year: '2024',
      lead: 'Tauqueer Ahmad',
      associates: 'Prachi Misra Sahoo, Ankur Biswas, Kaustav Aditya, Deepak Singh, Raju Kumar'
    },
    {
      title: 'Sampling methodologies for food loss measurement',
      description: 'Sampling methodologies for food loss measurement in horticultural crops, livestock and fish',
      code: 'ICAR-AED-IASRI-Technology-2023-030',
      year: '2020',
      lead: 'Tauqueer Ahmad',
      associates: 'Anil Rai, Prachi Misra Sahoo, Ankur Biswas'
    },
    {
      title: 'Sampling methodology for agriculture census',
      description: 'Sampling methodology for agriculture census (2021)',
      code: 'ICAR-AED-IASRI-Technology-2023-029',
      year: '2021',
      lead: 'Dr. Tauqueer Ahmad',
      associates: 'Prachi Misra Sahoo, Anil Rai, Ankur Biswas'
    },
    {
      title: 'eLISS Web Portal and eLISS App',
      description: 'eLISS Web Portal and eLISS App for integrated sample survey solutions',
      code: 'ICAR-AED-IASRI-Technology-2023-023',
      year: '2021',
      lead: 'Prachi Misra Sahoo',
      associates: 'Tauqueer Ahmad, Anil Rai, Ankur Biswas, Chirag Vasudev'
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold text-blue-900 mb-8">Technologies & Methodologies</h2>
      <p className="text-gray-700 mb-6">ICAR-Certified Technologies and Methodologies</p>

      <div className="space-y-6">
        {technologies.map((tech, index) => (
          <div key={index} className="bg-white rounded-lg shadow-md p-6 border-l-4 border-blue-600">
            <h3 className="text-lg font-semibold text-blue-800 mb-2">{tech.title}</h3>
            <p className="text-gray-700 mb-3">{tech.description}</p>
            <div className="grid md:grid-cols-2 gap-4 text-sm">
              <div>
                <p className="font-semibold text-gray-700">Technology Code</p>
                <p className="text-blue-600">{tech.code}</p>
              </div>
              <div>
                <p className="font-semibold text-gray-700">Year</p>
                <p className="text-gray-700">{tech.year}</p>
              </div>
              <div>
                <p className="font-semibold text-gray-700">Lead Developer</p>
                <p className="text-gray-700">{tech.lead}</p>
              </div>
              <div>
                <p className="font-semibold text-gray-700">Associate Developers</p>
                <p className="text-gray-700 text-xs">{tech.associates}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-8 bg-blue-50 rounded-lg p-6 border-l-4 border-blue-600">
        <h3 className="font-semibold text-blue-900 mb-3">About ICAR Technologies</h3>
        <p className="text-gray-700">
          These are officially certified technologies and methodologies recognized by the Indian Council of Agricultural Research (ICAR). They represent innovative approaches developed through rigorous research and have been validated for practical application in agricultural statistics, sample surveys, and data collection methodologies.
        </p>
      </div>
    </div>
  );
};

export default Technologies;
