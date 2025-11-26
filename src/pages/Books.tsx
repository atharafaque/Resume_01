import React from 'react';

const Books: React.FC = () => {
  const books = [
    {
      title: 'Crop Cutting Experiment Techniques for Determination of Yield Rates of Field Crops',
      authors: 'Ahmad, T., Sahoo, P.M., Singh, M. and Biswas, A.',
      type: 'Monograph',
      year: 2024,
      pages: 108,
      publisher: 'ICAR-Indian Agricultural Statistics Research Institute'
    }
  ];

  const bookChapters = [
    {
      title: 'Use of SPSS for Statistical Analysis',
      authors: 'Biswas, A.',
      bookTitle: 'Innovative Practices of Statistics in Research',
      year: 2016,
      pages: '160-186',
      isbn: '978-81-8274-926-9'
    },
    {
      title: 'Correspondence Analysis',
      authors: 'Singh, D., Kumar, R., Biswas, A., Shekhawat, R.S. and Jhajhria, A.',
      bookTitle: 'Quantitative Methods for Social Sciences',
      year: 2019,
      pages: '46-58',
      isbn: '9788194008026'
    },
    {
      title: 'Adaptive Rectangular Sampling',
      authors: 'Varshney, N., Ahmad, T., Biswas, A., Shrivastava, A. and Garde, Y.',
      bookTitle: 'Research Trends in Mathematics and Statistics',
      year: 2023,
      pages: '119-138',
      isbn: 'N/A'
    },
    {
      title: 'Resampling Methods of Variance Estimation in Two-Phase Sampling',
      authors: 'Varshney, N., Ahmad, T., Biswas, A., Shrivastava, A. and Garde, Y.',
      bookTitle: 'Research Trends in Mathematics and Statistics',
      year: 2023,
      pages: '139-160',
      isbn: 'N/A'
    },
    {
      title: 'Sample Size Determination',
      authors: 'Basak, P., and Biswas, A.',
      bookTitle: 'Statistical Procedures for Analysing Agricultural Data using R',
      year: 2023,
      pages: '273-285',
      isbn: 'N/A'
    }
  ];

  const editedBooks = [
    { title: 'Agricultural Research Data Book 2024', year: 2024, pages: 327 },
    { title: 'Agricultural Research Data Book 2023', year: 2023, pages: 349 },
    { title: 'Agricultural Research Data Book 2022', year: 2022, pages: 351 },
    { title: 'Agricultural Research Data Book 2021', year: 2021, pages: 345 },
    { title: 'Agricultural Research Data Book 2020', year: 2020, pages: 340 }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold text-blue-900 mb-8">Books and Chapters</h2>

      <div className="space-y-8">
        <div className="bg-white rounded-lg shadow-md p-6">
          <h3 className="text-xl font-semibold text-blue-800 mb-6 pb-3 border-b-2 border-blue-300">Monographs</h3>
          {books.map((book, index) => (
            <div key={index} className="mb-6 pb-6 border-b last:border-b-0">
              <h4 className="font-semibold text-gray-800 mb-2">{book.title}</h4>
              <p className="text-gray-700 text-sm mb-1"><span className="font-semibold">Authors:</span> {book.authors}</p>
              <p className="text-gray-700 text-sm mb-1"><span className="font-semibold">Year:</span> {book.year}</p>
              <p className="text-gray-700 text-sm mb-1"><span className="font-semibold">Pages:</span> {book.pages}</p>
              <p className="text-gray-700 text-sm"><span className="font-semibold">Publisher:</span> {book.publisher}</p>
            </div>
          ))}
        </div>

        <div className="bg-white rounded-lg shadow-md p-6">
          <h3 className="text-xl font-semibold text-blue-800 mb-6 pb-3 border-b-2 border-blue-300">Book Chapters</h3>
          <div className="space-y-6">
            {bookChapters.map((chapter, index) => (
              <div key={index} className="pb-6 border-b last:border-b-0">
                <h4 className="font-semibold text-gray-800 mb-2">{chapter.title}</h4>
                <p className="text-gray-700 text-sm mb-1"><span className="font-semibold">Authors:</span> {chapter.authors}</p>
                <p className="text-gray-700 text-sm mb-1"><span className="font-semibold">Book Title:</span> {chapter.bookTitle}</p>
                <p className="text-gray-700 text-sm mb-1"><span className="font-semibold">Year:</span> {chapter.year}</p>
                <p className="text-gray-700 text-sm"><span className="font-semibold">Pages:</span> {chapter.pages}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6">
          <h3 className="text-xl font-semibold text-blue-800 mb-6 pb-3 border-b-2 border-blue-300">Edited Books</h3>
          <p className="text-gray-700 mb-4 text-sm">Series: Agricultural Research Data Books (Edited by Ahmad, T., Sahoo, P.M., Biswas, A., and others)</p>
          <div className="grid md:grid-cols-2 gap-4">
            {editedBooks.map((book, index) => (
              <div key={index} className="bg-blue-50 p-4 rounded border-l-4 border-blue-600">
                <p className="font-semibold text-gray-800">{book.title}</p>
                <p className="text-gray-700 text-sm">Year: {book.year}</p>
                <p className="text-gray-700 text-sm">Pages: {book.pages}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-8 bg-green-50 rounded-lg p-6 border-l-4 border-green-600">
        <h3 className="font-semibold text-green-900 mb-3">Publication Record</h3>
        <ul className="space-y-2 text-gray-700">
          <li className="flex items-start">
            <span className="text-green-600 mr-3 font-bold">•</span>
            <span>1 Monograph on Crop Cutting Experiment Techniques</span>
          </li>
          <li className="flex items-start">
            <span className="text-green-600 mr-3 font-bold">•</span>
            <span>5 Chapters in Edited Books on Statistical Methods and Applications</span>
          </li>
          <li className="flex items-start">
            <span className="text-green-600 mr-3 font-bold">•</span>
            <span>10 Edited Agricultural Research Data Books (2014-2024)</span>
          </li>
          <li className="flex items-start">
            <span className="text-green-600 mr-3 font-bold">•</span>
            <span>Contributions to Multiple Handbooks and Reference Works</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Books;
