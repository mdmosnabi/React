import React, { useState, useEffect } from 'react';
import Card from './Card';


const Home = () => {
  const [variable, setvariable] = useState(['test/natural.jpg', 'test/natural1.jpg', 'test/logo192.png', 'test/logo512.png'])
  const [Img, setImg] = useState(variable[0])

  useEffect(() => {
    let i = 1
    setInterval(() => {
      setImg(variable[i])
      if (variable.length - 1 == i) {
        i = 0
      } else {
        i++
      }
    }, 7000);

  }, [])

  return (
    <>
      <div className=' md:w-4/5 mx-auto flex justify-center bg-gray-500 '>
        <img className=' h-[350px] w-[500px] object-contain' src={Img} alt="" />
      </div>
      <h1 className=' md:w-4/5 mx-auto text-2xl font-bold my-2'>Just for you :</h1>
      <div className=' md:w-4/5 mx-auto'>
        <Card/>
      </div>
    </>
  );
}

export default Home;
