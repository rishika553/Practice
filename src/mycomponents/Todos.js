import React from 'react'
import {Todoitem} from "../mycomponents/Todoitem"
export const Todos = (props) => {

  return (

    <div className="container">
      
      <h3 className="text-center my-3">Todo-List</h3>
      
      {props.todos.length===0? "no todos to display ":
     props.todos.map((todos) => {

      return <Todoitem todos={todos} key ={todos.sno} onDelete={props.onDelete}/>
    
      
     })
    }
    </div>
  )
}


// export default { Todos };
