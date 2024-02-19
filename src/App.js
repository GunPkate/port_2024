import './App.css';
import About from './components/about/About';
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
        <About/>
        <Contact/>
        <Home/>
        <Resume/>
        <Service/>
        <Portfolio/>
      </main>
    </>
  );
}

export default App;
