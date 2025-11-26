import React from 'react';
import { Mail, Phone, MapPin, BookOpen, Award, Users } from 'lucide-react';

interface HomeProps {
  onNavigate: (page: any) => void;
}

const Home: React.FC<HomeProps> = ({ onNavigate }) => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="grid md:grid-cols-3 gap-8 mb-12">
        <div className="md:col-span-2">
          <h2 className="text-3xl font-bold text-blue-900 mb-6">Welcome</h2>
          <div className="bg-white rounded-lg shadow-md p-6 mb-6">
            <h3 className="text-xl font-semibold text-blue-800 mb-4">About</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              I am a Senior Scientist in the Division of Sample Surveys at the ICAR–Indian Agricultural Statistics Research Institute (ICAR-IASRI). My research focuses on agricultural statistics, sample survey methodologies, calibration techniques, and spatial sampling approaches.
            </p>
            <p className="text-gray-700 leading-relaxed">
             With strong expertise in statistical estimation methods, remote sensing applications, and agricultural data analytics, I have actively contributed to several national and international research projects in collaboration with the FAO and other organizations.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-4 mb-6">
            <div className="bg-blue-50 rounded-lg p-4 border-l-4 border-blue-600">
              <div className="flex items-center mb-2">
                <BookOpen size={20} className="text-blue-600 mr-2" />
                <span className="font-semibold text-gray-700">Publications</span>
              </div>
              <p className="text-2xl font-bold text-blue-900">57+</p>
              <p className="text-xs text-gray-600">Research Papers</p>
            </div>
            <div className="bg-green-50 rounded-lg p-4 border-l-4 border-green-600">
              <div className="flex items-center mb-2">
                <Award size={20} className="text-green-600 mr-2" />
                <span className="font-semibold text-gray-700">Awards</span>
              </div>
              <p className="text-2xl font-bold text-green-900">5</p>
              <p className="text-xs text-gray-600">National & International</p>
            </div>
            <div className="bg-purple-50 rounded-lg p-4 border-l-4 border-purple-600">
              <div className="flex items-center mb-2">
                <Users size={20} className="text-purple-600 mr-2" />
                <span className="font-semibold text-gray-700">Students</span>
              </div>
              <p className="text-2xl font-bold text-purple-900">8+</p>
              <p className="text-xs text-gray-600">Guided</p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6">
          <h3 className="text-xl font-semibold text-blue-800 mb-6">Contact Information</h3>
          <div className="space-y-4">
            <div className="flex items-start">
              <Mail size={20} className="text-blue-600 mr-3 mt-1 flex-shrink-0" />
              <div>
                <p className="text-sm font-semibold text-gray-700">Email</p>
                <a href="mailto:Ankur.biswas@icar.gov.in" className="text-blue-600 hover:text-blue-800 break-all text-sm">
                  Ankur.biswas@icar.gov.in
                </a>
                <br></br>
                <a href="mailto:ankur.bckv@gmail.com" className="text-blue-600 hover:text-blue-800 break-all text-sm">
                  ankur.bckv@gmail.com
                </a>
              </div>
            </div>
            <div className="flex items-start">
              <Phone size={20} className="text-blue-600 mr-3 mt-1 flex-shrink-0" />
              <div>
                <p className="text-sm font-semibold text-gray-700">Mobile</p>
                <p className="text-sm text-gray-600">+91 99680 00281</p>
                <p className="text-sm text-gray-600">+91 88519 64547</p>
              </div>
            </div>
            <div className="flex items-start">
              <Phone size={20} className="text-blue-600 mr-3 mt-1 flex-shrink-0" />
              <div>
                <p className="text-sm font-semibold text-gray-700">Tel</p>
                <p className="text-sm text-gray-600">+91-11-25255841 (Extn 4276)</p>
              </div>
            </div>
            <div className="flex items-start">
              <MapPin size={20} className="text-blue-600 mr-3 mt-1 flex-shrink-0" />
              <div>
                <p className="text-sm font-semibold text-gray-700">Address</p>
                <p className="text-sm text-gray-600">Room No 8, Division of Sample Surveys<br />ICAR-IASRI, Library Avenue, PUSA<br />New Delhi – 110 012</p>
              </div>
            </div>
          </div>

          <div className="mt-8 pt-6 border-t">
            <h4 className="font-semibold text-gray-700 mb-4">Quick Links</h4>
            <div className="space-y-2">
              <button
                onClick={() => onNavigate('qualifications')}
                className="block w-full text-left px-4 py-2 rounded bg-blue-50 hover:bg-blue-100 text-blue-800 text-sm font-medium transition-colors"
              >
                → Academic Qualifications
              </button>
              <button
                onClick={() => onNavigate('experience')}
                className="block w-full text-left px-4 py-2 rounded bg-blue-50 hover:bg-blue-100 text-blue-800 text-sm font-medium transition-colors"
              >
                → Work Experience
              </button>
              <button
                onClick={() => onNavigate('awards')}
                className="block w-full text-left px-4 py-2 rounded bg-blue-50 hover:bg-blue-100 text-blue-800 text-sm font-medium transition-colors"
              >
                → Awards & Recognition
              </button>
              <button
                onClick={() => onNavigate('papers')}
                className="block w-full text-left px-4 py-2 rounded bg-blue-50 hover:bg-blue-100 text-blue-800 text-sm font-medium transition-colors"
              >
                → Research Publications
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-md p-6">
        <h3 className="text-xl font-semibold text-blue-800 mb-4">Research Interests</h3>
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <ul className="space-y-3">
              <li className="flex items-start">
                <span className="text-blue-600 mr-3 font-bold">•</span>
                <span className="text-gray-700">Agricultural Statistics and Sample Surveys</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-3 font-bold">•</span>
                <span className="text-gray-700">Calibration Approaches in Finite Population Estimation</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-3 font-bold">•</span>
                <span className="text-gray-700">Spatial Sampling and Analysis</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-3 font-bold">•</span>
                <span className="text-gray-700">Remote Sensing Applications in Agriculture</span>
              </li>
            </ul>
          </div>
          <div>
            <ul className="space-y-3">
              <li className="flex items-start">
                <span className="text-blue-600 mr-3 font-bold">•</span>
                <span className="text-gray-700">Geographically Weighted Regression Models</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-3 font-bold">•</span>
                <span className="text-gray-700">Crop Yield Estimation and Prediction</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-3 font-bold">•</span>
                <span className="text-gray-700">Post-Harvest Loss Assessment</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-3 font-bold">•</span>
                <span className="text-gray-700">Agricultural Census Methodologies</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
