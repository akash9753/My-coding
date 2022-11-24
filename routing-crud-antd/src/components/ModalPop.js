import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

export default function ModalPop({output,show,setShow,handleClose,handleShow}) {
 

  return (
    <>
      <Button variant="btn btn-outline-primary py-1  my-1" onClick={handleShow} >
        Print Output
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Result </Modal.Title>
        </Modal.Header>
        <Modal.Body>{output}</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

