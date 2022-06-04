import './App.scss';
import Nav from './components/Nav';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home/';

const App = () => {
   return (
      <>
         <Nav />
         <Routes>
            <Route path="/" element={<Home />}></Route>
         </Routes>
      </>
   );
};

export default App;
