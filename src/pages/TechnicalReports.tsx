import React from 'react';

const TechnicalReports: React.FC = () => {
  const trainingManuals = [
    {
      title: 'Data Analysis and Interpretation. Reference Manual (Vol.-I & Vol.-II)',
      authors: 'Ajit, Ankur Biswas and U.K. Pradhan',
      year: '2024',
      pages: '217 + 198'
    },
    {
      title: 'Data Analysis and Interpretation. Reference Manual (Vol.-I & Vol.-II)',
      authors: 'Ajit, Ankur Biswas and P.K. Meher',
      year: '2023',
      pages: '240 + 258'
    },
    {
      title: 'Sampling Techniques on Crop Cutting Experiment. Training Reference Manual',
      authors: 'Tauqueer Ahmad, Prachi Misra Sahoo and Ankur Biswas',
      year: '2020',
      pages: '184'
    },
    {
      title: 'Recent Advances in Agricultural Surveys: Remote Sensing and GIS Applications',
      authors: 'Prachi Misra Sahoo, Tauqueer Ahmad and Ankur Biswas',
      year: '2019',
      pages: '193'
    },
    {
      title: 'Recent Advances in Sample Surveys and Survey Data Analysis Using Statistical Software (Vol I & II)',
      authors: 'Kaustav Aditya and Ankur Biswas',
      year: '2017',
      pages: '296 + 402'
    }
  ];

  const policyPapers = [
    {
      title: 'Evaluation of Improvement of Agricultural Statistics Scheme',
      authors: 'Ahmad, T., Sahoo, P.M., Biswas, A., Kumar, R., Aditya, K., Kumari, V. and Basak, P.',
      year: '2023',
      type: 'Technical Bulletin I.A.S.R.I./T.B.-01/2023'
    },
    {
      title: 'Evaluation of Comprehensive Scheme for studying Cost of Cultivation of Principal Crops',
      authors: 'Ahmad, T., Sahoo, P.M., Biswas, A., Kumar, R. and Singh, D.',
      year: '2023',
      type: 'Technical Bulletin I.A.S.R.I./T.B.-02/2023'
    },
    {
      title: 'Guidelines on the measurement of harvest and post-harvest losses',
      authors: 'Ahmad, T., Rai, A., Sahoo, P.M., Biswas, A. and Singh, M.',
      year: '2020',
      type: 'FAO Field test reports'
    },
    {
      title: 'Methodology for Estimation of Crop Area and Crop Yield under Mixed and Continuous Cropping',
      authors: 'Sud, U.C., Ahmad, T., Gupta, V.K., Chandra, H., Sahoo, P.M., Aditya, K., Singh, M. and Biswas, A.',
      year: '2017',
      type: 'Technical Report Series: GO-21-2017, FAO'
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold text-blue-900 mb-8">Technical Reports & Training Manuals</h2>

      <div className="space-y-8">
        <div className="bg-white rounded-lg shadow-md p-6">
          <h3 className="text-xl font-semibold text-blue-800 mb-6 pb-3 border-b-2 border-blue-300">Training Manuals</h3>
          <div className="space-y-4">
            {trainingManuals.map((manual, index) => (
              <div key={index} className="pb-4 border-b last:border-b-0">
                <h4 className="font-semibold text-gray-800 mb-2">{manual.title}</h4>
                <p className="text-gray-700 text-sm"><span className="font-semibold">Authors:</span> {manual.authors}</p>
                <p className="text-gray-700 text-sm"><span className="font-semibold">Year:</span> {manual.year}</p>
                <p className="text-gray-700 text-sm"><span className="font-semibold">Pages:</span> {manual.pages}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6">
          <h3 className="text-xl font-semibold text-blue-800 mb-6 pb-3 border-b-2 border-blue-300">Policy Papers & Technical Bulletins</h3>
          <div className="space-y-4">
            {policyPapers.map((paper, index) => (
              <div key={index} className="pb-4 border-b last:border-b-0">
                <h4 className="font-semibold text-gray-800 mb-2">{paper.title}</h4>
                <p className="text-gray-700 text-sm"><span className="font-semibold">Authors:</span> {paper.authors}</p>
                <p className="text-gray-700 text-sm"><span className="font-semibold">Year:</span> {paper.year}</p>
                <p className="text-gray-700 text-sm"><span className="font-semibold">Type:</span> {paper.type}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6">
          <h3 className="text-xl font-semibold text-blue-800 mb-6 pb-3 border-b-2 border-blue-300">R Packages</h3>
          <div className="space-y-4">
            <div className="pb-4 border-b">
              <h4 className="font-semibold text-gray-800 mb-2">SpPOP: Generation of Spatial Population under Different Levels of Relationships among Variables</h4>
              <p className="text-gray-700 text-sm"><span className="font-semibold">Authors:</span> Nobin Chandra Paul, Anil Rai, Ankur Biswas, Tauqueer Ahmad and Prachi Misra Sahoo</p>
              <p className="text-gray-700 text-sm"><span className="font-semibold">Downloads:</span> 13000+ (till April 10, 2025)</p>
            </div>
            <div className="pb-4 border-b">
              <h4 className="font-semibold text-gray-800 mb-2">MARSGWR: A Hybrid Spatial Model for Capturing Spatially Varying Relationships</h4>
              <p className="text-gray-700 text-sm"><span className="font-semibold">Authors:</span> Nobin Chandra Paul, Anil Rai, Ankur Biswas, Tauqueer Ahmad and others</p>
              <p className="text-gray-700 text-sm"><span className="font-semibold">Downloads:</span> 4500+ (till April 10, 2025)</p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-800 mb-2">GWRLASSO: A Hybrid Model for Spatial Prediction Through Local Regression</h4>
              <p className="text-gray-700 text-sm"><span className="font-semibold">Authors:</span> Nobin Chandra Paul, Anil Rai, Ankur Biswas, Tauqueer Ahmad and others</p>
              <p className="text-gray-700 text-sm"><span className="font-semibold">Downloads:</span> 3400+ (till April 10, 2025)</p>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-8 bg-blue-50 rounded-lg p-6 border-l-4 border-blue-600">
        <h3 className="font-semibold text-blue-900 mb-3">Knowledge Dissemination</h3>
        <ul className="space-y-2 text-gray-700">
          <li className="flex items-start">
            <span className="text-blue-600 mr-3 font-bold">•</span>
            <span>9 Training Manuals and E-Manuals Developed</span>
          </li>
          <li className="flex items-start">
            <span className="text-blue-600 mr-3 font-bold">•</span>
            <span>Multiple Technical Bulletins and Policy Papers</span>
          </li>
          <li className="flex items-start">
            <span className="text-blue-600 mr-3 font-bold">•</span>
            <span>3 R Packages Available on CRAN with Combined 20,000+ Downloads</span>
          </li>
          <li className="flex items-start">
            <span className="text-blue-600 mr-3 font-bold">•</span>
            <span>Contributions to FAO and National Policy Documents</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default TechnicalReports;
