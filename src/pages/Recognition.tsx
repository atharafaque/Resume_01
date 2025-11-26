import React from 'react';

const Recognition: React.FC = () => {
  // Utility to extract the most recent year (4 digits between 1900–2099)
  const extractYear = (text: string): number => {
    const match = text.match(/\b(20\d{2}|19\d{2})\b/);
    return match ? parseInt(match[0]) : 0;
  };

  const recognition = [
    {
      category: 'International Roles',
      items: [
        'Resource Person: Visited National Institute of Statistics of Rwanda (April 2016) for CAPI Software Training',
        'Resource Person: Visited Jamaica (June 2016) to Supervise Data Collection Work under FAO Project',
        'Consultant: FAO-Laos funded project on Sampling Methodology for 2019/20 Lao Agriculture Census',
        'Sampling Expert in Asia Pacific: Invited by FAORAP Bangkok for Virtual Meeting (August 2021)'
      ]
    },
    {
      category: 'Expert Nominations',
      items: [
        'Nominated as Member of Evaluation Committee at zonal level (South Zone) for Digital Crop Survey Hackathon (January 2024)',
        'Nominated as Expert Member of Sub-committee for evaluation of proposals for GP level Yield Estimation using Technology for Non-Cereals under PMFBY',
        'Nominated by DES as Member of Subgroup Committee for examining feasibility of single series CCEs'
      ]
    },
    {
      category: 'Invited Speaker',
      items: [
        '74th Annual Conference of Indian Society of Agricultural Statistics (ISAS) - "Generation of Horticultural Statistics in India" (February 2024)',
        'Invited Guest Lecture on "Statistical Measures for Sampling and Accuracy Assessment" - Indian Institute of Remote Sensing, Dehradun (October 2023)',
        'Invited Lecture on "Horticulture Statistics" - ISS Probationers Training Programme (February 2019)',
        '18th National Conference of Agricultural Research Statisticians - "National Priorities in Agricultural Statistics" (December 2016)',
        'National Workshop on Improvement of Agricultural Statistics - Directorate of Economics & Statistics (January 2017)'
      ]
    },
    {
      category: 'Academic Leadership',
      items: [
        'Member Secretary: Hall Management Committee for 8th International Conference on Agricultural Statistics (ICAS-VIII), New Delhi (November 2019)',
        'Elected Executive Member: Indian Society of Agricultural Statistics (ISAS) (2015-2020)'
      ]
    },
    {
      category: 'Conference Participation',
      items: [
        'Participated in several national and international conferences',
        'Presenter at major agricultural statistics conferences',
        'Active participant in research community forums'
      ]
    }
  ];

  // Sort items within each category by descending year (recent first)
  const sortedRecognition = recognition.map(section => ({
    ...section,
    items: [...section.items].sort((a, b) => extractYear(b) - extractYear(a))
  }));

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold text-blue-900 mb-8">International & National Recognition</h2>

      <div className="space-y-6">
        {sortedRecognition.map((section, index) => (
          <div key={index} className="bg-white rounded-lg shadow-md p-6 border-l-4 border-blue-600">
            <h3 className="text-lg font-semibold text-blue-800 mb-4 pb-2 border-b-2 border-blue-300">
              {section.category}
            </h3>
            <ul className="space-y-3">
              {section.items.map((item, itemIndex) => (
                <li key={itemIndex} className="flex items-start">
                  <span className="text-blue-600 mr-3 font-bold text-lg">•</span>
                  <span className="text-gray-700 leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="mt-8 grid md:grid-cols-2 gap-6">
        <div className="bg-green-50 rounded-lg p-6 border-l-4 border-green-600">
          <h3 className="font-semibold text-green-900 mb-3">Key Roles & Responsibilities</h3>
          <ul className="space-y-2 text-gray-700 text-sm">
            <li className="flex items-start">
              <span className="text-green-600 mr-2 font-bold">✓</span>
              <span>Faculty Member at IARI Postgraduate School</span>
            </li>
            <li className="flex items-start">
              <span className="text-green-600 mr-2 font-bold">✓</span>
              <span>Research Guide for Agricultural Statistics</span>
            </li>
            <li className="flex items-start">
              <span className="text-green-600 mr-2 font-bold">✓</span>
              <span>Principal/Co-Principal Investigator (22+ Projects)</span>
            </li>
            <li className="flex items-start">
              <span className="text-green-600 mr-2 font-bold">✓</span>
              <span>Consultant for International Projects</span>
            </li>
          </ul>
        </div>

        <div className="bg-orange-50 rounded-lg p-6 border-l-4 border-orange-600">
          <h3 className="font-semibold text-orange-900 mb-3">International Presence</h3>
          <ul className="space-y-2 text-gray-700 text-sm">
            <li className="flex items-start">
              <span className="text-orange-600 mr-2 font-bold">→</span>
              <span>FAO Collaborations (Multiple Countries)</span>
            </li>
            <li className="flex items-start">
              <span className="text-orange-600 mr-2 font-bold">→</span>
              <span>Regional Expert - Asia Pacific</span>
            </li>
            <li className="flex items-start">
              <span className="text-orange-600 mr-2 font-bold">→</span>
              <span>International Training & Supervision</span>
            </li>
            <li className="flex items-start">
              <span className="text-orange-600 mr-2 font-bold">→</span>
              <span>Cross-Border Research Projects</span>
            </li>
          </ul>
        </div>
      </div>

      {/* <div className="mt-8 bg-purple-50 rounded-lg p-6 border-l-4 border-purple-600">
        <h3 className="font-semibold text-purple-900 mb-3">Research Impact</h3>
        <p className="text-gray-700 mb-4">
          My work has contributed to improving agricultural statistics methodologies at national and international levels. The research methodologies developed have been adopted by government agencies and international organizations including FAO. Training and capacity building initiatives have reached statisticians and researchers across multiple countries.
        </p>
        <p className="text-gray-700">
          Recognition from peers through awards, speaking invitations, and expert nominations reflects the contribution made to the field of agricultural statistics and sample survey methodology. Active participation in national and international forums ensures continuous engagement with the research community and dissemination of findings.
        </p>
      </div> */}
    </div>
  );
};

export default Recognition;
