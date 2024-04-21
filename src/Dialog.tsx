import AlertDialog from './Components/AlertDialog'
import ConfirmDialog from './Components/ConfirmDialog'
import SuccessDialog from './Components/SuccessDialog'
import ErrorDialog from './Components/ErrorDialog'
import InfoDialog from './Components/InfoDialog'
import WarningDialog from './Components/WarningDialog'
import Prompt from './Components/Prompt'


function Dialog(props: any) {
    switch(props.type){
        case "info":
            return <InfoDialog msg={props.message}/>
            break
        case "error":
            return <ErrorDialog msg={props.message}/>
            break
        case "confirm":
            return <ConfirmDialog msg={props.message} var={props.myVar}/>
            break
        case "alert":
            return <AlertDialog msg={props.message}/>
            break
        case "success":
            return <SuccessDialog msg={props.message}/>
            break
        case "warning":
            return <WarningDialog msg={props.message}/>
            break
        case "prompt":
            return <Prompt msg={props.message} setInput={props.setInput}/>
            break
        default:
            return <AlertDialog msg={props.message}/>
            break
    }
}

export default Dialog