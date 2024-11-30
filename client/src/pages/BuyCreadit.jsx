
import { assets, plans } from './../assets/assets';

const BuyCreadit = () => {
  return (
    <div className="min-h-[80vh] text-center pt-14 mb-10 bg-violet-200">
        <button className='border border-gray-400 px-10 py-2 rounded-full mb-6'>Our Plans</button>
        <h1 className="text-center text-2xl md:text-3xl lg:text-4xl mt-4 font-semibold mb-7 sm:mb-10">Choice The plan thats right for you</h1>
        <div className='flex flex-wrap justify-center gap-6 text-left'> 
            {plans.map((item, index) => (
                <div className='bg-white drop-shadow-sm border rounded-lg py-12 px-8 text-gray-700 cursor-pointer hover:scale-105 transition-all duration-500 ' key={index}>
                  <img width={40} src={assets.logo_icon} alt="" />
                  <p className='mt-3 font-semibold'>{item.name}</p>
                  <p className='text-sm'>{item.desc}</p>
                  <p className='mt-6'>
                    <span className='text-3xl font-medium'>${item.price}</span>/{item.credits} Credits
                  </p>
                  <button className='w-full bg-gray-800 text-white mt-8 text-sm rounded-md py-2.5 min-w-52'>Purchase</button>
                </div>
            ))}
        </div>
    </div>
  );
};

export default BuyCreadit;