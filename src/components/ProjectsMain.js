import Project from './Project';
import projectsData from '../data/projects.json';

function ProjectsMain () {
    return (
        <div>
            <div className = 'mt-8 bg-gradient-to-r from-pink-500 to-orange-500 flex bg-white w-40 mx-auto mb-5 shadow-md rounded-lg p-3'>
                <h1 className='md:text-2xl text-lg font-bold mx-auto text-white mr-2'>Projects</h1>
                <a href='https://github.com/cyin100' target='_blank' className="bg-[url('images\\icons\\github.png')] bg-contain bg-no-repeat bg-center w-full transition duration-150 ease-out hover:ease-in hover:animate-pulse"></a>
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