// src/App.jsx
import { BrowserRouter as Router } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';
import Footer from './components/Footer/Footer';
import Page from './components/Page/Page';
import './App.css';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
  return (
    <Router>
      <div className="app">
        <NavBar />
        <main>
          <Page />
        </main>
        <Footer />
        <ToastContainer position="top-center" autoClose={3000} />
      </div>
    </Router>
  );
};

export default App;