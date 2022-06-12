import './CrewData.scss';
import { useState, useEffect } from 'react';

const CrewData = ({ data, crewChange }) => {
   const [image, setImage] = useState();

   const loadImage = async (imageName) => {
      import(`../../assets/crew/${imageName}`).then((image) => {
         setImage(image.default);
      });
   };

   useEffect(() => {
      loadImage(data.images.webp);
   }, [data]);

   return (
      <>
         <div className="crew-information">
            <h4>{data.role}</h4>
            <h3>{data.name}</h3>
            <p>{data.bio}</p>
            <div className='crew-selection-buttons'>{crewChange}</div>
         </div>
         <div className="crew-image">
            <img src={image} alt={data.name} />
         </div>
      </>
   );
};

export default CrewData;
