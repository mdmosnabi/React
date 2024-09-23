import React ,{useState} from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    const [Int, setInt] = useState(0)
    return (
        <ul className=' flex sticky top-1 gap-4 justify-around p-2 bg-red-800 my-2'>
            <li onClick={()=>{setInt(0)}} className=' hidden md:block'>
                <Link className=' flex items-center gap-3' to='/'>
                    <img className={`p-2 ${ Int == 0 ? ' bg-gray-900' : ' bg-gray-400'} rounded-full`} src="svg/home.svg" alt="" />
                    <span>Home</span>
                </Link>
            </li>
            <li onClick={()=>{setInt(1)}} className=' hidden md:block'>
                <Link className=' flex items-center gap-3' to='/catagori'>
                    <img className={`p-2 ${ Int == 1 ? ' bg-gray-900' : ' bg-gray-400'} rounded-full`} src="svg/catagori.svg" alt="" />
                    <span>Catagories</span>
                </Link>
            </li>
            <div className=' md:w-1/5 w-full flex px-3 py-1 gap-3 rounded-xl bg-green-400'>
                <input className=' bg-gray-600 text-white w-full p-2 rounded-xl' type="text" />
                <img src="svg/search.svg" alt="" />
            </div>
            <li onClick={()=>{setInt(2)}} className=' hidden md:block'>
                <Link className=' flex items-center gap-3' to='/chart'>
                    <img className={`p-2 ${ Int == 2 ? ' bg-gray-900' : ' bg-gray-400'} rounded-full`} src="svg/chart.svg" alt="" />
                    <span>Chart</span>
                </Link>
            </li>
            <li onClick={()=>{setInt(3)}} className=' hidden md:block'>
                <Link className=' flex items-center gap-3' to='/account'>
                    <img className={`p-2 ${ Int == 3 ? ' bg-gray-900' : ' bg-gray-400'} rounded-full`} src="svg/account.svg" alt="" />
                    <span>Account</span>
                </Link>
            </li>
        </ul>
    )
}

export default Navbar
