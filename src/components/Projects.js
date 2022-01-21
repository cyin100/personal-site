function Project ({project: {title, description, image}}) {
    return (
      <div className = 'flex bg-white w-full mb-5 shadow-md rounded-lg'>
        <div className='w-1/3 p-5'>
            <div className="bg-[url('images\\undertale.jpg')] bg-contain bg-no-repeat bg-center w-full h-full"></div>
        </div>
        <div className = 'w-2/3 p-5'>
          <h1 className='md:text-2xl'>{title}</h1>
          <div className='mt-4'>{description}</div>
        </div>
      </div>
    );
  }
  
  export default Project;