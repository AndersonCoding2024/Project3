import NavBar from './components/NavBar/NavBar';
import Footer from './components/Footer/Footer';
import Page from './components/Page/Page';
import './App.css';

const App = () => {
  return (
    <div className="app">
      <NavBar />
      <main>
        <Page />
      </main>
      <Footer />
    </div>
  );
};

export default App;