import Navbar from './components/Navbar/Navbar';
import AuthPage from './pages/AuthPage/AuthPage';
import Registration from './pages/Registration/Registration';
import { Routes, Route } from 'react-router-dom'

import './App.scss';



function App() {
  return (
    <div className="App">
      <div className='contauenr'>
      <Navbar />
        <Routes>
          <Route path="/" element={<AuthPage/>}/>
          <Route path="/registration" element={<Registration/>}/>
        </Routes>
      </div>
    </div>
  );
}

export default App;
