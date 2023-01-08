import React from 'react';
import ReactDOM from 'react-dom'
const Modal = (props) => {
     return (
        ReactDOM.createPortal(props.children,
            document.getElementById('modal'))
    );
};

export const ModalContent = ()=>{
    return(
        <div className='a'>
         <h1>I m a Modal</h1>
        </div>
    )
}
export default Modal;