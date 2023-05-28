import Project from './Projects';
import projectsData from '../data/projects.json';

function ProjectsMain () {
    return (
        <div>
            <div className = 'mt-8 bg-gradient-to-r from-pink-500 to-orange-500 flex bg-white w-40 mx-auto mb-5 shadow-md rounded-lg p-3'>
                <h1 className='md:text-2xl font-bold mx-auto text-white mr-2'>Projects</h1>
                <div className="bg-[url('images\\icons\\github.png')] bg-contain bg-no-repeat bg-center w-full"></div>
            </div>
            <div>
                {projectsData.map((project) => (
                    <Project project={project} key={project.id} />
                ))}
            </div>
        </div>
    )
  }

    
  
  export default ProjectsMain;