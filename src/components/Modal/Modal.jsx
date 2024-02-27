import classes from "./Modal.module.css"



// children is a reserved prop name
function Modal(props){

    return <>
    
    <div className={classes.backdrop} onClick={props.onClose}/>
    
    {/* dialog element default open prop, defaults to true */}
    <dialog open={true} className={classes.modal}>
        {props.children}
    </dialog>

    </>

}

export default Modal;