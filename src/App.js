import './App.css';
import ProjectsMain from './components/ProjectsMain';
import ExperienceMain from './components/ExperienceMain';
import Header from './components/Header';
import Navbar from './components/Navbar';
import Music from './components/Music';
import Footer from './components/Footer';

function App(){
  return(
      <div>
        <Navbar />
        <div id="about" className = "bg-[url('images\\switzerland1.jpg')] bg-cover bg-center p-20">
          <div className='md:w-1/2 mx-auto'><Header /></div>
        </div>
        <div id = "projects" className='bg-gradient-to-r from-blue-200 to-red-100 rounded-lg py-10'>
          <div className='md:w-1/2 mx-auto'><ProjectsMain /></div>
        </div>
        <div id = "experience" className='bg-gradient-to-r from-blue-200 to-red-100 rounded-lg py-10'>
          <div className='md:w-1/2 mx-auto'><ExperienceMain /></div>
        </div>
        <div id = "music" className="bg-[url('images\\trianglify-lowres.png')] bg-cover py-8">
          <div className='md:w-1/2 mx-auto mb-10 mt-10'><Music /></div>
        </div>
        <div id = "footer" className='bg-gray-200'><Footer /></div>
      </div>
  );
}
export default App;
