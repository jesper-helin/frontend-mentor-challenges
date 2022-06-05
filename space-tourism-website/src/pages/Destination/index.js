import PlanetData from '../../components/PlanetData';
import './Destination.scss';
import { useState } from 'react';

const Destination = ({ pageHeading, data }) => {
   const [selectedPlanet, setSelectedPlanet] = useState(0);

   return (
      <div className="destination-page">
         <div className="destination-page-content">
            {pageHeading}
            <div className='planet-selector-container'>
               {data.map((planet, index) => (
                  <>
                     <button
                        onClick={(e) => setSelectedPlanet(index)}
                        key={index}
                        className="planet-selector-button"
                     >
                        {planet.name}
                     </button>
                  </>
               ))}
            </div>
            <div className="planet-data">
               <PlanetData data={data[selectedPlanet]} />
            </div>
         </div>
      </div>
   );
};

export default Destination;
