import {FaInfoCircle} from 'react-icons/fa'
import {motion} from 'framer-motion'
import {useState} from 'react'

function InfoDialog(props: any) {
  const [show, setShow] = useState(true)
  if(show){
  return (
    <motion.div
    initial={{
      opacity: 0
    }}
    animate={{
        opacity: 1,
        transition: {
            duration: 0.5,
        }
    }}
     className="flex flex-col bg-white rounded-xl p-[20px] dialog md:w-[40vw] w-[90vw] justify-center items-center gap-[10px]">
        <div className="w-[100%] flex justify-center items-center">
            <FaInfoCircle className="text-blue-600 text-bold text-[5em]"/>
        </div>
        <h1 className="text-[2.5em] display flex w-[100%] justify-center items-center">Info</h1>
        <div className=" w-[80%] text-center items-center text-[1.3em]">
            <p>{props.msg}</p>
        </div>
        <button className="w-[80%] bg-blue-600 rounded-md text-[2em] shadow-[2px_2px_5px_3px_rgba(0,0,0,0.5)]" onClick={()=>{setShow(false)}}>OK</button>
    </motion.div>
  )}else{return ''}
}

export default InfoDialog