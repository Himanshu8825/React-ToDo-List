"use client"
import React, { useState } from 'react'

const page = () => {
  const [tittle, settittle] = useState("");
  const [desc, setdesc] = useState("");
  const [mainTask, setmainTask] = useState([]);
  const submitHanler = (elem) => {
    elem.preventDefault();
    setmainTask([...mainTask, { tittle, desc }]);
    settittle("");
    setdesc("");
  }

  const deleteHandler = (i) => {
    let copyTask = [...mainTask];
    copyTask.splice(i, 1);
    setmainTask(copyTask)
  }

  let renderTask = <h2>No Task</h2>

  if (mainTask.length > 0) {
    renderTask = mainTask.map((t, i) => {
      return <li key={i} className='flex items-center justify-between'>
        <div className='flex justify-between items-center mb-5 w-2/3'>
          <h5 className='text-2xl  font-semibold'>{t.tittle}</h5>
          <h6 className='text-lg  font-medium'>{t.desc}</h6>
        </div>
        <button onClick={() => {
          deleteHandler(i)
        }}
          className='bg-red-400 text-white px-4 py-2 rounded font-bold'>Delete</button>
      </li>
    })
  }

  return (
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

      <hr />
      <div className='p-8 m-5 bg-slate-200'>
        <ul>
          {renderTask}
        </ul>
      </div>
    </>
  )
}

export default page
