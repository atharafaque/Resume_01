import React from 'react';

const ProjectsCompleted: React.FC = () => {
  const projects = [
    'Biomass and Carbon Mapping Across Altitudinal Gradient of Major Darjeeling and Sikkim Himalayan Land Uses (Funded by Science and Engineering Research Board (SERB), DST) - Centre Principal Investigator',
    'Estimation of Finite Population Proportion from Geo-Referenced Survey Data (In-house) - Principal Investigator',
    'A study on Calibration Estimators under Adaptive Cluster Sampling (In-House) - Principal Investigator',
    'Calibration Estimators under Two Stage Sampling Design (In-House) - Principal Investigator',
    'Study on improving methods for estimating crop area, yield and production under mixed, repeated and continuous cropping (FAO-sponsored) - Consultant and Co-Principal Investigator',
    'Study on developing Guidelines for estimating post-harvest losses of horticultural crops, livestock products and fish (FAO-funded)',
    'Study on field testing of developed guidelines on post-harvest losses',
    'Technical Guidance on sampling strategy for 2019/20 Lao Agriculture Census (FAO-Laos)',
    'Pilot study on measurement of private food grains stock (FAO-India)',
    'Study on reviewing Food Loss Index (FLI) estimates for India (FAO-India)',
    'Planning and data analysis of FSSAI and NeTSCoFAN surveys (Co-Principal Investigator)',
    'Evaluation of Improvement of Agricultural Statistics Scheme',
    'Evaluation of Comprehensive Scheme for Studying Cost of Cultivation of Principal Crops',
    'Integrated Sampling Methodology for Crop Yield Estimation using Remote Sensing',
    'Study to test developed methodology for horticultural crops: CHAMAN Program',
    'Pilot study for developing State level estimates of crop area and production',
    'Pilot Study for Estimation of Seed, Feed and Wastage Ratios',
    'Investigation of Causes of Divergence between Official and Trade Estimates of Jute Production',
    'Testing and validation of alternative methodology in Haryana state',
    'Technical Guidance in Implementation of Methodology for Horticultural Crops in Haryana',
    'Detection of outliers in presence of masking (In-House)',
    'Development of Robust Estimator by Integrating Data from Different Surveys (In-house)'
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold text-blue-900 mb-8">Completed Projects</h2>

      <div className="bg-white rounded-lg shadow-md p-6">
        <div className="space-y-4">
          {projects.map((project, index) => (
            <div key={index} className="flex items-start pb-4 border-b last:border-b-0">
              <span className="bg-green-600 text-white rounded-full w-7 h-7 flex items-center justify-center font-bold mr-4 flex-shrink-0 text-sm">{index + 1}</span>
              <p className="text-gray-700 leading-relaxed">{project}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-8 grid md:grid-cols-2 gap-6">
        <div className="bg-green-50 rounded-lg p-6 border-l-4 border-green-600">
          <h3 className="font-semibold text-green-900 mb-3">Project Completion Summary</h3>
          <ul className="space-y-2 text-gray-700">
            <li className="flex items-start">
              <span className="text-green-600 mr-3 font-bold">•</span>
              <span>22 Major Research Projects Completed</span>
            </li>
            <li className="flex items-start">
              <span className="text-green-600 mr-3 font-bold">•</span>
              <span>Multiple National and International Collaborations</span>
            </li>
            <li className="flex items-start">
              <span className="text-green-600 mr-3 font-bold">•</span>
              <span>All Reports Submitted and Accepted</span>
            </li>
          </ul>
        </div>
        <div className="bg-orange-50 rounded-lg p-6 border-l-4 border-orange-600">
          <h3 className="font-semibold text-orange-900 mb-3">Key Achievements</h3>
          <ul className="space-y-2 text-gray-700">
            <li className="flex items-start">
              <span className="text-orange-600 mr-3 font-bold">•</span>
              <span>Contributed to multiple country census methodologies</span>
            </li>
            <li className="flex items-start">
              <span className="text-orange-600 mr-3 font-bold">•</span>
              <span>Developed internationally recognized methodologies</span>
            </li>
            <li className="flex items-start">
              <span className="text-orange-600 mr-3 font-bold">•</span>
              <span>Numerous Publications and Technical Reports</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ProjectsCompleted;
