import './PlanetData.scss';
import { useState, useEffect } from 'react';

const PlanetData = ({ data }) => {
   const [image, setImage] = useState();

   const loadImage = async (imageName) => {
      import(`../../assets/destination/${imageName}`).then((image) => {
         setImage(image.default);
      });
   };

   useEffect(() => {
        loadImage(data.images.webp);
   }, [data])

   return (
      <>
         <div className="planet-image">
            <img src={image} alt={data.name} />
         </div>
         <div className="planet-information">
            <h2>{data.name}</h2>
            <p>
                {data.description}
            </p>
            <div className="planet-information-line"></div>
            <div className="planet-additional-information">
               <div>
                  <span className="subHeading2">avg. distance</span>
                  <span className="subHeading1">{data.distance}</span>
               </div>
               <div>
                  <span className="subHeading2">est. travel time</span>
                  <span className="subHeading1">{data.travel}</span>
               </div>
            </div>
         </div>
      </>
   );
};

export default PlanetData;
