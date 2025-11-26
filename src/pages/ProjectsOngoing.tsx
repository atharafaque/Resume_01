import React from 'react';

const ProjectsOngoing: React.FC = () => {
  const projects = [
    'Pilot Study to develop improved methodology for cost of cultivation of principal crops in India (Funded by Economics, Statistics and Evaluation Division (MSP Unit), Department of Agriculture & Farmers Welfare, Ministry of Agriculture & Farmers Welfare, Govt. of India) - Principal Investigator',
    'Pilot study for development of sampling methodology for cost of cultivation of minor crops in India (Co-Principal Investigator)',
    'Pilot study to investigate the causes of high cost of cultivation of mandated principal crops in Maharashtra (Co-Principal Investigator)',
    'Sampling procedure for selection of representative sample for food grain quality check for DCP and Non-DCP system (Co-Principal Investigator)',
    'Development of Intelligent decision support system for precision agriculture under "Network Program on Precision Agriculture (NePPA)" (Co-Principal Investigator)',
    'Integrated Sample Survey Solution for major Livestock products (Co-Principal Investigator)',
    'Agri-Drone in ICAR: ICAR-IASRI Component (Co-Principal Investigator)',
    'Development of Methodology for CCE on Squash and Methodological Improvement for CCE on Cashewnut, Pineapple and Arecanut in Meghalaya (Co-Principal Investigator)',
    'Machine learning models in complex surveys for crop yield estimation (In-house) (Co-Principal Investigator)',
    'Development of survey-weighted and AI-based survey-weighted impact assessment techniques (In-house) (Co-Principal Investigator)'
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold text-blue-900 mb-8">On-going Projects</h2>

      <div className="bg-white rounded-lg shadow-md p-6">
        <div className="space-y-4">
          {projects.map((project, index) => (
            <div key={index} className="flex items-start pb-4 border-b last:border-b-0">
              <span className="bg-blue-600 text-white rounded-full w-7 h-7 flex items-center justify-center font-bold mr-4 flex-shrink-0 text-sm">{index + 1}</span>
              <p className="text-gray-700 leading-relaxed">{project}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-8 bg-blue-50 rounded-lg p-6 border-l-4 border-blue-600">
        <h3 className="font-semibold text-blue-900 mb-3">Project Portfolio</h3>
        <p className="text-gray-700 mb-4">
          Currently leading or co-leading 10 active research projects spanning diverse areas including:
        </p>
        <ul className="space-y-2 text-gray-700">
          <li className="flex items-start">
            <span className="text-blue-600 mr-3 font-bold">•</span>
            <span>Cost of Cultivation Studies</span>
          </li>
          <li className="flex items-start">
            <span className="text-blue-600 mr-3 font-bold">•</span>
            <span>Food Quality Sampling</span>
          </li>
          <li className="flex items-start">
            <span className="text-blue-600 mr-3 font-bold">•</span>
            <span>Precision Agriculture and Drone Technology</span>
          </li>
          <li className="flex items-start">
            <span className="text-blue-600 mr-3 font-bold">•</span>
            <span>Livestock Statistics</span>
          </li>
          <li className="flex items-start">
            <span className="text-blue-600 mr-3 font-bold">•</span>
            <span>Machine Learning in Agricultural Statistics</span>
          </li>
          <li className="flex items-start">
            <span className="text-blue-600 mr-3 font-bold">•</span>
            <span>Horticultural Crop Estimation</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default ProjectsOngoing;
