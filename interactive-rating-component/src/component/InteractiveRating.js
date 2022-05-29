import styles from '../styles/InteractiveRating.module.scss';
import { useState } from 'react';

const InteractiveRating = () => {
   const [rating, setRating] = useState(0);
   const [showThankYou, setShowThankYou] = useState(false);

   const thankYouMessage = (e) => {
      e.preventDefault();
      setShowThankYou(true);
   };

   return (
      <div className={styles.container}>
         {!showThankYou ? (
            <div className={styles.ratingContainer}>
               <img src="./icon-star.svg" alt="star" className={styles.star} />
               <h1>How did we do?</h1>
               <p>
                  Please let us know how we did with your support request. All
                  feedback is appreciated to help us improve our offering!
               </p>
               <div className={styles.ratingNumbersContainer}>
                  <form onSubmit={(e) => thankYouMessage(e)}>
                     <div>
                        <label>
                           <input
                              type="radio"
                              name="rating"
                              onChange={(e) => setRating(e.target.value)}
                              value="1"
                           />
                           <span>1</span>
                        </label>
                        <label>
                           <input
                              type="radio"
                              name="rating"
                              onChange={(e) => setRating(e.target.value)}
                              value="2"
                           />
                           <span>2</span>
                        </label>
                        <label>
                           <input
                              type="radio"
                              name="rating"
                              onChange={(e) => setRating(e.target.value)}
                              value="3"
                           />
                           <span>3</span>
                        </label>
                        <label>
                           <input
                              type="radio"
                              name="rating"
                              onChange={(e) => setRating(e.target.value)}
                              value="4"
                           />
                           <span>4</span>
                        </label>
                        <label>
                           <input
                              type="radio"
                              name="rating"
                              onChange={(e) => setRating(e.target.value)}
                              value="5"
                           />
                           <span>5</span>
                        </label>
                     </div>
                     <input type="submit" value="Submit" />
                  </form>
               </div>
            </div>
         ) : (
            <div className={styles.thankYouContainer}>
               <img src="./illustration-thank-you.svg" alt="star" />
               <div className={styles.rating}>
                  <span>You selected {rating} out of 5</span>
               </div>
               <h1>Thank you!</h1>
               <p>
                  We appreciate you taking the time to give a rating. If you
                  ever need more support, don’t hesitate to get in touch!
               </p>
            </div>
         )}
      </div>
   );
};

export default InteractiveRating;
