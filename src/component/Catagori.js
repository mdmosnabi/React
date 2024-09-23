import React, { useState, useContext } from 'react'
import Item from './innercom/Item'
import Item2 from './innercom/Item2'
import Item3 from './innercom/Item3'
import { CatagoriContex} from '../contexHook/Contex'

const Catagori = () => {
  const [ItemList, setItemList] = useState([<Item />, <Item2 />, <Item3 />])
  const [Int, setInt] = useState(0)
  const [isSelected, setIsSelected] = useState(false)

  return (
    <>
      <CatagoriContex.Provider value={{isSelected , setIsSelected}}>
        <div className={`flex gap-3 w-full ${isSelected ?'flex-wrap':''}`}>
          {
            !isSelected && <div className=' w-1/3 bg-green-950'>
            <ul className=' flex flex-col gap-3 items-center'>
              <li onClick={() => { setInt(0) }} className={`p-1 w-full font-bold ${Int == 0 ? 'bg-gray-600' : ' bg-purple-600'} cursor-pointer`}>Motor cycle</li>
            </ul>
          </div>
          }

          {ItemList[Int]}

        </div>
      </CatagoriContex.Provider>
    </>
  )
}

export default Catagori
