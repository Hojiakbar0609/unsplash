import { AiFillHeart } from 'react-icons/ai'

function Image({data}) {
  return (
    <a href={data.urls.regular}>
      <div className="card bg-base-300 shadow-lg hover:scale-105 transition duration-300 text-center">
        <img className='h-44 w-full object-cover rounded-lg shadow-md' src={data.urls.small} alt={data.alt_description} 
        />
        <p className='pt-3'><span className='font-bold'>Name:</span> {data.user.name}</p>
        <p className='py-2 opacity-70'>Created at: {data.created_at}</p>
        <p><span className=''>Location:</span> {data.user.location}</p>
        <div className='flex gap-x-2 justify-center items-center pb-4'>
          <AiFillHeart className='text-red-700'/>
          <p>{data.likes}</p>
        </div>
      </div>
    </a>
  )
}

export default Image