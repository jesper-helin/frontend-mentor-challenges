import './TechnologyData.scss';
import { useState, useEffect } from 'react';

const TechnologyData = ({ data, technologyChange }) => {
   const [image, setImage] = useState();

   const loadImage = async (imageName) => {
      import(`../../assets/technology/${imageName}`).then((image) => {
         setImage(image.default);
      });
   };

   useEffect(() => {
      loadImage(data.images.portrait);
   }, [data]);

   return (
      <>
         <div className="technology-selection-buttons">{technologyChange}</div>
         <div className="technology-information">
            <h4>The terminology...</h4>
            <h3>{data.name}</h3>
            <p>{data.description}</p>
         </div>
         <div className="technology-image">
            <img src={image} alt={data.name} />
         </div>
      </>
   );
};

export default TechnologyData;
