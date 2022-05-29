import '../styles/timer.scss';

const Timer = () => {
   return (
      <div className="timer-container">
         <div className="days-container">
            <div className="days time-container"><span>08</span></div>
            <div className="days-text text">Days</div>
         </div>
         <div className="hours-container">
            <div className="hours time-container"><span>23</span></div>
            <div className="hours-text text">Hours</div>
         </div>
         <div className="minutes-container">
            <div className="minutes time-container"><span>55</span></div>
            <div className="minutes-text text">Minutes</div>
         </div>
         <div className="seconds-container">
            <div className="seconds time-container"><span>41</span></div>
            <div className="seconds-text text">Seconds</div>
         </div>
      </div>
   );
};

export default Timer;
