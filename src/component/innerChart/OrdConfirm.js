import React, { useEffect, useRef, useState } from 'react'

const OrdConfirm = () => {
    const P_Type = useRef(null)
    const S_Method = useRef(null)
    const [p_typ, setP_typ] = useState('COD')
    function show() {
        setP_typ(P_Type.current.value)
    }
    useEffect(()=>{
        show()
    },[]);

    return (
        <>
        <div className='flex flex-col items-center p-4 bg-white text-black'>
            <h1 className=' text-xl font-bold my-2'> Name of Item :</h1>
            <div className=' flex'>
                <div className=' w-[100px]'></div>
                <ul className=''>
                    <li className=' py-1'>Name of item 1</li>
                    <li className=' py-1'>Name of item 2</li>
                    <li className=' py-1'>Name of item 3</li>
                    <li className=' py-1'>Name of item 4</li>
                    <li className=' py-1'>Name of item 5</li>
                </ul>
            </div>
            <h1 className=' text-xl font-bold'>Total prise : 123$ </h1>
            <div className=' flex gap-4 text-lx font-bold'>

                <h1> Payment Type :</h1>
                <select onClick={() => { show() }} ref={P_Type} className=' p-1 bg-green-200 border' name="" id="">
                    <option value="COD"> Cash on delevari</option>
                    <option value="Prepaid"> Prepaid</option>
                </select>
            </div>
            { p_typ == 'COD' && <div className=' text-sm text-red-700 bg-yellow-500 my-3'> You need to delevari charge only . after recive prouduct you have to payment fully </div>}
            { p_typ == 'Prepaid' && <div className=' text-sm text-red-700 bg-yellow-500 my-3'> You have to payment fully </div>}
            <div className=' flex gap-4 text-lx font-bold'>
                <h1> Select Payment Method :</h1>
                <select ref={S_Method} className=' p-1 bg-green-200 border' name="" id="">
                    <option value="bekash"> Bekash</option>
                    <option value="nagad">Nagad</option>
                </select>
            </div>
            <div className=' p-2 my-2 bg-red-600 text-black hover:cursor-pointer font-bold'>Tap to payment process</div>
        </div>
        <div>
            
        </div>
        </>
    )
}

export default OrdConfirm
