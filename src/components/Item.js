import React, {useState, useRef} from 'react';
import {Button, CloseButton} from 'react-bootstrap';
import ConfirmationModal from './ConfirmationModal';

//Represents a single todo item in the todo List 
///////////////////////////////////////////////////////////
const Item = ({todos, setTodos}) =>
{
    const colours = ['3B5BCC', '9634B9', 'CB5029', 'EA8D03' ,'50B537'];
    let activeColourIndex = -1;

    const [modalShow, setModalShow] = useState(false);
    const [deleteModalShow, setDeleteModalShow] = useState(false);
    const [activeTodo, setActiveTodo] = useState(-1);

    //Reference to be added to the textArea child component when updating a todo item
    const textAreaRef = useRef();

    //Removes the item from the todo list
    const onDoneClicked = (e) => 
    {
        setTodos(todos.filter(todo => todo !== todos[e.target.getAttribute("value")]));
    }

    //Deletes the item from the todo list
    const onDeleteClicked = (e) =>
    {
        const index = e.target.getAttribute("value");
        setActiveTodo(index)
        setModalShow(true);
    }

    //Makes the modal visible for editing a single todo item
    const onLabelClicked = (e) =>
    {
        const index = e.target.getAttribute("id");
        setActiveTodo(index);
        setDeleteModalShow(true);
    }

    //helper function for updating todo items
    function handleUpdateTodos()
    {
        console.log(textAreaRef);

        if(textAreaRef.current.textContent.length > 0)
        {
            let temp = todos;
            temp[activeTodo] = textAreaRef.current.textContent
            setTodos(temp);
        }
        
        setDeleteModalShow(false);
    }

    const renderedItems = todos.map((item, index) =>
    {
        //Empty list. Return early
        if(index === null)
            return null;
        else
        {
            //Assign colours for the items
            if(activeColourIndex < colours.length - 1)
                activeColourIndex++;
            else    
                activeColourIndex = 0;
        }

        return(
            <div 
                key = {index} 
                style = {{margin : '15px 0', padding : '20px 15px', backgroundColor: `#${colours[activeColourIndex]}`, color: 'white', borderRadius : '25px'}}
                >
                <label onDoubleClick = {onLabelClicked} id = {index} style = {{width: '75%', padding : '0 10px'}}>{item}</label>
                <div style = {{display :'inline-block'}}>
                    <Button onClick = {onDoneClicked} value = {index} variant="outline-light" size = "sm" style = {{marginRight: '10px'}}>Done</Button>
                    <CloseButton variant="white" onClick = {onDeleteClicked} value = {index}/>
                    <div>
                        <ConfirmationModal
                            theme = 'red'
                            show={modalShow}
                            onHide={() => setModalShow(false)}
                            heading = "Delete Confirmation"
                            subheading = {`TODO : ${todos[activeTodo]}`}
                            content = {`Are you sure you want to delete : ${todos[activeTodo]}`}>
                                <Button  variant = 'danger' onClick = {() => 
                                {
                                    setTodos(todos.filter(todo => todo !== todos[activeTodo]));
                                    setModalShow(false);

                                }}>DELETE</Button>
                        </ConfirmationModal>
                    </div>
                    <div>
                        <ConfirmationModal
                            theme = 'blue'
                            show={deleteModalShow}
                            onHide={() => setDeleteModalShow(false)}
                            heading = "Updating a Todo"
                            subheading = {`TODO : ${todos[activeTodo]}`}
                            textarea = 'true'
                            textref = {textAreaRef}//This reference it passed as a prop to the child and the child uses it as it's ref property
                            content = {`Type new Value`}>
                                <Button variant = 'primary' onClick = {() => 
                                {
                                    handleUpdateTodos();

                                }}>Update</Button>
                        </ConfirmationModal>
                    </div>
                </div>
            </div>
        );
    });

    return(
        <div style = {{overflowY : 'scroll', height : '60vh'}}>
            {renderedItems}
        </div>
    );
}

export default Item;