//  import React from 'react';
//  import "./modal.css"
//  const Modal = ({show , onClose, children}) => {

//     if(show===false){
//         return null
//     }
//         return (
//             <div className='modalWrapper'>
//                 <div className='modalChild'>
//                     <button onClick={onClose} className='btn-close btnClose'/>
//                     {children}
//                 </div>
//             </div>
//         );

    
//  };
 
//  export default Modal;

import React from 'react';
import styles from "./modalnew.module.css"
const Modal = ({show , onClose, children}) => {

   if(show===false){
       return null
   }
       return (
        <>
           <div className={`${styles.modalWrapper}`}>
               <div  className={`${styles.modalChild}`}>
                   <button onClick={onClose} className={`${styles.btnClose} btn-close`} />
                   {children}
               </div>
           </div>
           </>
       );

   
};

export default Modal;

// className={`${styles.btnClose} btn-close`}