import React from 'react';

const BasicResearch: React.FC = () => {
  const research = [
    'Developed spatial estimators of finite population parameters for spatially correlated populations when samples are drawn by simple random sampling and ranked set sampling design.',
    'Developed resampling techniques (viz. Jackknife and Bootstrap method) based estimation procedures for unbiased variance estimation of ranked set sampling (RSS) estimator of population mean of study variable.',
    'Developed several product type calibration estimators under two stage sampling when available auxiliary variables are inversely related to study variable.',
    'Developed methodology for obtaining calibration estimators of finite population mean and ratio under Adaptive Cluster Sampling design using Calibration Approach.',
    'Developed sampling methodology for estimation of finite population proportion for geo-referenced binary survey data under the project "Estimation of Finite Population Proportion from Geo-Referenced Survey Data.',
    'Developed sampling methodology for GWR-based model calibration estimation of finite population total under geo-referenced complex surveys.',
    'Developed sampling methodology for GWR-assisted integrated estimator of finite population total under two-phase sampling by model-based and model-assisted approach by integrating data from two independent surveys using spatial information.',
    'Developed conditional Cook-statistics for detection of outliers in presence of masking in survey weighted regression and procedure for outlier imputation when auxiliary variables are available in sample survey (As a Co-PI).'
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold text-blue-900 mb-8">Basic Research</h2>

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

      <div className="mt-8 bg-green-50 rounded-lg p-6 border-l-4 border-green-600">
        <h3 className="font-semibold text-green-900 mb-3">Research Focus</h3>
        <p className="text-gray-700 mb-4">
          My basic research focuses on developing theoretical frameworks and methodological advancements in agricultural statistics and sample survey theory. The work emphasizes:
        </p>
        <ul className="space-y-2 text-gray-700">
          <li className="flex items-start">
            <span className="text-green-600 mr-3 font-bold">•</span>
            <span>Finite Population Estimation under Complex Sampling Designs</span>
          </li>
          <li className="flex items-start">
            <span className="text-green-600 mr-3 font-bold">•</span>
            <span>Spatial Estimation and Geographically Weighted Methods</span>
          </li>
          <li className="flex items-start">
            <span className="text-green-600 mr-3 font-bold">•</span>
            <span>Variance Estimation and Resampling Techniques</span>
          </li>
          <li className="flex items-start">
            <span className="text-green-600 mr-3 font-bold">•</span>
            <span>Outlier Detection and Robust Estimation Methods</span>
          </li>
          <li className="flex items-start">
            <span className="text-green-600 mr-3 font-bold">•</span>
            <span>Integration of Auxiliary Information in Survey Estimation</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default BasicResearch;
