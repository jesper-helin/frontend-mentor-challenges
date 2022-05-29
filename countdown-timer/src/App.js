import './App.scss';
import Timer from './Components/Timer';

const App = () => {
   return (
      <div className="app">
         <main>
            <h1>We're launching soon</h1>
            <Timer />
         </main>
      </div>
   );
};

export default App;
