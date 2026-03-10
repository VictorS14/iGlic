import { FaBars } from 'react-icons/fa';

export const Header = () => {
  return (
    <div className="w-full max-w-3xl h-16 bg-green-300 flex items-center border pl-2 pr-2">
      <div className="w-full h-full flex items-center justify-between">
        <h1 className="text-2xl font-bold font-serif">iGlic</h1>
        <button className='text-2xl'><FaBars/></button>
      </div>
    </div>
  )
}

