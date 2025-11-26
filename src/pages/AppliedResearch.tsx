import React from 'react';

const AppliedResearch: React.FC = () => {
  const research = [
    'Developed a methodology for estimating crop area, yield and production under mixed, repeated and continuous cropping for FAO. Assisted in implementation of CAPI software.',
    'Developed a sampling methodology for 2019/20 Lao Agriculture Census. Expected to help users implement cost-effective data collection and improved estimation methods.',
    'Developed "Food Loss Index (FLI) for India" based on previous national level post-harvest losses surveys under SDG 12.3.1 (FAO-funded project).',
    'Developed sampling methodologies for estimation of quantitative harvest and post harvest losses of horticultural crops, livestock and fish.',
    'Assisted in development of Mobile Assisted Personnel Interview (MAPI) Software for data collection using handheld devices.',
    'Developed methodology for Estimation of Seed, Feed and Wastage Ratios for Major Food Grains under CSO, MOS&PI funded project.',
    'Developed methodology for estimation of private food grains stock at farm level aligned with Input Survey of Agriculture Census.',
    'Assisted in implementation of CAPI under "Study to develop improved methodology for area and production of horticultural crops".',
    'Developed crop variety discrimination methodology using Hyperspectral Remote Sensing data from wheat fields.',
    'Developed integrated sampling methodology for crop yield estimation using remote sensing, field surveys and weather parameters for crop insurance.',
    'Carried out evaluation of Agricultural Statistics Scheme and Comprehensive Scheme for studying Cost of Cultivation in multiple States.',
    'Assisted in development of eLISS Web Portal and data collection Android App for Integrated Sample Survey Solution.'
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold text-blue-900 mb-8">Applied Research</h2>

      <div className="bg-white rounded-lg shadow-md p-6">
        <div className="space-y-4">
          {research.map((item, index) => (
            <div key={index} className="flex items-start pb-4 border-b last:border-b-0">
              <span className="text-blue-600 font-bold mr-4 flex-shrink-0 text-lg">{index + 1}.</span>
              <p className="text-gray-700 leading-relaxed">{item}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-8 grid md:grid-cols-2 gap-6">
        <div className="bg-orange-50 rounded-lg p-6 border-l-4 border-orange-600">
          <h3 className="font-semibold text-orange-900 mb-3">National Collaboration</h3>
          <ul className="space-y-2 text-gray-700 text-sm">
            <li>• Ministry of Agriculture & Farmers Welfare, GoI</li>
            <li>• Directorate of Economics & Statistics</li>
            <li>• Central Statistical Office (CSO)</li>
            <li>• Multiple State Governments</li>
            <li>• FSSAI</li>
          </ul>
        </div>
        <div className="bg-purple-50 rounded-lg p-6 border-l-4 border-purple-600">
          <h3 className="font-semibold text-purple-900 mb-3">International Collaboration</h3>
          <ul className="space-y-2 text-gray-700 text-sm">
            <li>• FAO (Rome) - Multiple Projects</li>
            <li>• FAO-Laos</li>
            <li>• FAO-India</li>
            <li>• Government of Rwanda</li>
            <li>• Government of Jamaica</li>
          </ul>
        </div>
      </div>

      <div className="mt-8 bg-green-50 rounded-lg p-6 border-l-4 border-green-600">
        <h3 className="font-semibold text-green-900 mb-3">Key Application Areas</h3>
        <ul className="space-y-2 text-gray-700">
          <li className="flex items-start">
            <span className="text-green-600 mr-3 font-bold">•</span>
            <span>Agricultural Census Methodologies</span>
          </li>
          <li className="flex items-start">
            <span className="text-green-600 mr-3 font-bold">•</span>
            <span>Crop Area and Yield Estimation</span>
          </li>
          <li className="flex items-start">
            <span className="text-green-600 mr-3 font-bold">•</span>
            <span>Post-Harvest Loss Assessment</span>
          </li>
          <li className="flex items-start">
            <span className="text-green-600 mr-3 font-bold">•</span>
            <span>Sustainable Development Goals Indicator Monitoring</span>
          </li>
          <li className="flex items-start">
            <span className="text-green-600 mr-3 font-bold">•</span>
            <span>Remote Sensing Integration in Agricultural Statistics</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default AppliedResearch;
