import React from 'react';

type Paper = {
  authors: string;
  title: string;
  publisher: string;
  impactFactor?: string;
  naas?: string;
  year: number;
};

const ResearchPapers: React.FC = () => {
  const researchPapers: Paper[] = [
    {
      authors:
        'Santhy, V., Balasubramani, G., Biswas, A., Santosh, H.B., Puttawar, M., Raut, P., Waghmare, V.N. and Prasad, Y.G.',
      title:
        'Determination of minimum sample size for testing proportion of non-Bt seeds under refuge-in-bag (RIB) for Bt cotton',
      publisher: 'Environment, Development and Sustainability, 27, 7243–7253',
      impactFactor: '4.7',
      naas: '10.7',
      year: 2025,
    },
    {
      authors:
        'Rajarushi, C.N., Nebapure, S.M., Biswas, A., Rajna, S.  & Subramanian, S.',
      title:
        'Contact toxicity of insecticides against rice weevil, Sitophilus oryzae L. and its effect on progeny production',
      publisher: 'Scientific Reports, 14, 28404',
      impactFactor: '',
      naas: '9.8',
      year: 2024,
    },
    {
      authors:
        'Das, B., Sahoo, R.N., Biswas, A., Pargal, S., Krishna, G., Verma, R. Chinnusamy, V., Sehgal, V.K.  & Gupta, V.K.',
      title:
        'Discrimination of rice genotypes using field spectroradiometry',
      publisher: 'Geocarto International, 35(1), 64–77',
      impactFactor: '3.3',
      naas: '9.3',
      year: 2020,
    },
    {
      authors:
        'Singh, M., Arshad, A., Bijlwan, A., Tamang, M., Shahina, N.N., Biswas, A., Bhowmick, A., Vineeta, Banik, G.C., Nath, A.J., Shukla, G. and Chakravarty, S.',
      title:
        'Mapping tree carbon density using sentinel 2A sensor on Google Earth Engine in Darjeeling Himalayas: Implication for tree carbon management and climate change mitigation',
      publisher:
        'Physics and Chemistry of the Earth, Parts A/B/C, 134, 103569',
      impactFactor: '3.0',
      naas: '9.0',
      year: 2024,
    },
    {
      authors: 'Saha, B., Biswas, A.*, Ahmad, T. and Paul, N.C.',
      title:
        'Geographically weighted regression-based model calibration estimation of finite population total under geo-referenced complex surveys',
      publisher:
        'Journal of Agricultural, Biological, and Environmental Statistics, 29(4), 793–811',
      impactFactor: '1.4',
      naas: '7.4',
      year: 2024,
    },
    {
      authors: 'Kumar, R., Biswas, A., Singh, D. and Ahmad, T.',
      title: 'Detection of outliers in survey–weighted linear regression',
      publisher: 'Mathematical Population Studies, 31(3), 147-164',
      impactFactor: '1.4',
      naas: '',
      year: 2024,
    },
    {
      authors:
        'Balakrishnan, D., Biswas, A., Robin, S., Rabindran, R. and Joel, A. J.',
      title:
        'Gene interactions and genetics of blast resistance and yield attributes in Rice (Oryza sativa L.)',
      publisher: 'Journal of Genetics, 93(2), 415-424',
      impactFactor: '1.4',
      naas: '7.4',
      year: 2014,
    },
    {
      authors:
        'Paul, N.C., Rai, A., Ahmad, T., Biswas, A.*, and Sahoo, P.M.',
      title:
        'GWR-assisted integrated estimator of finite population total under two-phase sampling: a model-assisted approach',
      publisher: 'Journal of Applied Statistics, 51(12), 2326–2343',
      impactFactor: '1.2',
      naas: '7.2',
      year: 2023,
    },
    {
      authors:
        'Paul, N.C., Rai, A., Ahmad, T., Biswas, A.* and Sahoo, P.M.',
      title:
        'Spatial approach for the estimation of average yield of cotton using reduced number of crop cutting experiments',
      publisher: 'Current Science, 125(5), 518-529',
      impactFactor: '',
      naas: '7.1',
      year: 2023,
    },
    {
      authors:
        'Aditya, Kaustav, Biswas, Ankur, Gupta, Ashok Kumar and Chandra, Hukum.',
      title:
        'District level crop yield estimation using calibration approach',
      publisher: 'Current Science, 112(9), 1927-1931',
      impactFactor: '',
      naas: '7.1',
      year: 2017,
    },
    {
      authors:
        'Saha, B., Biswas, A.*, Ahmad, T., Sahoo, P.M., Aditya, K. and Paul, N.C.',
      title:
        'Geographically Weighted Regression Model-Calibration for Finite Population Parameter Estimation under Two Stage Sampling Design',
      publisher:
        'Communications in Statistics - Simulation and Computation',
      impactFactor: '0.8',
      naas: '6.8',
      year: 2024,
    },
    {
      authors:
        'Kumar, R., Rai, A., Ahmad, T., Biswas, A.*, Sahoo, P.M. and Moury, P.K.',
      title:
        'Rescaling bootstrap variance estimation technique under dual frame surveys with unknown domain sizes',
      publisher:
        'Communications in Statistics - Simulation and Computation',
      impactFactor: '0.8',
      naas: '6.8',
      year: 2025,
    },
    {
      authors:
        'Vyshna, I.C., Aditya, K., Nasrin, S., Bharti, B., Singh, D, Biswas, A., and Ahmad, T.',
      title:
        'Calibration estimator of population total by double use of auxiliary information in two stage sampling design',
      publisher:
        'Journal of the Indian Society for Probability and Statistics',
      impactFactor: '',
      naas: '6.8',
      year: 2025,
    },
    {
      authors: 'Paul, N.C., Rai, A., Ahmad, T. and Biswas, A.*',
      title:
        'Integration of Spatial Data from Two Independent Surveys: A Model-Based Approach Using Geographically Weighted Regression',
      publisher:
        'Journal of the Indian Society for Probability and Statistics, 25(2), 895–921',
      impactFactor: '0.8',
      naas: '6.8',
      year: 2024,
    },
    {
      authors: 'Biswas, A.*, Rai, A. and Ahmad, T.',
      title:
        'Rescaling bootstrap technique for variance estimation for ranked set samples in finite population',
      publisher:
        'Communications in Statistics - Simulation and Computation, 49(10), 2704-2718',
      impactFactor: '0.8',
      naas: '6.8',
      year: 2020,
    },
    {
      authors:
        'Yadav, P., Padaria, R.N., Burman, R.R., Sarkar, S., Yadav, R., Biswas, A. and Kumar, S.N.',
      title:
        'Farmer-led conservation of paddy landraces in Western Odisha',
      publisher:
        'Indian Journal of Traditional Knowledge, 23(8), 760-770',
      impactFactor: '',
      naas: '6.7',
      year: 2024,
    },
    {
      authors:
        'Biswas, A.*, Rai, A., Ahmad, T. and Sahoo, P.M.',
      title:
        'Spatial estimation and rescaled spatial bootstrap approach for finite population',
      publisher:
        'Communications in Statistics - Theory and Methods, 46(1), 373–388',
      impactFactor: '0.6',
      naas: '6.6',
      year: 2017,
    },
    {
      authors:
        'Paul, N.C., Rai, A., Ahmad, T., Biswas, A.* and Sahoo, P.M.',
      title:
        'Spatially integrated estimator of finite population total by integrating data from two independent surveys using spatial information',
      publisher: 'Journal of the Korean Statistical Society, 53, 222–247',
      impactFactor: '0.6',
      naas: '',
      year: 2024,
    },
    {
      authors:
        'Min, K., Wason, M., Padaria, R.N., Satyapriya, Bishnoi, S., Biswas, A. and Prasad, S.',
      title:
        "Gendered Perceptive on Climate Change Awareness in Myanmar's Lowland, Ayeyarwady Region, Myanmar",
      publisher:
        'AMA, Agricultural Mechanization in Asia, Africa and Latin America, 55(12), 19961-19970',
      impactFactor: '',
      naas: '6.4',
      year: 2024,
    },
    {
      authors:
        'Baishya, M., Ahmad, T., Biswas, A. and Sahoo, P.M.,',
      title:
        'Bootstrap variance estimation technique under stratified dual frame surveys',
      publisher:
        'International Journal of Agricultural and Statistical Sciences, 21(1), 251-259',
      impactFactor: '',
      naas: '6.3',
      year: 2025,
    },
    {
      authors:
        'Biswas, A.*, Aditya, K., Sud, U.C. and Basak, P.',
      title:
        'Calibration estimator in two stage sampling using double sampling approach when study variable is inversely related to auxiliary variable',
      publisher: 'Statistics and Applications, 21(1), 11-22',
      impactFactor: '',
      naas: '6.3',
      year: 2023,
    },
    {
      authors:
        'Biswas, A., Rai, A., Ahmad, T. and Sahoo, P.M.',
      title:
        'Spatial estimation approach under ranked set sampling from spatial correlated finite population',
      publisher:
        'International Journal of Agricultural and Statistical Sciences, 11(2), 551-558',
      impactFactor: '',
      naas: '6.3',
      year: 2015,
    },
    {
      authors:
        'Varshney, N., Ahmad, T., Rai, A., Biswas, A. and Sahoo, P.M.',
      title:
        'Prediction approach estimator using auxiliary information under two-phase sampling',
      publisher:
        'International Journal of Agricultural and Statistical Sciences, 17(2), 733-739',
      impactFactor: '',
      naas: '6.3',
      year: 2021,
    },
    {
      authors:
        'Moury, P.K., Ahmad, T., Rai, A., Biswas, A. and Sahoo, P.M.',
      title:
        'Outlier robust finite population estimation under spatial non-stationarity',
      publisher:
        'International Journal of Agricultural and Statistical Sciences, 16(2), 535-545',
      impactFactor: '',
      naas: '6.3',
      year: 2020,
    },
    {
      authors:
        'Dasgupta, P., Ahmad, T., Biswas, A. and Rai, A.',
      title:
        'A dual frame approach for estimating finite population total using ranked set sampling',
      publisher:
        'International Journal of Agricultural and Statistical Sciences, 14(1), 409-418',
      impactFactor: '',
      naas: '6.3',
      year: 2018,
    },
    {
      authors:
        'Balakrishnan, D., Robin, S., Biswas, A. and John, J. A.',
      title:
        'Genetics of association among yield and blast resistance traits in Rice (Oryza sativa L)',
      publisher:
        'Indian Journal of Agricultural Sciences, 85 (3): 354–60',
      impactFactor: '',
      naas: '6.3',
      year: 2015,
    },
    {
      authors:
        'Kumari, S., Nirala, S.K., Biswas, A. and Kumar, R.',
      title:
        'The response of irrigation, fertigation, and mulching on water and fertilizer use efficiency of capsicum grown under polyhouse',
      publisher:
        'International Journal of Research in Agronomy, 7(8), 501-506',
      impactFactor: '',
      naas: '5.20',
      year: 2024,
    },
    {
      authors:
        'Yadav, P., Shravani, K., Padaria, R.N., Burman, R.R., Sarkar, S., Biswas, A., Yadav, R. and Kumar, S.N.',
      title:
        'Empowering Farmers: Creation of an E-Learning Module on Farmers Rights and Landrace Conservation Using the ADDIE Model and Knowledge Test',
      publisher:
        'Journal of Experimental Agriculture International, 47(3), 160-172',
      impactFactor: '',
      naas: '5.14',
      year: 2025,
    },
    {
      authors:
        'Yadav, P., Padaria, R.N., Shravani, K., Burman, R.R., Sarkar, S., Biswas, A., Yadav, R. and Kumar, S.N.',
      title:
        "Development and validation of e-learning module towards farmers' rights and landrace conservation",
      publisher:
        'International Journal of Agriculture Extension and Social Development, 7(3), 219-226',
      impactFactor: '',
      naas: '5.04',
      year: 2024,
    },
    {
      authors:
        'Sarkar, A., Sahoo, P.M., Ahmad, T., Rai, A. and Biswas, A.',
      title:
        'An improvement over estimation of total livestock population in integrated sample survey scheme',
      publisher:
        'Journal of Community Mobilization and Sustainable Development, 20(2), 590-594',
      impactFactor: '',
      naas: '5.02',
      year: 2025,
    },
    {
      authors:
        'Udgata, A.R., Rai, A., Sahoo, P.M., Ahmad, T. and Biswas, A.*',
      title:
        'Geographically weighted ridge regression estimator of finite population mean to tackle multicollinearity in survey sampling',
      publisher:
        'Journal of Community Mobilization and Sustainable Development, 19(1), 113-119',
      impactFactor: '',
      naas: '5.02',
      year: 2024,
    },
    {
      authors:
        'Kumar, P., Kumbhare, N.V., Nain, M.S., Bishnoi, S., Biswas, A., Kumar, P. and Prashad, S.',
      title:
        'Factors for value realization of tomato, onion, and potato (TOP) under operation greens using DEMATEL method',
      publisher: 'Indian Journal of Extension Education, 59(4), 72-76',
      impactFactor: '',
      naas: '5.02',
      year: 2023,
    },
    {
      authors:
        'Paul, N.C., Rai, A., Ahmad, T., Biswas, A.* and Sahoo, P.M.',
      title:
        'Bootstrap variance estimation of spatially integrated estimator of finite population total in presence of missing observations',
      publisher:
        'Journal of Community Mobilization and Sustainable Development, 17(3), 1039-1048',
      impactFactor: '',
      naas: '5.02',
      year: 2022,
    },
    {
      authors:
        'Agrawal, J. Sharma, J.P., Burman, R.R., Venkatesh, P., Biswas, A. and Parray, A.R.',
      title: 'Perception of farmers towards custom hiring service centres',
      publisher:
        'Journal of Community Mobilization and Sustainable Development, 15(1), 145-149',
      impactFactor: '',
      naas: '5.02',
      year: 2020,
    },
    {
      authors:
        'Sarkar, A., Sahoo, P.M., Singh, A.K., Ahmad, T., Biswas, A., Yadav, K.K.',
      title:
        'Comparison Between Separate and Combined Type Estimators for Estimating Total Number of In-milk Animals',
      publisher:
        'International Journal of Agriculture, Environment and Biotechnology, 17(3), 601-607',
      impactFactor: '',
      naas: '4.92',
      year: 2024,
    },
    {
      authors:
        'Paul, N.C., Rai, A., Ahmad, T., Biswas, A.* and Sahoo, P.M.',
      title:
        'Spatial Estimation of Finite Population Total under Geographically Weighted Regression using Forward Stepwise Variable Selection',
      publisher:
        'Journal of the Indian Society of Agricultural Statistics, 78(3), 231–244',
      impactFactor: '',
      naas: '4.85',
      year: 2024,
    },
    {
      authors:
        'Moury, P.K., Ahmad, T., Biswas, A.*, Sahoo, P.M. and Huddar, M.K.',
      title:
        'Estimation of the average yield of cotton using outlier robust geographically weighted regression approach',
      publisher:
        'Journal of the Indian Society of Agricultural Statistics, 78(2), 81–87',
      impactFactor: '',
      naas: '4.85',
      year: 2024,
    },
    {
      authors: 'Biswas, A.*, Aditya, K. and Sud, U.C.',
      title:
        'Product type calibration estimator with inversely related PSU level auxiliary variable under two stage sampling',
      publisher:
        'Journal of the Indian Society of Agricultural Statistics, 77(2), 171–176',
      impactFactor: '',
      naas: '4.85',
      year: 2023,
    },
    {
      authors: 'Biswas, A.*, Kumar, R., Singh, D. and Basak, P.',
      title:
        'Calibration estimation approach for population ratio under adaptive cluster sampling',
      publisher:
        'Journal of the Indian Society of Agricultural Statistics, 77(2), 177–183',
      impactFactor: '',
      naas: '4.85',
      year: 2023,
    },
    {
      authors: 'Biswas, A.*, Kumar, R., Singh, D. and Basak, P.',
      title:
        'Calibration estimator of finite population mean using auxiliary information under adaptive cluster sampling',
      publisher:
        'Journal of the Indian Society of Agricultural Statistics, 75(1), 47-53',
      impactFactor: '',
      naas: '4.85',
      year: 2021,
    },
    {
      authors:
        'Vinaykumar L.N., Ahmad, T., Rai, A., and Biswas, A.*',
      title:
        'Rescaling bootstrap variance estimation of level-0 ranked set sampling under finite population framework',
      publisher:
        'Journal of the Indian Society of Agricultural Statistics, 75(3) 203–211',
      impactFactor: '',
      naas: '4.85',
      year: 2021,
    },
    {
      authors:
        'Kumar R., Rai, A., Ahmad T., Biswas, A.* and Moury, P. K.',
      title:
        'Rescaling bootstrap technique for variance estimation in dual frame surveys',
      publisher:
        'Journal of the Indian Society of Agricultural Statistics, 75(2), 117–125',
      impactFactor: '',
      naas: '4.85',
      year: 2021,
    },
    {
      authors: 'Biswas, A.*, Rai, A. and Ahmad, T.',
      title:
        'Spatial bootstrap variance estimation method for missing survey data',
      publisher:
        'Journal of the Indian Society of Agricultural Statistics, 74(3), 227–236',
      impactFactor: '',
      naas: '4.85',
      year: 2020,
    },
    {
      authors:
        'Biswas, A.*, Rai, A., Ahmad, T. and Sahoo, P.M.',
      title:
        'Rescaled spatial bootstrap variance estimation of spatial estimator of finite population parameters under ranked set sampling',
      publisher:
        'Journal of the Indian Society of Agricultural Statistics, 74(2), 137–147',
      impactFactor: '',
      naas: '4.85',
      year: 2020,
    },
    {
      authors: 'Biswas, A.*, Aditya, K., Sud U.C., and Basak, P',
      title:
        'Product type calibration estimation of finite population total under two stage sampling.',
      publisher:
        'Journal of the Indian Society of Agricultural Statistics, 74(1), 23–32.',
      impactFactor: '',
      naas: '4.85',
      year: 2020,
    },
    {
      authors:
        'Dasgupta, P., Ahmad, T., Rai, A. and Biswas, A.*',
      title:
        'Bootstrap variance estimation technique under dual frame ranked set sampling',
      publisher:
        'Journal of the Indian Society of Agricultural Statistics, 73(3), 197–206',
      impactFactor: '',
      naas: '4.85',
      year: 2019,
    },
    {
      authors: 'Biswas, A., Ahmad, T. and Rai, A.',
      title:
        'Variance estimation using Jackknife method in ranked set sampling under finite population framework',
      publisher:
        'Journal of the Indian Society of Agricultural Statistics, 67(3), 345-353',
      impactFactor: '',
      naas: '4.85',
      year: 2013,
    },
    {
      authors:
        'Naveen G.P., Sahoo, P.M., Das, P., Ahmad, T. and Biswas, A.',
      title:
        'Random Forest Spatial Interpolation Techniques for Crop Yield Estimation at District Level',
      publisher:
        'Journal of the Indian Society of Agricultural Statistics, 78(1), 9–19',
      impactFactor: '',
      naas: '4.85',
      year: 2024,
    },
    {
      authors:
        'Kumar, P.D., Aditya, K., Ahmad, T., Biswas, A. and Tripathi, S.P.',
      title:
        'A new two auxiliary calibration estimator of the population total in two stage sampling design using nonlinear constraints',
      publisher:
        'Journal of the Indian Society of Agricultural Statistics, 77(3), 265–274',
      impactFactor: '',
      naas: '4.85',
      year: 2023,
    },
    {
      authors: 'Kumar, R., Biswas, A., and Singh, D.',
      title:
        'Estimation of ratio in finite population using calibration approach under different calibrated weights systems',
      publisher:
        'Journal of the Indian Society of Agricultural Statistics, 77(2), 225–232',
      impactFactor: '',
      naas: '4.85',
      year: 2023,
    },
    {
      authors:
        'Ahmad, T., Biswas, A., Sud, U.C., Sahoo, P.M. and Singh, M.',
      title:
        'Sampling methodology for estimation of private food grains stock at farm level aligned with input survey of agriculture census in India',
      publisher:
        'Journal of the Indian Society of Agricultural Statistics, 77(1), 95–104',
      impactFactor: '',
      naas: '4.85',
      year: 2023,
    },
    {
      authors:
        'Udgata, A.R., Sahoo, P.M., Ahmad, T., Rai, A., Biswas, A. and Krishna, G.',
      title:
        'Integration of survey data and satellite data for acreage estimation of mango (Mangifera indica)',
      publisher:
        'Journal of the Indian Society of Agricultural Statistics, 74(3), 237–242',
      impactFactor: '',
      naas: '4.85',
      year: 2020,
    },
    {
      authors:
        'Chowdhary, D., Bharadwaj, A., Sehgal, V.K., Kumar, M., Sudeep, Biswas, A., Parsad, R. and Verma, R.',
      title:
        'Development of mega-environment for maize in India using GIS approach.',
      publisher:
        'Journal of the Indian Society of Agricultural Statistics, 73(1), 79–86',
      impactFactor: '',
      naas: '4.85',
      year: 2019,
    },
    {
      authors:
        'Paul, N.C., Sahoo, P.M., Sahoo, R.N., Das, B., Biswas, A., Krishna, G., Rai, A. and Ahmad, T.',
      title:
        'Comparative evaluation between multispectral and hyperspectral data for discrimination of fruit crops using statistical techniques',
      publisher:
        'Journal of Indian Society of Agricultural Statistics, 72(3), 187-191',
      impactFactor: '',
      naas: '4.85',
      year: 2018,
    },
    {
      authors: 'Aditya, K., Sud, U.C., Chandra, H. and Biswas, A.',
      title:
        'Calibration based regression type estimator of the population total under two stage sampling design',
      publisher:
        'Journal of Indian Society of Agricultural Statistics, 70(1), 19-24',
      impactFactor: '',
      naas: '4.85',
      year: 2016,
    },
    {
      authors: 'Aditya, K., Bhowmik, A., Biswas, A. and Das, S.',
      title:
        'Calibration Estimators under Two Stage Sampling Design when Population Level Auxiliary Information was not available',
      publisher:
        'Journal of the Society for Application of Statistics in Agriculture and Allied Sciences - Rashi, 2(2), 1-6',
      impactFactor: '',
      naas: '',
      year: 2017,
    },
  ];

const sortedPapers = [...researchPapers].sort((a, b) => b.year - a.year);

  const renderAuthors = (s: string) => {
    const html = s
      .replace(/Biswas,\s*A\*?/g, "<strong>Biswas, A</strong>")
      .replace(/Biswas,\s*Ankur/g, "<strong>Biswas, Ankur</strong>");
    return <span dangerouslySetInnerHTML={{ __html: html }} />;
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold text-blue-900 mb-4 text-center">
        Research Papers
      </h2>

      <div className="w-full">
        <h5
          className="text-white text-center py-1 mb-3 rounded"
          style={{ backgroundColor: "#4682B4" }}
        >
          Research Papers
        </h5>

        <div className="overflow-x-auto">
          <table className="min-w-full table-auto border border-gray-300">
            <thead className="bg-gray-200 text-center font-semibold">
              <tr>
                <th className="px-4 py-2 text-center">Name</th>
                <th className="px-4 py-2 text-center">Title</th>
                <th className="px-4 py-2 text-center">Year</th>
                <th className="px-4 py-2 text-center">Publisher</th>
                <th className="px-4 py-2 text-center">Impact Factor</th>
                <th className="px-4 py-2 text-center">NAAS Rating</th>
              </tr>
            </thead>

            <tbody>
              {sortedPapers.map((p, idx) => (
                <tr
                  key={idx}
                  className={`${
                    idx % 2 === 0 ? 'bg-white' : 'bg-gray-200'
                  } hover:bg-gray-100 text-left`}
                >
                  <td className="align-top px-4 py-2">{renderAuthors(p.authors)}</td>
                  <td className="align-top px-4 py-2">{p.title}</td>
                  <td className="align-top px-4 py-2 text-center">{p.year}</td>
                  <td className="align-top px-4 py-2">{p.publisher}</td>
                  <td className="align-top px-4 py-2 text-center">
                    {p.impactFactor || ''}
                  </td>
                  <td className="align-top px-4 py-2 text-center">{p.naas || ''}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ResearchPapers;