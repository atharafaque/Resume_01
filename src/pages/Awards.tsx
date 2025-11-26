import React from "react";

type Award = {
  title: string;
  organization: string | null;
  date: string | null;
  occasion: string | null;
  location: string | null;
  paper: string | null;
};

type AcademicRanking = {
  title: string;
  year: string;
};

const Awards: React.FC = () => {
  const awards: Award[] = [
    {
      title: "Young Scientist of the Year Award 2024",
      organization:
        "Cooch Behar Association for Cultivation of Agricultural Sciences (COBACAS), Uttar Banga Krishi Viswavidyalaya (UBKV)",
      date: "March 05–06, 2024",
      occasion:
        "6th National Conference on “Nature-based Solution for Achieving Sustainable Development Goals (NbSSDG)”",
      location: "Pundibari, Cooch Behar, West Bengal, India",
      paper: null,
    },
    {
      title: "InSc Young Researcher Award 2022",
      organization: "InSc Institute of Scholars",
      date: "2022",
      occasion: null,
      location: null,
      paper: null,
    },
    {
      title: "CWSS Young Scientist Award 2023",
      organization: "Crop and Weed Science Society (CWSS)",
      date: "September 30 – October 02, 2023",
      occasion:
        "6th CWSS International Conference on “Agricultural Innovations for Sustainable Development Goals with Special Focus on Natural Farming (AISDGONF-2023)”",
      location:
        "Farmers’ Academy & Convention Centre (FACC), BCKV, Kalyani, Nadia, West Bengal, India",
      paper: null,
    },
    {
      title: "Professor R.N. Pillai Best Paper Presentation Award – 2022",
      organization:
        "International Statistics Fraternity (ISF), University of Kerala",
      date: "December 16–19, 2022",
      occasion:
        "Eighth International Conference on Statistics for Twenty-first Century-2022 (ICSTC-2022)",
      location: "Trivandrum, Kerala, India",
      paper:
        "Proportion estimation under geographically weighted logistic regression model from survey data",
    },
    {
      title: "Remote Pilot Certificate (RPC)",
      organization:
        "Directorate General of Civil Aviation (DGCA), Government of India (RPTO: Fore Institute of Drone Technology and Research – FIDTR)",
      date: "2023",
      occasion: "Successful completion of Remote Pilot Training",
      location: "Gurugram, India",
      paper: null,
    },
  ];

  const academicRankings: AcademicRanking[] = [
    {
      title: "1st Rank in ICAR Agricultural Research Service (ARS) Examination",
      year: "2010",
    },
    { title: "1st Rank in IARI Ph.D. Entrance Examination", year: "2009" },
    { title: "4th Rank in ICAR JRF exam AIEEA-PG", year: "2007" },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold text-blue-900 mb-8">Awards &amp; Honors</h2>

      <div className="space-y-8">
        {/* ====== AWARDS TABLE ====== */}
        <div className="w-full">
          <h5
            className="text-white text-center py-1 mb-3 rounded"
            style={{ backgroundColor: "#4682B4" }}
          >
            Awards
          </h5>

          <div className="overflow-x-auto">
            <table className="min-w-full table-auto border border-gray-300">
              <thead className="bg-gray-200 text-center font-semibold">
                <tr>
                  <th className="px-4 py-2 text-center">Award</th>
                  <th className="px-4 py-2 text-center">Details</th>
                </tr>
              </thead>

              <tbody>
                {awards.map((award, idx) => (
                  <tr
                    key={idx}
                    className={`${
                      idx % 2 === 0 ? "bg-white" : "bg-gray-50"
                    } hover:bg-gray-100 text-left`}
                  >
                    <td className="align-top px-4 py-3 font-medium text-gray-800">
                      {award.title}
                    </td>
                    <td className="px-4 py-3 text-gray-700">
                      {award.organization && (
                        <div>
                          <span className="font-semibold">Organization:</span>{" "}
                          {award.organization}
                        </div>
                      )}
                      {award.date && (
                        <div>
                          <span className="font-semibold">Date:</span> {award.date}
                        </div>
                      )}
                      {award.occasion && (
                        <div>
                          <span className="font-semibold">Occasion:</span>{" "}
                          {award.occasion}
                        </div>
                      )}
                      {award.location && (
                        <div>
                          <span className="font-semibold">Location:</span>{" "}
                          {award.location}
                        </div>
                      )}
                      {award.paper && (
                        <div>
                          <span className="font-semibold">Paper:</span>{" "}
                          <em>{award.paper}</em>
                        </div>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* ====== ACADEMIC RANKINGS ====== */}
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="bg-green-600 text-white px-6 py-4">
            <h3 className="text-lg font-semibold">
              Academic Rankings &amp; Achievements
            </h3>
          </div>
          <div className="p-6">
            <div className="space-y-4">
              {academicRankings.map((ranking, index) => (
                <div
                  key={index}
                  className="flex items-start pb-4 border-b last:border-b-0"
                >
                  <span className="bg-green-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-4 flex-shrink-0 text-sm">
                    {index + 1}
                  </span>
                  <div>
                    <p className="font-semibold text-gray-800">{ranking.title}</p>
                    <p className="text-gray-600 text-sm">{ranking.year}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* ====== SUMMARY SECTION ====== */}
      <div className="mt-8 bg-blue-50 rounded-lg p-6 border-l-4 border-blue-600">
        <h3 className="font-semibold text-blue-900 mb-3">Recognition Summary</h3>
        <ul className="space-y-2 text-gray-700">
          <li className="flex items-start">
            <span className="text-blue-600 mr-3 font-bold">•</span>
            <span>5 National and International Awards</span>
          </li>
          <li className="flex items-start">
            <span className="text-blue-600 mr-3 font-bold">•</span>
            <span>3 Prestigious Academic Rankings in Competitive Examinations</span>
          </li>
          <li className="flex items-start">
            <span className="text-blue-600 mr-3 font-bold">•</span>
            <span>Best Paper Presentation Award at International Conference</span>
          </li>
          <li className="flex items-start">
            <span className="text-blue-600 mr-3 font-bold">•</span>
            <span>Recognition as Young Scientist (2023–2024)</span>
          </li>
          <li className="flex items-start">
            <span className="text-blue-600 mr-3 font-bold">•</span>
            <span>Specialized Certification in Remote Pilot Operations</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Awards;
