import {useState} from 'react'
import Dialog from './Dialog.tsx';

function App() {
    const [show, setShow] = useState(false)
    const [confirm, setConfirm] = useState(false)
    const [input, setInput] = useState('')
    const type = document.getElementById("type")! as HTMLInputElement
    const msg = document.getElementById("msg")! as HTMLInputElement
    function reset(): void{
      setShow(false)
      setConfirm(false)
      setInput('')
    }
  return (
    <div className="flex flex-col w-[100vw] h-[100vh] justify-center items-center bg-black">
        <p className="text-[1.2em] text-blue-600 w-[100%] mb-[20px] flex justify-center items-center">DialogTypes: Alert, Confirm, Error, Info, Prompt, Success, Warning</p>
        <input type="text" id="type" placeholder='Input dialog type' className="p-[20px] rounded-lg text-[1.1em] md:text-[1.5em] w-[200px] md:w-[300px] h-[40px] mb-[30px]" onChange={reset}/>
        <input type="text" id="msg" placeholder="Input dialog message" className="p-[20px] rounded-lg text-[1.1em] md:text-[1.5em] w-[200px] md:w-[300px] h-[40px] mb-[30px]"  onChange={reset}/>
        <button className="bg-blue-700 text-white rounded-[30px] p-[30px] text-[1.5em] shadow-[3px_3px_10px_3px_rgba(255,255,255,0.5)] active:shadow-none border-black border-[2px]" onClick={()=> setShow(true)}>Click Me</button>
        {confirm ? <h1 className="text-[2em] text-white mt-[10px]">Yes</h1> : <h1 className="text-[2em] text-white mt-[10px]">No</h1>}
        <h1 className={(input!='') ? "text-[2em] text-white mt-[10px]": "hidden"}>{input}</h1>
        {show ? <Dialog message={msg.value} type={type.value.toLowerCase().trim()} myVar = {setConfirm} setInput={setInput}/>: ''}
    </div>
  )
}

export default App