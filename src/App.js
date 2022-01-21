import './App.css';
import Project from './components/Projects';
import Header from './components/Header';
import Navbar from './components/Navbar';
import Music from './components/Music';
import Footer from './components/Footer';
import projects from './data/projects.json';

function App(){
  return(
      <div>
        <div>
          <Navbar />
        </div>
        <div id="about" className = "bg-[url('images\\Sunset2.jpg')] bg-cover bg-center p-20">
          <div className='md:w-1/2 mx-auto'>
            <Header />
          </div>
        </div>
        <div id = "projects" className='bg-gray-200 py-8'>
          <div className='md:w-1/2 mx-auto'>
            {projects.map((project) => (
              <Project project = {project} key = {project.id} />
            ))}
          </div>
        </div>
        <div id = "music" className="bg-[url('images\\trianglify-lowres.png')] bg-cover py-8">
          <div className='md:w-1/2 mx-auto'>
            <Music />
          </div>
        </div>
        <div id = "footer" className='bg-gray-200'>
            <Footer />
        </div>
      </div>
  );
}
export default App;
