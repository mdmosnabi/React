import React ,{ useState} from 'react'
import Ordrcard from './innerChart/Ordrcard'
import { ChartContex } from '../contexHook/Contex'
import OrdConfirm from './innerChart/OrdConfirm'

const Chart = () => {
const [Int, setInt] = useState(0)
  return (
    <ChartContex.Provider value={ {Int , setInt}}>
      { Int == 0 && <Ordrcard/>}
      { Int == 1 && <OrdConfirm/>}
    </ChartContex.Provider>
  )
}

export default Chart
