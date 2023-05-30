import images from '../data/images';

const tagColors = {
  'Flutter': 'bg-sky-500',
  'Firebase': 'bg-orange-600',
  'Flask': 'bg-yellow-300',
  'Node.js': 'bg-lime-500', 
  'Python': 'bg-amber-500',
  'PyAutoGUI': 'bg-purple-400',
  'Selenium': 'bg-green-400',
  'React': 'bg-blue-700',
  'Tailwind': 'bg-cyan-400'
}

function Experience({ experience: { title, description, image, tags, github, devpost} }) {
  let imagePath = images[image]

  return (
    <div>
      <div className = 'flex bg-stone-100 w-full mb-5 shadow-md rounded-lg'>
        <div className='bg-black rounded-lg w-1/3 p-5'>
          <div style={{ backgroundImage: `url(${imagePath})` }} className='bg-contain bg-no-repeat bg-center w-full h-full'></div>
            </div>
              <div className = 'w-2/3 p-5'>
                <span className='md:text-2xl font-bold mr-4'>{title}</span>
                <a href={github} target="_blank" rel="noopener noreferrer" className="text-slate-500 hover:underline md:text-m mr-2">GitHub</a>
                {devpost && (<a href={devpost} target="_blank" rel="noopener noreferrer" className="text-slate-500 hover:underline md:text-m mr-2">DevPost</a>)}
                <hr></hr>
                <div className='mt-4 mb-5'>{description}</div>
                {tags.map((tag, index) => (
                  <span key={index} className={`${tagColors[tag]} text-white rounded-lg p-2 w-16 text-center mr-2`}>{tag}</span>
                ))}
              </div>
            </div>
      </div>
  )
}

export default Experience;
