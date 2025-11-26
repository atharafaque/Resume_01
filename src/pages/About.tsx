import React from 'react';

const About: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold text-blue-900 mb-8">About Me</h2>

      <div className="bg-white rounded-lg shadow-md p-8">
        <div className="grid md:grid-cols-2 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-semibold text-blue-800 mb-4">Personal Information</h3>
            <table className="w-full text-gray-700">
              <tbody>
                <tr className="border-b">
                  <td className="py-2 font-semibold">Name</td>
                  <td className="py-2">Dr. Ankur Biswas</td>
                </tr>
                <tr className="border-b">
                  <td className="py-2 font-semibold">Gender</td>
                  <td className="py-2">Male</td>
                </tr>
                <tr className="border-b">
                  <td className="py-2 font-semibold">Date of Birth</td>
                  <td className="py-2">28-11-1985</td>
                </tr>
                <tr className="border-b">
                  <td className="py-2 font-semibold">Designation</td>
                  <td className="py-2">Senior Scientist</td>
                </tr>
                <tr className="border-b">
                  <td className="py-2 font-semibold">Category</td>
                  <td className="py-2">General (GEN)</td>
                </tr>
                <tr>
                  <td className="py-2 font-semibold">Discipline</td>
                  <td className="py-2">Agricultural Statistics</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-blue-800 mb-4">Current Position</h3>
            <table className="w-full text-gray-700">
              <tbody>
                <tr className="border-b">
                  <td className="py-2 font-semibold">Organization</td>
                  <td className="py-2">ICAR-Indian Agricultural Statistics Research Institute (ICAR-IASRI)</td>
                </tr>
                <tr className="border-b">
                  <td className="py-2 font-semibold">Division</td>
                  <td className="py-2">Division of Sample Surveys</td>
                </tr>
                <tr className="border-b">
                  <td className="py-2 font-semibold">Location</td>
                  <td className="py-2">Room No 8, Library Avenue, PUSA, New Delhi – 110 012</td>
                </tr>
                <tr className="border-b">
                  <td className="py-2 font-semibold">Joined As</td>
                  <td className="py-2">Senior Scientist (02.07.2021 - Till date)</td>
                </tr>
                <tr>
                  <td className="py-2 font-semibold">Faculty Role</td>
                  <td className="py-2">Faculty and Research Guide (Agricultural Statistics)</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div className="border-t pt-8 mb-8">
          <h3 className="text-xl font-semibold text-blue-800 mb-4">Professional Background</h3>
          <p className="text-gray-700 leading-relaxed mb-4">
            I am a Senior Scientist in the Division of Sample Surveys at ICAR-IASRI with expertise in agricultural statistics, sample survey methodologies, and statistical estimation techniques. My research focuses on developing innovative sampling methodologies and calibration approaches for finite population parameter estimation.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            Since joining ICAR-IASRI in 2012, I have been actively involved in research projects funded by national and international agencies including FAO (Food and Agriculture Organization of the United Nations), Government of India, and ICAR. My work has contributed to improving agricultural statistics collection and analysis at both national and international levels.
          </p>
          <p className="text-gray-700 leading-relaxed">
            I have received recognition for my contributions including awards for young researchers and have been invited as a resource person and consultant for various international projects. I am committed to advancing the field of agricultural statistics through rigorous research and capacity building.
          </p>
        </div>

        {/* <div className="bg-blue-50 rounded-lg p-6 border-l-4 border-blue-600">
          <h4 className="font-semibold text-blue-900 mb-3">Key Accomplishments</h4>
          <ul className="space-y-2 text-gray-700">
            <li className="flex items-start">
              <span className="text-blue-600 mr-3 font-bold">✓</span>
              <span>Developed 5 ICAR-certified technologies and methodologies in agricultural statistics</span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-600 mr-3 font-bold">✓</span>
              <span>Published 57+ peer-reviewed research papers in national and international journals</span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-600 mr-3 font-bold">✓</span>
              <span>Contributed to 22+ research projects as Principal or Co-Principal Investigator</span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-600 mr-3 font-bold">✓</span>
              <span>Guided 8+ postgraduate students in Agricultural Statistics</span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-600 mr-3 font-bold">✓</span>
              <span>Developed R packages with over 20,000 downloads on CRAN</span>
            </li>
          </ul>
        </div> */}
      </div>
    </div>
  );
};

export default About;
