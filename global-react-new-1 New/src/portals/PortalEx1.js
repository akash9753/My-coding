import React from 'react';
import Modal from './Modal';
import { ModalContent } from './Modal';
const PortalEx1 = () => {
    return (
        <div>
        <div className='App'>
            <h1>ProjectEx1</h1>
           <Modal>
             <ModalContent></ModalContent>
           </Modal>
        </div>
            
        </div>
    );
};

export default PortalEx1;