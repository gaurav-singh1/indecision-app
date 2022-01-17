import React from 'react';
import Modal from 'react-modal';


const OptionModal = (props) => (
    <Modal
    isOpen={!!props.selectedOptions}
    onRequestClose={props.clearSelectedOptions}
    contentLabel='Selected Text'
    >
        <h3>Selected Text</h3>
        {props.selectedOptions && <p>{props.selectedOptions}</p>}
        <button onClick={props.clearSelectedOptions}>okay</button>
    </Modal>
);

export default OptionModal;
