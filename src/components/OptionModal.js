import React from 'react';
import Modal from 'react-modal';


const OptionModal = (props) => (
    <Modal
    isOpen={!!props.selectedOptions}
    onRequestClose={props.clearSelectedOptions}
    contentLabel='Selected Text'
    closeTimeoutMS={200}
    className="modal"
    >
        <h3 className='modal__title'>Selected Text</h3>
        {props.selectedOptions && <p className='modal__body'>{props.selectedOptions}</p>}
        <button className="button" onClick={props.clearSelectedOptions}>okay</button>
    </Modal>
);

export default OptionModal;
