import React from 'react';
import {Badge} from 'react-bootstrap';
import Item from './Item';

const TodoContainer = ({todos, setTodos}) =>
{
    return(
        <div className = "ui-container" >
            <div style = {{ width : '40vw', height : '80vh', backgroundColor : 'white', borderRadius : '25px'}}>
                <div>
                    <div>
                        <label style  = {{margin : '30px', fontSize : '20px'}}>My Todos <Badge bg="secondary">{todos.length}</Badge></label>
                        <hr style = {{margin : '0 auto', display : 'block', width : '90%'}}/>
                    </div>
                    <div className = "scroll-section" style = {{padding: '30px'}}>
                        <Item todos = {todos} setTodos = {setTodos}/>
                        <label style = {{marginTop : '20px', float : 'right', color : 'red', fontStyle:'italic'}}>* Double Click To Edit</label>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default TodoContainer;