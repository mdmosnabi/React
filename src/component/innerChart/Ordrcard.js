import React,{useContext} from 'react'
import { ChartContex } from '../../contexHook/Contex'

const Ordrcard = () => {
    const {Int , setInt} = useContext(ChartContex)
    return (
        <>
            <div className=' flex flex-wrap gap-3'>
                <div className='md:w-[250px] relative w-[180px] p-2 rounded-lg bg-green-900'>
                    <img className=' absolute top-0 right-0 bg-green-300 p-3 rounded-full' src="svg/cross.svg" alt="" />
                    <img className=' w-[170px] md:w-[250px] h-[200px] md:h-[300px] object-cover rounded-lg overflow-hidden' src="test/natural.jpg" alt="" />
                    <div className=' flex justify-between  font-bold text-lg md:text-xl'>
                        <h1>Prise: 100</h1>
                        <span>Rating : 4/5</span>
                    </div>
                    <div>
                        <p className=' h-[80px] text-sm md:text-lg md:h-[100px] overflow-hidden text-red-900'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ad et dolor reiciendis
                            facere eaque provident repellat enim, aspernatur odit laboriosam.</p>
                    </div>
                </div>


                <div className='md:w-[250px] relative w-[180px] p-2 rounded-lg bg-green-900'>
                    <img className=' absolute top-0 right-0 bg-green-300 p-3 rounded-full' src="svg/cross.svg" alt="" />
                    <img className=' w-[170px] md:w-[250px] h-[200px] md:h-[300px] object-cover rounded-lg overflow-hidden' src="test/natural.jpg" alt="" />
                    <div className=' flex justify-between  font-bold text-lg md:text-xl'>
                        <h1>Prise: 100</h1>
                        <span>Rating : 4/5</span>
                    </div>
                    <div>
                        <p className=' h-[80px] text-sm md:text-lg md:h-[100px] overflow-hidden text-red-900'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ad et dolor reiciendis
                            facere eaque provident repellat enim, aspernatur odit laboriosam.</p>
                    </div>
                </div>
                <div className='md:w-[250px] relative w-[180px] p-2 rounded-lg bg-green-900'>
                    <img className=' absolute top-0 right-0 bg-green-300 p-3 rounded-full' src="svg/cross.svg" alt="" />
                    <img className=' w-[170px] md:w-[250px] h-[200px] md:h-[300px] object-cover rounded-lg overflow-hidden' src="test/natural.jpg" alt="" />
                    <div className=' flex justify-between  font-bold text-lg md:text-xl'>
                        <h1>Prise: 100</h1>
                        <span>Rating : 4/5</span>
                    </div>
                    <div>
                        <p className=' h-[80px] text-sm md:text-lg md:h-[100px] overflow-hidden text-red-900'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ad et dolor reiciendis
                            facere eaque provident repellat enim, aspernatur odit laboriosam.</p>
                    </div>
                </div>


            </div>
            <div className=' flex my-3  gap-3'>
                <button onClick={()=>{setInt(1)}} className=' p-3 bg-purple-700 rounded-xl'> Order now</button>
                <h1 className=' p-3 bg-purple-700 rounded-xl'> Total : 123$</h1>
            </div>
        </>
    )
}

export default Ordrcard
