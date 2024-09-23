import React, { useState, useEffect, useContext} from 'react'
import { CatagoriContex} from '../../contexHook/Contex'
import axios from 'axios'


const Item = () => {
    const [yamaha, setYamaha] = useState([])
    const [honda, setHonda] = useState([])
    const [array, setArray] = useState([])
    const {isSelected , setIsSelected} = useContext(CatagoriContex)
    

    const facthData = async (a) => {
       const response = await axios.get(`http://127.0.0.1:8000/bike/${a}/`)
       return response.data
    }

    useEffect(() => {
      const fetchData = async () => {
          const yamahaData = await facthData('yamaha')
          setYamaha(yamahaData)
          
          const hondaData = await facthData('honda')
          setHonda(hondaData)
      }
      
      fetchData()
    }, [])

    const clk = (e)=> {
        let a = e.target.getAttribute('datatype')
        if(a == 'yamaha'){
            setArray(yamaha)
        }
        if(a == 'honda'){
            setArray(honda)
        }
        setIsSelected(true)
    }

    if(isSelected){
        return(
            <>
            { array.length > 0 && array.map(item =>{
                return(
                    <div key={item.id} className=' bg-gray-800 p-2 rounded-md hover:cursor-pointer'>
                        <img className=' object-contain h-[200px] w-[170px] p-2 rounded-lg bg-purple-500' src={item.file} alt="err" />
                        <div>
                            <h1 className=' text-xl font-bold'>{item.model}</h1>
                            <h3 className=' text-xl'>{item.prise} TK</h3>
                        </div>
                    </div>
                )
            }) }
            </>
        )
    }
    
    return (
        <div className='flex gap-6 flex-wrap w-full bg-gray-800'>
            <div onClick={clk} datatype='yamaha' className=' my-2 p-2'>
                <img className=' h-[50px] w-[70px] rounded-full' src='image/yamaha.jpeg' alt="err" datatype='yamaha'/>
                <span datatype='yamaha'>Yamaha</span>
            </div>
            <div onClick={clk} datatype='honda' className=' my-2 p-2'>
                <img className=' h-[50px] w-[50px] rounded-full' src='image/honda.png' alt="err" datatype='honda' />
                <span datatype='honda'>Honda</span>
            </div>
            
        </div>
    )
}

export default Item
