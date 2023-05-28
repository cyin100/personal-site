function Navbar () {
    return (
        <div className="fixed top-0 bg-black w-screen backdrop-filter backdrop-blur-lg bg-opacity-20 border-b border-gray-200 scroll-smooth">
            <div className="max-w-5xl mx-auto px-6">
                <div className="flex items-center justify-between h-16">
                    <div className="flex space-x-5 md:space-x-10 md:text-lg text-sm text-white text-center font-bold mx-auto mt-5">
                        <a href="#about" className='rounded-lg w-full mb-5 w-7/12 p-2 transition duration-150 ease-out hover:ease-in bg-opacity-10 bg-black hover:backdrop-blur-lg 
                            hover:backdrop-filter hover:bg-opacity-30'>About</a>
                        <a href="#projects" className='rounded-lg w-full mb-5 w-7/12 p-2 transition duration-150 ease-out hover:ease-in bg-opacity-10 bg-black hover:backdrop-blur-lg 
                            hover:backdrop-filter hover:bg-opacity-30'>Projects</a>
                        <a href="#experience" className='rounded-lg w-full mb-5 w-7/12 p-2 transition duration-150 ease-out hover:ease-in bg-opacity-10 bg-black hover:backdrop-blur-lg 
                            hover:backdrop-filter hover:bg-opacity-30'>Experience</a>
                        <a href="#music" className='rounded-lg w-full mb-5 w-7/12 p-2 transition duration-150 ease-out hover:ease-in bg-opacity-10 bg-black hover:backdrop-blur-lg 
                            hover:backdrop-filter hover:bg-opacity-30 hover:border-white'>Music</a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Navbar;