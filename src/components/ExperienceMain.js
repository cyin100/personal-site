import Experience from './Experience';
import experienceData from '../data/experiences.json';

function ExperienceMain() {
    return (
        <div>
            <div className = 'mt-8 bg-gradient-to-r from-blue-500 to-green-400 flex bg-white w-48 mx-auto mb-5 shadow-md rounded-lg p-3'>
                <h1 className='md:text-2xl text-lg font-bold mx-auto text-white mr-2'>Experience</h1>
                <a href="https://linkedin.com/in/conneryin" className="bg-[url('images\\icons\\linkedin.png')] bg-contain bg-no-repeat bg-center w-full transition duration-150 ease-out hover:ease-in hover:animate-pulse"></a>
            </div>
            <div>
                {experienceData.map((experience) => (
                    <Experience experience={experience} key={experience.id} />
                ))}
            </div>
        </div>
    )
  }

  export default ExperienceMain;