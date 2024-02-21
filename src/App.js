import './App.css';
import Certificates from './components/certificates/Certificates';
import Contact from './components/contact/Contact';
import Home from './components/home/Home';
import Portfolio from './components/portfolio/Portfolio';
import Resume from './components/resume/Resume';
import Service from './components/servcie/Service';
import Sidebar from './components/sidebar/Sidebar';


function App() {
  return (
    <>
      <Sidebar/>
      <main className="main">
        <Home/>
        <Resume/>
        <Service/>
        <Portfolio/>
        <Certificates/>
        <Contact/>
      </main>
    </>
  );
}

export default App;
