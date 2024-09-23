import React, { useState, useEffect, useContext } from 'react'
import { tokenContex } from '../contexHook/Contex'
import axios from 'axios'

const Curdop = () => {
  const [formData, setFormData] = useState({
    book_name: '', author: '', published_date: ''
  })

  const { token, setToken } = useContext(tokenContex)

  const handelChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    })
  }
  const PostData = async () => {
    try {
      const response = await axios.post('http://127.0.0.1:8000/api/book/', formData, {
        headers: {
          Authorization: `Bearer ${token.access}`
        }
      })
      
    } catch (error) {
      console.error(error);
    }
  }

  const SubmitClk = () => {
    PostData()

    setFormData({
      book_name: '', author: '', published_date: ''
    })
  }

  return (
    <div className=' flex flex-col items-center gap-2 '>
      <div>
        <label >Book Name :</label>
        <input onChange={handelChange} value={formData.book_name} name='book_name' className=' p-1 bg-green-200 w-full mx-auto text-black rounded-lg' type="text" placeholder='Book name' />
      </div>
      <div>
        <label >Author name :</label>
        <input onChange={handelChange} value={formData.author} name='author' className=' p-1 bg-green-200 w-full mx-auto text-black rounded-lg' type="text" placeholder='author' />
      </div>
      <div>
        <label >Published Date :</label>
        <input onChange={handelChange} value={formData.published_date} name='published_date' className=' p-1 bg-green-200 w-full mx-auto text-black rounded-lg' type="date" placeholder='published date' />
      </div>
      <span onClick={SubmitClk}><button className=' p-2 text-black bg-red-900 rounded-xl'>submit</button></span>
    </div>
  )
}

export default Curdop
