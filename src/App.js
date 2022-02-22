import { } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';
import { BrowserRouter, Link, Route, Router, Routes } from 'react-router-dom';
import './App.css';
import Dashboard from './components/pages/Dashboard/Dashboard';
import Home from './components/pages/home/Home';



function App() {
  return (
    
    <BrowserRouter >
      <div className="App">
        <nav>
            <Link to="/">Home</Link>
            <Link to="/dashboard">dashboard</Link>
        </nav>
        <Routes>
          <Route exact path='/' element={<Home/>} >
          </Route>

          <Route exact path='/dashboard' element={<Dashboard/>}>
          </Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
