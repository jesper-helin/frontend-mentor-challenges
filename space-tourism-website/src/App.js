import './App.scss';
import Nav from './components/Nav';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home/';
import Destination from './pages/Destination';
import { useState, useEffect } from 'react';

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
            </Routes>
         )}
      </>
   );
};

export default App;
