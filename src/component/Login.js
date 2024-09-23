import React, { useState, useEffect, useContext } from 'react'
import axios from 'axios'
import { BookContex, tokenContex } from '../contexHook/Contex'


const Login = () => {
    const [formData, setFormData] = useState({
        username: '',
        password: ''
    })
    const { token, setToken } = useContext(tokenContex)
    const { showData, setshowData } = useContext(BookContex)

    const handelChange = (e) => {
        const { name, value } = e.target
        setFormData({
            ...formData, [name]: value
        })
    }
    const url = 'http://127.0.0.1:8000/api/'
    async function fetchToken() {
        try {
            const response = await axios.post(url + 'token/', formData)
            setToken(response.data)
            localStorage.setItem('authToken', JSON.stringify(response.data))

        } catch (error) {
            console.error(error);
        }
    }
    async function fetchBook() {
        try {
            const response = await axios.get(url + 'book/', {
                headers: {
                    Authorization: `Bearer ${token.access}`,
                    'Content-Type': 'application/json'
                }
            });
            setshowData(response.data);

        } catch (error) {
            console.error('Error :' + error);
        }
    }
    useEffect(() => {
        if (token.access != '') {
            fetchBook()
        }
    }, [token])


    const btnClk = () => {
        fetchToken();
    }

    const logout = async () => {
        const refreshToken = JSON.parse(localStorage.getItem('authToken'));
    
        if (refreshToken) {
            try {
                await axios.post(url +'logout/', {
                    refresh_token: token.refresh,
                },
                {headers: {
                    Authorization: `Bearer ${token.access}`,
                }});
                localStorage.removeItem('authToken')
                setshowData([])
            } catch (e) {
                console.error(e);
            }
        }
    };


    return (
        <div>
            <div className=' w-1/2 mx-auto'>
                <input onChange={handelChange} value={formData.username} name='username' className=' my-2 p-2 w-full bg-gray-600 text-white' type="text" placeholder='Username' />
                <input onChange={handelChange} value={formData.password} name='password' className=' my-2 p-2 w-full bg-gray-600 text-white' type="text" placeholder='passowrd' />
                <button onClick={btnClk} className=' p-3 rounded-xl bg-purple-400 text-black'>log in</button>
                <button onClick={logout} className=' p-2 rounded-lg bg-red-300'>Log out</button>
            </div>
            <div className=' w-full h-[2px] bg-black my-3'></div>
            {showData.length < 1 && <div className='w-1/2 mx-auto bg-green-200'> No data is here</div>}
            <div className='w-1/2 mx-auto text-red-700 bg-green-200'>{showData.map(item => {
                return (
                    <div key={item.id}>
                        <div>{item.book_name}</div>
                        <div>{item.author}</div>
                        <div>{item.published_date}</div>
                    </div>
                )
            })}</div>
        </div>
    )
}

export default Login
