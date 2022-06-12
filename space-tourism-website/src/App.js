import './App.scss';
import Nav from './components/Nav';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home/';
import Destination from './pages/Destination';
import { useState, useEffect } from 'react';
import Crew from './pages/Crew';
import Technology from './pages/Technology';

const App = () => {
   const [data, setData] = useState([]);

   useEffect(() => {
      const fetchData = async () => {
         const req = fetch('data/data.json', {
            headers: {
               'Content-Type': 'application/json',
               Accept: 'application/json',
            },
         });
         const res = await req;
         const json = await res.json();
         setData(json);
      };
      fetchData();
   }, []);

   return (
      <>
         <Nav />
         {data.length === 0 ? null : (
            <Routes>
               <Route path="/" element={<Home />}></Route>
               <Route
                  path="/destination"
                  element={
                     <Destination
                        pageHeading={
                           <h5>
                              <strong>01</strong>Pick your destination
                           </h5>
                        }
                        data={data.destinations}
                     />
                  }
               ></Route>
               <Route
                  path="crew"
                  element={
                     <Crew
                        pageHeading={
                           <h5>
                              <strong>02</strong>Meet your crew
                           </h5>
                        }
                        data={data.crew}
                     />
                  }
               ></Route>
               <Route
                  path="technology"
                  element={
                     <Technology
                        pageHeading={
                           <h5>
                              <strong>03</strong> Space launch 101
                           </h5>
                        }
                        data={data.technology}
                     />
                  }
               ></Route>
            </Routes>
         )}
      </>
   );
};

export default App;
