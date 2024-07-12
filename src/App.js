import logo from './logo.svg';
import './App.css';
import Landing from './Components/Landing page/Landing';
import { Route, Routes } from 'react-router';
import Dashboard from './Components/Dashboard/Dashboard';
import LibraryManager from './Components/Library manager/libraryManager';
import LibraryDashboard from './Components/libraryDashboard/libraryDashboard';
import LibraryUsers from './Components/Library Users/LibraryUsers';
import LibraryBooks from './Components/Library Books/LibraryBooks';


function App() {
  return (
    <div className="App  flex flex-col overflow-x-hidden">
      <Routes>
        <Route path='/' element={<Landing />}/>
        <Route path='/dashboard' element={<Dashboard />} />
        <Route path='/libraryManager' element={<LibraryManager />} />
        <Route path='/libraryDashboard' element={<LibraryDashboard />} />
        <Route path='/libraryUsers' element={<LibraryUsers />} />
        <Route path='/libraryBooks' element={<LibraryBooks />} />


      </Routes>

      
    </div>
  );
}

export default App;
