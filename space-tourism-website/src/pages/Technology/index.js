import './Technology.scss';
import TechnologyData from '../../components/TechnologyData';
import { useState } from 'react';

const Technology = ({ pageHeading, data }) => {
   const [selectedTechnology, setSelectedTechnology] = useState(0);
   return (
      <div className="technology-page">
         <div className="technology-page-content">{pageHeading}</div>
         <div className="technology-data">
            <TechnologyData
               data={data[selectedTechnology]}
               technologyChange={data.map((technology, index) => (
                  <button
                     onClick={(e) => setSelectedTechnology(index)}
                     key={index}
                     className="technology-selector-button"
                  >
                     {index}
                  </button>
               ))}
            />
         </div>
      </div>
   );
};

export default Technology;
