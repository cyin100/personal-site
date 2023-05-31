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
  'Tailwind': 'bg-cyan-400',
  'C++': 'bg-purple-500',
  'ARM Assembly': 'bg-gray-600'
}

function Project({ project: { title, description, image, logo, tags, links} }) {
  let imagePath = images[image];
  let logoPath = images[logo];

  return (
    <div>
      <div className = 'flex bg-stone-100 w-full mb-5 shadow-md rounded-lg'>
        <div className='bg-black rounded-lg w-1/3 p-4'>
          <div style={{ backgroundImage: `url(${imagePath})` }} className='bg-contain bg-no-repeat bg-center w-full h-full'></div>
        </div>
        <div className = 'w-2/3 p-5'>
          <div className = 'flex items-center'>
            {logo && (<span style={{backgroundImage: `url(${logoPath})`}} className="bg-contain bg-no-repeat bg-center w-8 h-8 mr-2"></span>)}
            <span className='md:text-2xl font-bold mr-4'>{title}</span>
            {Object.entries(links).map(([linkName, linkURL]) => (
              <a key={linkName} href={linkURL} target="_blank" rel="noopener noreferrer" className="text-slate-500 hover:underline md:text-m mr-2">
                {linkName}
              </a>
            ))}
          </div>
          <hr></hr>
          <div className='mt-4 mb-5'>{description}</div>
          {tags.map((tag, index) => (
            <span key={index} className={`${tagColors[tag]} md:text-xs text-m text-white rounded-lg p-2 w-16 text-center mr-2`}>{tag}</span>
          ))}
        </div>
      </div>
    </div>
  )
}
export default Project;