import React, { useState } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';

interface NavigationProps {
  currentPage: string;
  onNavigate: (page: any) => void;
  mobileMenuOpen: boolean;
  setMobileMenuOpen: (open: boolean) => void;
}

const Navigation: React.FC<NavigationProps> = ({
  currentPage,
  onNavigate,
  mobileMenuOpen,
  setMobileMenuOpen,
}) => {
  const [openDropdowns, setOpenDropdowns] = useState<Set<string>>(new Set());

  const toggleDropdown = (name: string) => {
    const newSet = new Set(openDropdowns);
    if (newSet.has(name)) {
      newSet.delete(name);
    } else {
      newSet.add(name);
    }
    setOpenDropdowns(newSet);
  };

  const isActive = (page: string) => currentPage === page;

  return (
    <nav className="sticky top-0 bg-blue-700 text-white shadow-md z-40">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <button
            onClick={() => onNavigate('home')}
            className="font-bold text-xl text-white hover:text-blue-100 transition-colors"
          >
            {/* Portfolio */}
          </button>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden text-white hover:text-blue-100"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          <ul className="hidden md:flex space-x-1 items-center">
            <li>
              <button
                onClick={() => onNavigate('home')}
                className={`px-3 py-2 rounded transition-colors ${
                  isActive('home') ? 'bg-blue-600' : 'hover:bg-blue-600'
                }`}
              >
                Home
              </button>
            </li>
            <li>
              <button
                onClick={() => onNavigate('about')}
                className={`px-3 py-2 rounded transition-colors ${
                  isActive('about') ? 'bg-blue-600' : 'hover:bg-blue-600'
                }`}
              >
                About Me
              </button>
            </li>
            <li>
              <button
                onClick={() => onNavigate('qualifications')}
                className={`px-3 py-2 rounded transition-colors ${
                  isActive('qualifications') ? 'bg-blue-600' : 'hover:bg-blue-600'
                }`}
              >
                Qualifications
              </button>
            </li>
            <li>
              <button
                onClick={() => onNavigate('experience')}
                className={`px-3 py-2 rounded transition-colors ${
                  isActive('experience') ? 'bg-blue-600' : 'hover:bg-blue-600'
                }`}
              >
                Work Experience
              </button>
            </li>

            <li className="relative group">
              <button className="px-3 py-2 rounded hover:bg-blue-600 flex items-center transition-colors">
                Teaching & Guidance
                <ChevronDown size={16} className="ml-1" />
              </button>
              <ul className="hidden group-hover:block absolute left-0 mt-0 w-48 bg-blue-800 rounded shadow-lg">
                <li>
                  <button
                    onClick={() => onNavigate('research-guide')}
                    className="block w-full text-left px-4 py-2 hover:bg-blue-700 rounded-t"
                  >
                    Research Guide
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => onNavigate('courses-taught')}
                    className="block w-full text-left px-4 py-2 hover:bg-blue-700 rounded-b"
                  >
                    Courses Taught
                  </button>
                </li>
              </ul>
            </li>

            <li className="relative group">
              <button className="px-3 py-2 rounded hover:bg-blue-600 flex items-center transition-colors">
                Research Programme
                <ChevronDown size={16} className="ml-1" />
              </button>
              <ul className="hidden group-hover:block absolute left-0 mt-0 w-56 bg-blue-800 rounded shadow-lg">
                <li>
                  <button
                    onClick={() => onNavigate('technologies')}
                    className="block w-full text-left px-4 py-2 hover:bg-blue-700 rounded-t"
                  >
                    Technologies/Methodologies
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => onNavigate('basic-research')}
                    className="block w-full text-left px-4 py-2 hover:bg-blue-700"
                  >
                    Basic Research
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => onNavigate('applied-research')}
                    className="block w-full text-left px-4 py-2 hover:bg-blue-700"
                  >
                    Applied Research
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => onNavigate('projects-ongoing')}
                    className="block w-full text-left px-4 py-2 hover:bg-blue-700"
                  >
                    Projects (On-going)
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => onNavigate('projects-completed')}
                    className="block w-full text-left px-4 py-2 hover:bg-blue-700 rounded-b"
                  >
                    Projects (Completed)
                  </button>
                </li>
              </ul>
            </li>

            <li className="relative group">
              <button className="px-3 py-2 rounded hover:bg-blue-600 flex items-center transition-colors">
                Publications
                <ChevronDown size={16} className="ml-1" />
              </button>
              <ul className="hidden group-hover:block absolute left-0 mt-0 w-48 bg-blue-800 rounded shadow-lg">
                <li>
                  <button
                    onClick={() => onNavigate('papers')}
                    className="block w-full text-left px-4 py-2 hover:bg-blue-700 rounded-t"
                  >
                    Research Papers
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => onNavigate('books')}
                    className="block w-full text-left px-4 py-2 hover:bg-blue-700"
                  >
                    Books
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => onNavigate('reports')}
                    className="block w-full text-left px-4 py-2 hover:bg-blue-700 rounded-b"
                  >
                    Technical Reports
                  </button>
                </li>
              </ul>
            </li>

            <li>
              <button
                onClick={() => onNavigate('awards')}
                className={`px-3 py-2 rounded transition-colors ${
                  isActive('awards') ? 'bg-blue-600' : 'hover:bg-blue-600'
                }`}
              >
                Awards
              </button>
            </li>
            <li>
              <button
                onClick={() => onNavigate('recognition')}
                className={`px-3 py-2 rounded transition-colors ${
                  isActive('recognition') ? 'bg-blue-600' : 'hover:bg-blue-600'
                }`}
              >
                Recognition
              </button>
            </li>
          </ul>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden pb-4 space-y-2">
            <button
              onClick={() => {
                onNavigate('home');
                setMobileMenuOpen(false);
              }}
              className="block w-full text-left px-3 py-2 rounded hover:bg-blue-600"
            >
              Home
            </button>
            <button
              onClick={() => {
                onNavigate('about');
                setMobileMenuOpen(false);
              }}
              className="block w-full text-left px-3 py-2 rounded hover:bg-blue-600"
            >
              About Me
            </button>
            <button
              onClick={() => {
                onNavigate('qualifications');
                setMobileMenuOpen(false);
              }}
              className="block w-full text-left px-3 py-2 rounded hover:bg-blue-600"
            >
              Qualifications
            </button>
            <button
              onClick={() => {
                onNavigate('experience');
                setMobileMenuOpen(false);
              }}
              className="block w-full text-left px-3 py-2 rounded hover:bg-blue-600"
            >
              Work Experience
            </button>
            <div className="px-3 py-2">
              <button
                onClick={() => toggleDropdown('teaching')}
                className="flex items-center text-left w-full"
              >
                Teaching & Guidance <ChevronDown size={16} className="ml-auto" />
              </button>
              {openDropdowns.has('teaching') && (
                <div className="ml-4 mt-2 space-y-1">
                  <button
                    onClick={() => {
                      onNavigate('research-guide');
                      setMobileMenuOpen(false);
                    }}
                    className="block w-full text-left px-2 py-1 hover:bg-blue-600 rounded"
                  >
                    Research Guide
                  </button>
                  <button
                    onClick={() => {
                      onNavigate('courses-taught');
                      setMobileMenuOpen(false);
                    }}
                    className="block w-full text-left px-2 py-1 hover:bg-blue-600 rounded"
                  >
                    Courses Taught
                  </button>
                </div>
              )}
            </div>
            <div className="px-3 py-2">
              <button
                onClick={() => toggleDropdown('research')}
                className="flex items-center text-left w-full"
              >
                Research Programme <ChevronDown size={16} className="ml-auto" />
              </button>
              {openDropdowns.has('research') && (
                <div className="ml-4 mt-2 space-y-1">
                  <button
                    onClick={() => {
                      onNavigate('technologies');
                      setMobileMenuOpen(false);
                    }}
                    className="block w-full text-left px-2 py-1 hover:bg-blue-600 rounded"
                  >
                    Technologies/Methodologies
                  </button>
                  <button
                    onClick={() => {
                      onNavigate('basic-research');
                      setMobileMenuOpen(false);
                    }}
                    className="block w-full text-left px-2 py-1 hover:bg-blue-600 rounded"
                  >
                    Basic Research
                  </button>
                  <button
                    onClick={() => {
                      onNavigate('applied-research');
                      setMobileMenuOpen(false);
                    }}
                    className="block w-full text-left px-2 py-1 hover:bg-blue-600 rounded"
                  >
                    Applied Research
                  </button>
                  <button
                    onClick={() => {
                      onNavigate('projects-ongoing');
                      setMobileMenuOpen(false);
                    }}
                    className="block w-full text-left px-2 py-1 hover:bg-blue-600 rounded"
                  >
                    Projects (On-going)
                  </button>
                  <button
                    onClick={() => {
                      onNavigate('projects-completed');
                      setMobileMenuOpen(false);
                    }}
                    className="block w-full text-left px-2 py-1 hover:bg-blue-600 rounded"
                  >
                    Projects (Completed)
                  </button>
                </div>
              )}
            </div>
            <div className="px-3 py-2">
              <button
                onClick={() => toggleDropdown('publications')}
                className="flex items-center text-left w-full"
              >
                Publications <ChevronDown size={16} className="ml-auto" />
              </button>
              {openDropdowns.has('publications') && (
                <div className="ml-4 mt-2 space-y-1">
                  <button
                    onClick={() => {
                      onNavigate('papers');
                      setMobileMenuOpen(false);
                    }}
                    className="block w-full text-left px-2 py-1 hover:bg-blue-600 rounded"
                  >
                    Research Papers
                  </button>
                  <button
                    onClick={() => {
                      onNavigate('books');
                      setMobileMenuOpen(false);
                    }}
                    className="block w-full text-left px-2 py-1 hover:bg-blue-600 rounded"
                  >
                    Books
                  </button>
                  <button
                    onClick={() => {
                      onNavigate('reports');
                      setMobileMenuOpen(false);
                    }}
                    className="block w-full text-left px-2 py-1 hover:bg-blue-600 rounded"
                  >
                    Technical Reports
                  </button>
                </div>
              )}
            </div>
            <button
              onClick={() => {
                onNavigate('awards');
                setMobileMenuOpen(false);
              }}
              className="block w-full text-left px-3 py-2 rounded hover:bg-blue-600"
            >
              Awards
            </button>
            <button
              onClick={() => {
                onNavigate('recognition');
                setMobileMenuOpen(false);
              }}
              className="block w-full text-left px-3 py-2 rounded hover:bg-blue-600"
            >
              Recognition
            </button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
