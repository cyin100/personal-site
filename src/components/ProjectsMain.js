import Project from './Projects';
import projects from '../data/projects.json';

function ProjectsMain () {
    return (
        <div>
            <div className = 'mt-8 bg-gradient-to-r from-pink-500 to-orange-500 flex bg-white w-40 mx-auto mb-5 shadow-md rounded-lg p-3'>
                <h1 className='md:text-2xl font-bold mx-auto text-white mr-2'>Projects</h1>
                <div className="bg-[url('images\\icons\\github.png')] bg-contain bg-no-repeat bg-center w-full"></div>
            </div>
            <div>
                <div className = 'flex bg-white w-full mb-5 shadow-md rounded-lg'>
                    <div className='w-1/3 p-5'>
                        <div className="bg-[url('images\\visualmemory.gif')] bg-contain bg-no-repeat bg-center w-full h-full"></div>
                    </div>
                    <div className = 'w-2/3 p-5'>
                        <h1 className='md:text-2xl font-bold'>Human Benchmark Bot</h1>
                        <hr></hr>
                        <div className='mt-4 mb-5'>Produces scores above human limits on the Human Benchmark Tests (humanbenchmark.com) using selenium</div>
                        <span className='bg-blue-600 text-white rounded-lg p-2 w-16 text-center mr-2'>Python</span>
                        <span className='bg-amber-500 text-white rounded-lg p-2 w-16 text-center mr-2'>Selenium Webdriver</span>
                        <span className='bg-green-500 text-white rounded-lg p-2 w-16 text-center mr-2'>pyautogui</span>
                    </div>
                </div>
            </div>

            <div>
                <div className = 'flex bg-white w-full mb-5 shadow-md rounded-lg'>
                    <div className='w-1/3 p-5'>
                        <div className="bg-[url('images\\personalsite.jpg')] bg-contain bg-no-repeat bg-center w-full h-full"></div>
                    </div>
                    <div className = 'w-2/3 p-5'>
                        <div>
                            <h1 className='md:text-2xl font-bold w-3/5'>Personal Site</h1>
                            <hr></hr>
                            <div className="bg-[url('images\\icons\\spotify.png')] bg-contain bg-no-repeat bg-center w-1/5"></div>
                        </div>
                        <div className='mt-4 mb-5'>This site! Built from scratch with HTML/CSS/JS using React JS and Tailwind CSS frameworks</div>
                        <span className='bg-cyan-600 text-white rounded-lg p-2 w-16 text-center mr-2'>React</span>
                        <span className='bg-purple-500 text-white rounded-lg p-2 w-16 text-center'>Tailwind CSS</span>
                    </div>
                </div>
            </div>

            <div>
                <div className = 'flex bg-white w-full mb-5 shadow-md rounded-lg'>
                    <div className='w-1/3 p-5'>
                        <div className="bg-[url('images\\undertale.jpg')] bg-contain bg-no-repeat bg-center w-full h-full"></div>
                    </div>
                    <div className = 'w-2/3 p-5'>
                        <h1 className='md:text-2xl font-bold'>Undertale File Loaders</h1>
                        <hr></hr>
                        <div className='mt-4 mb-5'>Allows users to efficiently load save files from specific spots in UNDERTALE and DELTARUNE with python</div>
                        <span className='bg-blue-600 text-white rounded-lg p-2 w-16 text-center mr-2'>Python</span>
                        <span className='bg-red-500 text-white rounded-lg p-2 w-16 text-center'>File I/O</span>
                    </div>
                </div>
            </div>

            <div>
                <div className = 'flex bg-white w-full mb-5 shadow-md rounded-lg'>
                    <div className='w-1/3 p-5'>
                        <div className="bg-[url('images\\whitecolorbk.png')] bg-contain bg-no-repeat bg-center w-full h-full"></div>
                    </div>
                    <div className = 'w-2/3 p-5'>
                        <h1 className='md:text-2xl font-bold'>Voluntarius</h1>
                        <hr></hr>
                        <div className='mt-4 mb-5'>Connecting those in need with volunteers, Hack for Humanity 2022. Built with Flutter, Firebase, and Node.JS</div>
                        <span className='bg-cyan-400 text-white rounded-lg p-2 w-16 text-center mr-2'>Flutter</span>
                        <span className='bg-orange-600 text-white rounded-lg p-2 w-16 text-center mr-2'>Firebase</span>
                        <span className='bg-yellow-600 text-white rounded-lg p-2 w-16 text-center'>Node.JS</span>
                    </div>
                </div>
            </div>
        </div>
    );
  }
  
  export default ProjectsMain;