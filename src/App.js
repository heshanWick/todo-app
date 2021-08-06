import './App.css';
import React, {useState} from 'react';
import {Container, Row, Col, Image} from 'react-bootstrap';
import CreateTodo from './components/CreateTodo';
import TodoContainer from './components/TodoContainer';
import myImage from './images/Todo.jpg';


const App = () =>
{
    //Defining the maximum length of a todo
    const todoLength = 150;
    
    const [userInput, setUserInput] = useState('');
    const [todos, setTodos] = useState(["Walk the Dogs", "Take Out the Trash"]);

    return(
        <div className = "ui-container">
            <Container>
                <Row>
                    <Col>
                        <div className = "ui-left">
                            <div style = {{position: 'fixed'}}>
                                <h3><strong>Let's Create some TODO's For Today</strong></h3>
                                <CreateTodo 
                                    maxLength = { todoLength } 
                                    userInput = {userInput} 
                                    setUserInput = {setUserInput}
                                    todos = {todos}
                                    setTodos = {setTodos}/>
                                <Image src={myImage} className = "todo-image" style = {{paddingTop:"30px"}} />
                            </div>
                        </div>
                    </Col>
                    <Col>
                        <div className = "ui-right">
                            <div style = {{position: 'fixed'}}>
                                <TodoContainer todos = {todos} setTodos = {setTodos}/>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default App;