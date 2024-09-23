import React,{useState} from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
    const [Int, setInt] = useState(0)
    return (
        <ul className=' absolute bottom-0 w-full md:hidden flex gap-4 justify-around p-2 bg-green-800 my-2'>
            <li onClick={()=>{setInt(0)}}>
                <Link className=' flex items-center gap-3' to='/'>
                    <img className={`p-2 ${ Int == 0 ? ' bg-gray-900' : ' bg-gray-400'} rounded-full`} src="svg/home.svg" alt="" />
                    
                </Link>
            </li>
            <li onClick={()=>{setInt(1)}}>
                <Link className=' flex items-center gap-3' to='/catagori'>
                    <img className={`p-2 ${ Int == 1 ? ' bg-gray-900' : ' bg-gray-400'} rounded-full`} src="svg/catagori.svg" alt="" />
                    
                </Link>
            </li>
            <li onClick={()=>{setInt(2)}}>
                <Link className=' flex items-center gap-3' to='/chart'>
                    <img className={`p-2 ${ Int == 2 ? ' bg-gray-900' : ' bg-gray-400'} rounded-full`} src="svg/chart.svg" alt="" />
                    
                </Link>
            </li>
            <li onClick={()=>{setInt(3)}}>
                <Link className=' flex items-center gap-3' to='/account'>
                    <img className={`p-2 ${ Int == 3 ? ' bg-gray-900' : ' bg-gray-400'} rounded-full`} src="svg/account.svg" alt="" />
                    
                </Link>
            </li>
        </ul>
    )
}

export default Footer
