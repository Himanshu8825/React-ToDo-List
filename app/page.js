"use client"
import React, { useState } from 'react'

const page = () => {
  const [tittle, settittle] = useState("");
  const [desc, setdesc] = useState("");
  const submitHanler = (elem)=>{
  elem.preventDefault()
  }
  return (
    <div>
      <>
        <h1 className='bg-black  text-white p-5 text-4xl font-bold text-center '>ToDos-List</h1>
        <form onSubmit={submitHanler}>

          <input type="text" className='text-2xl border-zinc-800 border-2 m-5 px-4 py-2' placeholder='Enter Your Task Here' value={tittle}
            onChange={(elem) => {
              settittle(elem.target.value);
            }} />

          <input type="text" className='text-2xl border-zinc-800 border-2 m-5 px-4 py-2' placeholder='Enter Your Description Here'
           s value={desc}
            onChange={(elem) => {
              setdesc(elem.target.value);
            }} />

          <button className='bg-black text-white px-2 py-2 text-xl font-bold rounded'>Add Task</button>

        </form>
      </>
    </div>
  )
}

export default page
