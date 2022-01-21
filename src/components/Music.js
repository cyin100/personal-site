import YoutubeEmbed from './YoutubeEmbed'

function Music () {
    return (
        <div>
            <div className = 'flex bg-white w-full mb-5 shadow-md rounded-lg'>
                <div className = 'p-5 mx-auto'>
                    <h1 className='md:text-2xl text-center mb-5'>Find me on your preferred music platform!</h1>
                    <div className = 'grid grid-cols-5 mb-5'>
                        
                        <a href="https://youtube.com/conneryin" className="basis-1/6 bg-[url('images\\icons\\youtube.png')] bg-contain bg-no-repeat bg-center mx-auto rounded-full p-8 transition duration-150 ease-out hover:ease-in hover:animate-pulse"></a>
                        <a href="https://open.spotify.com/artist/2oH0y07V1SXG3f47EbRJHl?si=yJ6nWCeEQrmg3MPdmd0dJQ" className="basis-1/6 bg-[url('images\\icons\\spotify.png')] bg-contain bg-no-repeat bg-center mx-auto rounded-full p-8 transition duration-150 ease-out hover:ease-in hover:animate-pulse"></a>
                        <a href="https://soundcloud.com/conner-yin/" className="basis-1/6 bg-[url('images\\icons\\soundcloud.png')] bg-contain bg-no-repeat bg-center mx-auto rounded-full p-8 transition duration-150 ease-out hover:ease-in hover:animate-pulse"></a>
                        <a href="https://music.amazon.com/artists/B08R2LDBGM/conner-yin" className="basis-1/6 bg-[url('images\\icons\\amazon.png')] bg-contain bg-no-repeat bg-center mx-auto rounded-full p-8 transition duration-150 ease-out hover:ease-in hover:animate-pulse"></a>
                        <a href="https://music.apple.com/us/artist/conner-yin/1545807862" className="basis-1/6 bg-[url('images\\icons\\apple.png')] bg-contain bg-no-repeat bg-center mx-auto rounded-full p-8 transition duration-150 ease-out hover:ease-in hover:animate-pulse"></a>
                        
                    </div>
                    <div className = 'grid grid-col-2 grid-row-2 bg-black rounded-lg p-5'>
                        <div className = 'text-white'>
                            <h1 className='md:text-2xl font-bold'>FEATURED</h1> 
                            <p>testing</p>
                        </div>
                        <div className = ''>
                            <YoutubeEmbed embedId = "EHrEX-wvvJk"/>
                        </div>
                        <div className = 'mx-auto'>
                            <YoutubeEmbed embedId = "ofErXCY6kDg"/>
                        </div>
                        <div> hi </div>
                    </div>    
                </div>
            </div>       
        </div>
        
    );
  }
  
  export default Music;