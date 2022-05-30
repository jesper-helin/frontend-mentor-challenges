import '../styles/timer.scss';
import { useState } from 'react';

const Timer = () => {
   const [days, setDays] = useState(0);
   const [hours, setHours] = useState(0);
   const [minutes, setMinutes] = useState(0);
   const [seconds, setSeconds] = useState(0);

   const timer = () => {
      // Get the current date.
      const currentDate = new Date();

      // Get the date of the event.
      const eventDate = new Date('2022-09-07T00:00:00');

      // Get the difference between the current date and the event date.
      const diff = eventDate.getTime() - currentDate.getTime();

      // If the difference is negative, the event has passed.
      if (diff < 0) {
         // Set the state of the timer to 0.
         setDays(0);
         setHours(0);
         setMinutes(0);
         setSeconds(0);
      } else {
         // Get the days, hours, minutes and seconds from the difference.
         const days = Math.floor(diff / (1000 * 60 * 60 * 24));
         const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
         const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
         const seconds = Math.floor((diff % (1000 * 60)) / 1000);

         // Set the state of the timer to the days, hours, minutes and seconds.
         setDays(days);
         setHours(hours);
         setMinutes(minutes);
         setSeconds(seconds);
      }
   };

   // Call the timer function every second.
   setInterval(timer, 1000);

   return (
      <div className="timer-container">
         <div className="days-container">
            <div className="days time-container">
               <span>{days}</span>
            </div>
            <div className="days-text text">Days</div>
         </div>
         <div className="hours-container">
            <div className="hours time-container">
               <span>{hours}</span>
            </div>
            <div className="hours-text text">Hours</div>
         </div>
         <div className="minutes-container">
            <div className="minutes time-container">
               <span>{minutes}</span>
            </div>
            <div className="minutes-text text">Minutes</div>
         </div>
         <div className="seconds-container">
            <div className="seconds time-container">
               <span>{seconds}</span>
            </div>
            <div className="seconds-text text">Seconds</div>
         </div>
      </div>
   );
};

export default Timer;
