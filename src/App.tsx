import {useState} from 'react'
import Dialog from './Dialog.tsx';

function App() {
    const [show, setShow] = useState(false)
    const [confirm, setConfirm] = useState(false)
    const [input, setInput] = useState('')
    console.log(input)
    console.log(confirm)
    const type = document.getElementById("type")! as HTMLInputElement
    const msg = document.getElementById("msg")! as HTMLInputElement
  return (
    <div className="flex flex-col w-[100vw] h-[100vh] justify-center items-center bg-black">
        <input type="text" id="type" placeholder='Input dialog type' className="p-[20px] rounded-lg text-[1.5em[ w-[300px] h-[40px] mb-[30px]"/>
        <input type="text" id="msg" placeholder="Input dialog message" className="p-[20px] rounded-lg text-[1.5em[ w-[300px] h-[40px] mb-[30px]"/>
        <button className="bg-blue-700 text-white rounded-[30px] p-[30px] text-[1.5em] shadow-[3px_3px_10px_3px_rgba(255,255,255,0.5)] active:shadow-none border-black border-[2px]" onClick={()=> setShow(!show)}>Click Me</button>
        <h1 className={confirm ? "text-[2em] text-white": "hidden"}>Yes</h1>
        {show ? <Dialog message={msg.value} type={type.value} myVar = {setConfirm} setInput={setInput}/>: ''}
    </div>
  )
}

export default App