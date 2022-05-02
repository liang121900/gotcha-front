// import { } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import './App.css';
import Dashboard from './components/pages/Dashboard/Dashboard';
import Home from './components/pages/home/Home';
import useBook from './hooks/useBook';


function App() {
  const { bookId, errorMessage } = useBook();


  return (

    <BrowserRouter >
      <div className="App">
        <nav>
          <Link to="/">Home</Link>
          <Link to="/dashboard">dashboard</Link>
        </nav>
        <Routes>
          <Route exact path='/' element={<Home />} >
          </Route>

          <Route exact path='/dashboard' element={<Dashboard />}>
          </Route>
        </Routes>

        {bookId && <h3>Created Book ID: {bookId}</h3>}
        {errorMessage && <h3>Create Book Request Error: {errorMessage}</h3>}
      </div>
    </BrowserRouter>
  );
}

export default App;
