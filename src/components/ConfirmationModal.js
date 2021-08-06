import React, {useState} from 'react';
import {Modal} from 'react-bootstrap';

const ConfirmationModal = (props) =>
{
    const [userInput, setUserInput] = useState('');

    //Hide or make visible the text area based on props
    const hidden = props.textarea === 'true' ? 'default' : 'none';

    //Prevent user from clicking the enter key
    const preventEnterKeyPress = (e) => 
    {
        if(e.key === 'Enter')
            e.preventDefault();
    }

    return(
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered>

            <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-vcenter">
                <label style = {{color: props.theme}}>{props.heading}</label>
            </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <h4>{props.subheading}</h4>
                <p>
                    {props.content}
                </p>
                <textarea  
                    style = {{display: hidden, width : '100%', resize: 'none', focused: true, border : `1px solid ${props.theme}`, padding : '10px'}}
                    onChange = {(e) => setUserInput(e.target.value)}
                    value = {userInput}
                    ref = {props.textref}
                    onKeyPress = {preventEnterKeyPress}/>
            </Modal.Body>
            <Modal.Footer>
                {props.children}
            </Modal.Footer>
        </Modal>
    );
}

export default ConfirmationModal;