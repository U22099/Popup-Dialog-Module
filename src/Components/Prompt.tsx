import {SlSpeech} from 'react-icons/sl'
import {motion} from 'framer-motion'
import {useState} from 'react'

function Prompt(props: any) {
    const [show, setShow] = useState(true)
    function submit(){
        setShow(false)
        const input = (document.getElementById("input")! as HTMLInputElement).value 
        props.setInput(input)
    }
    if(show){
  return (
    <motion.div 
    initial={{
        opacity: 0,
    }}
    animate={{
        opacity: 1,
        transition: {
            duration: 0.5,
        }
    }}
    className="flex flex-col bg-white rounded-xl p-[20px] dialog md:w-[40vw] w-[90vw] justify-center items-center gap-[10px]">
        <div className="w-[100%] flex justify-center items-center">
            <SlSpeech className="text-blue-600 text-bold text-[5em]"/>
        </div>
        <h1 className="text-[2.5em] display flex w-[100%] justify-center items-center">Prompt</h1>
        <div className=" w-[80%] text-center items-center text-[1.3em]">
            <p>{`${props.msg} : `}</p>
        </div>
        <input type="text" id="input" autoFocus placeholder="Enter here" className="my-[10px] w-[80%] bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
        <button className="w-[80%] bg-blue-600 rounded-md text-[2em] shadow-[2px_2px_5px_3px_rgba(0,0,0,0.5)]" onClick={submit}>OK</button>
    </motion.div>
  )}else{return ''}
}

export default Prompt