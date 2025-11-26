import { useState } from 'react';
import { Menu, X, ChevronUp } from 'lucide-react';
import Header from './components/Header';
import Navigation from './components/Navigation';
import Home from './pages/Home';
import About from './pages/About';
import AcademicQualifications from './pages/AcademicQualifications';
import WorkExperience from './pages/WorkExperience';
import ResearchGuide from './pages/ResearchGuide';
import CoursesTaught from './pages/CoursesTaught';
import Technologies from './pages/Technologies';
import BasicResearch from './pages/BasicResearch';
import AppliedResearch from './pages/AppliedResearch';
import ProjectsOngoing from './pages/ProjectsOngoing';
import ProjectsCompleted from './pages/ProjectsCompleted';
import ResearchPapers from './pages/ResearchPapers';
import Books from './pages/Books';
import TechnicalReports from './pages/TechnicalReports';
import Awards from './pages/Awards';
import Recognition from './pages/Recognition';

type PageType = 'home' | 'about' | 'qualifications' | 'experience' | 'research-guide' |
  'courses-taught' | 'technologies' | 'basic-research' | 'applied-research' |
  'projects-ongoing' | 'projects-completed' | 'papers' | 'books' | 'reports' |
  'awards' | 'recognition';

function App() {
  const [currentPage, setCurrentPage] = useState<PageType>('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);

  window.addEventListener('scroll', () => {
    setShowScrollTop(window.scrollY > 100);
  });

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNavigation = (page: PageType) => {
    setCurrentPage(page);
    setMobileMenuOpen(false);
    window.scrollTo(0, 0);
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <Home onNavigate={handleNavigation} />;
      case 'about':
        return <About />;
      case 'qualifications':
        return <AcademicQualifications />;
      case 'experience':
        return <WorkExperience />;
      case 'research-guide':
        return <ResearchGuide />;
      case 'courses-taught':
        return <CoursesTaught />;
      case 'technologies':
        return <Technologies />;
      case 'basic-research':
        return <BasicResearch />;
      case 'applied-research':
        return <AppliedResearch />;
      case 'projects-ongoing':
        return <ProjectsOngoing />;
      case 'projects-completed':
        return <ProjectsCompleted />;
      case 'papers':
        return <ResearchPapers />;
      case 'books':
        return <Books />;
      case 'reports':
        return <TechnicalReports />;
      case 'awards':
        return <Awards />;
      case 'recognition':
        return <Recognition />;
      default:
        return <Home onNavigate={handleNavigation} />;
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <Header />
      <Navigation
        currentPage={currentPage}
        onNavigate={handleNavigation}
        mobileMenuOpen={mobileMenuOpen}
        setMobileMenuOpen={setMobileMenuOpen}
      />

      <main className="flex-1 pb-20">
        {renderPage()}
      </main>

      <footer className="fixed bottom-0 left-0 right-0 bg-blue-700 text-white text-center py-4 shadow-lg">
        <p className="text-sm">
          All Rights Reserved © <a href="#" className="hover:text-blue-200 font-semibold">ICAR-IASRI</a> <br />
          Designed and Developed for <a href="#" className="hover:text-blue-200 font-semibold">ICAR-IASRI</a>
        </p>
      </footer>

      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-24 right-6 bg-blue-600 hover:bg-blue-700 text-white rounded-full w-12 h-12 flex items-center justify-center shadow-lg transition-all duration-200 z-50"
          title="Go to top"
        >
          <ChevronUp size={24} />
        </button>
      )}
    </div>
  );
}

export default App;
