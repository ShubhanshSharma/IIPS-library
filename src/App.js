import logo from './logo.svg';
import './App.css';
import homeImage from '../src/Assets/73Z_2108.w023.n001.896B.p1.896.jpg';
import Landing from './Components/Landing page/Landing';
import { Route, Routes } from 'react-router';
import Dashboard from './Components/Dashboard/Dashboard';

function App() {
  return (
    <div className="App  flex flex-col overflow-x-hidden">
      <Routes>
        <Route path='/' element={<Landing />}/>
        <Route path='/dashboard' element={<Dashboard />} />
      </Routes>

      
    </div>
  );
}

export default App;
