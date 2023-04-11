function Header () {
    return (
        <div>
            <div className = "flex bg-white mb-10 shadow-lg rounded-full mx-auto p-4 h-48 w-48">
                <span className="bg-[url('images\\Conner2.jpg')] bg-contain bg-no-repeat bg-center mx-auto rounded-full p-20"></span>
            </div>

            <a href="https://drive.google.com/file/d/1OTAM_mxRPQMCXNjg2C8iMs3SNf0wN30K/view?usp=sharing" class="flex w-24 mx-auto bg-transparent border-4 border-white text-white transition duration-150 ease-out hover:ease-in hover:bg-white hover:text-black font-bold py-2 px-4 rounded-md mb-10">
                Resume
            </a>

            <div className = 'flex bg-white w-full mb-10 shadow-md rounded-lg'>
                <div className = 'px-2 py-5 mx-auto'>
                    <h1 className='md:text-2xl text-center'>Hi, I'm <b>Conner Yin</b>.</h1>
                    <p className='mt-4 text-center mb-8'>I'm a programmer and musician studying Computer Science and Engineering at Santa Clara University. Scroll down to see what I've been up to!</p>
                    <div className = 'grid grid-cols-5 mx-auto'>
                        <div></div>
                        <a href="https://github.com/cyin100" className="basis-1/6 bg-[url('images\\icons\\github.png')] bg-contain bg-no-repeat bg-center mx-auto rounded-full p-5 transition duration-150 ease-out hover:ease-in hover:animate-pulse"></a>
                        <a href="https://linkedin.com/in/conneryin" className="basis-1/6 bg-[url('images\\icons\\linkedin.png')] bg-contain bg-no-repeat bg-center mx-auto rounded-full p-5 transition duration-150 ease-out hover:ease-in hover:animate-pulse"></a>
                        <a href="mailto:conneryin@gmail.com" className="basis-1/6 bg-[url('images\\icons\\mail.png')] bg-contain bg-no-repeat bg-center mx-auto rounded-full p-5 transition duration-150 ease-out hover:ease-in hover:animate-pulse"></a>
                        <div></div>
                    </div>
                </div>
            </div> 
            <div id="arrow" className="bg-[url('\\images\\icons\\downarrow2.png')] brightness-100 bg-contain bg-no-repeat bg-center mx-auto p-5 animate-bounce">
                <a href = '#projects'></a>
            </div> 
        </div>
        
    );
  }
  
  export default Header;