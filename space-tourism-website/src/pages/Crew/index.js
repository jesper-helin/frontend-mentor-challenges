import './Crew.scss';
import CrewData from '../../components/CrewData';
import { useState } from 'react';

const Crew = ({ pageHeading, data }) => {
   const [selectedCrew, setSelectedCrew] = useState(0);
   return (
      <div className="crew-page">
         <div className="crew-page-content">{pageHeading}</div>
         <div className="crew-data">
            <CrewData data={data[selectedCrew]} />
         </div>
      </div>
   );
};

export default Crew;
