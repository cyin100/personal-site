import YoutubeEmbed from './YoutubeEmbed'

function Music () {
    return (
        <div>
            <div className = 'bg-gray-800 flex bg-white w-36 mx-auto mb-5 shadow-md rounded-lg p-3'>
                <h1 className='text-2xl font-bold mx-auto text-white mr-2'>Music</h1>
                <div className="bg-[url('images\\icons\\spotify2.png')] bg-contain bg-no-repeat bg-center w-full"></div>
            </div>
            <div className = 'flex bg-white w-full mb-5 shadow-md rounded-lg'>
                <div className = 'p-5 mx-auto'>
                    <h1 className='md:text-2xl text-center mb-5'>Find me on your preferred music platform!</h1>
                    <div className = 'grid grid-cols-5 mb-10'>
                        
                        <a href="https://youtube.com/conneryin" className="basis-1/6 bg-[url('images\\icons\\youtube.png')] bg-contain bg-no-repeat bg-center mx-auto rounded-full p-8 transition duration-150 ease-out hover:ease-in hover:animate-pulse"></a>
                        <a href="https://open.spotify.com/artist/2oH0y07V1SXG3f47EbRJHl?si=yJ6nWCeEQrmg3MPdmd0dJQ" className="basis-1/6 bg-[url('images\\icons\\spotify.png')] bg-contain bg-no-repeat bg-center mx-auto rounded-full p-8 transition duration-150 ease-out hover:ease-in hover:animate-pulse"></a>
                        <a href="https://soundcloud.com/conner-yin/" className="basis-1/6 bg-[url('images\\icons\\soundcloud.png')] bg-contain bg-no-repeat bg-center mx-auto rounded-full p-8 transition duration-150 ease-out hover:ease-in hover:animate-pulse"></a>
                        <a href="https://music.amazon.com/artists/B08R2LDBGM/conner-yin" className="basis-1/6 bg-[url('images\\icons\\amazon.png')] bg-contain bg-no-repeat bg-center mx-auto rounded-full p-8 transition duration-150 ease-out hover:ease-in hover:animate-pulse"></a>
                        <a href="https://music.apple.com/us/artist/conner-yin/1545807862" className="basis-1/6 bg-[url('images\\icons\\apple.png')] bg-contain bg-no-repeat bg-center mx-auto rounded-full p-8 transition duration-150 ease-out hover:ease-in hover:animate-pulse"></a>
                        
                    </div>
                    <div className = 'flex bg-gradient-to-r from-blue-500 to-green-500 rounded-lg p-5 mb-5 shadow-lg'>
                        <div className = 'text-white'>
                            <h1 className='md:text-2xl font-bold'>RECENT POST</h1> 
                            <h2 className='md:text-l'>Girl Next Door (DELTARUNE Ch 2)</h2>
                            <p className='md:text-l text-gray-300 italic'>Orchestral/Synth Remix</p>
                        </div>
                        <div className = 'mx-10'>
                            <YoutubeEmbed embedId = "EHrEX-wvvJk"/>
                        </div>
                        <div></div>
                    </div>
                    <div className = 'flex bg-gradient-to-r from-rose-500 to-amber-500 rounded-lg p-5 mb-3 shadow-lg'>
                        <div className = 'text-white'>
                            <h1 className='md:text-2xl font-bold'>FEATURED</h1> 
                            <h2 className='md:text-l'>Fall Asleep on Call - Conner Yin</h2>
                            <p className='md:text-l text-gray-300 italic'>Original Pop Song</p>
                        </div>
                        <div className = 'mx-14'>
                            <YoutubeEmbed embedId = "ofErXCY6kDg"/>
                        </div>
                        <div></div>
                    </div>      
                </div>
            </div>       
        </div>
        
    );
  }
  
  export default Music;