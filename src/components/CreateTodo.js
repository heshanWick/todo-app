import React, {useEffect} from 'react';
import {Button} from 'react-bootstrap';

const ConfirmationDialog = ({maxLength, userInput, setUserInput, todos, setTodos}) => 
{   
    //Hiding and making the create and cancel buttons till the user inputs something in the text textArea
    ////////////////////////////////////////////////////////////////////////////////////////////////////////
    let hidden = userInput === '' ? 'none' : 'inline-block' ;

    useEffect(() =>
    {
        hidden = userInput === '' ? 'none' : 'inline-block' ;
    }, [userInput])

    //Event handlers for creating and cancelling
    //////////////////////////////////////////////////
    const onCancelButtonClicked = ()=>
    {
        setUserInput('');
    }

    const onCreateButtonClicked = () => 
    {
        setTodos([...todos, userInput]);
        setUserInput('');
    }

    //Prevent user from clicking the enter key
    const preventEnterKeyPress = (e) => 
    {
        if(e.key === 'Enter')
            e.preventDefault();
    }

    return (
        <div>
            <form >
                <div style =  {{backgroundColor : 'white', padding : '50px', borderRadius : '25px', border : '2px solid black'}}>
                    <div>
                        <textarea 
                            value = {userInput}
                            onChange = {(e) => setUserInput(e.target.value)}
                            className = "textArea"  
                            row = '4' type = 'text' 
                            maxLength = {maxLength} 
                            onKeyPress = {preventEnterKeyPress}
                            style = {{resize : 'none', width : '100%', padding : '20px', backgroundColor : '#FBFFCB'}}
                        />
                        <label style = {{float: 'right' }}>{userInput.length}/{maxLength}</label>
                    </div>
                    <div style = {{padding : '20px 0 0 0', margin : '0 auto', display : `${hidden}`}}>
                        <Button variant="success" onClick = {onCreateButtonClicked}><strong>CREATE</strong></Button>
                        <Button variant="outline-danger" onClick = {onCancelButtonClicked} style = {{marginLeft: '10px'}}>CANCEL</Button>
                    </div>
                </div>
            </form>
        </div>
    );
}

//Undefined default user input
////////////////////////////////////
ConfirmationDialog.defaultProps = 
{
    userInput: 'undefined'
}

export default ConfirmationDialog;