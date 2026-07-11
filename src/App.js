import "./App.css";
import Header from "./mycomponents/Header";
import { Todos } from "./mycomponents/Todos";
import Footer from "./mycomponents/Footer";
import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { AddTodo } from "./mycomponents/AddTodo";
import { About} from "./mycomponents/About";


function App() {
  let initTodo;
  if (localStorage.getItem("todos") === null) {
    initTodo = [];
  } else {
    initTodo = JSON.parse(localStorage.getItem("todos"));
  }
  const onDelete = (todo) => {
    console.log("i am ondelete", todo);
    // let index = todos.indexof(todos);
    // todos.splice(index,1);
    setTodos(
      todos.filter((e) => {
        return e !== todo;
      }),
    );
    localStorage.setItem("todos", JSON.stringify(todos));
  };

  const addTodo = (title, desc) => {
    console.log("I am adding Todo", title, desc);
    let sno;

    if (todos.length == 0) {
      sno = 0;
    } else {
      sno = todos[todos.length - 1].sno + 1;
    }
    const myTodo = {
      sno: sno,
      title: title,
      desc: desc,
    };

    setTodos([...todos, myTodo]);
    console.log(myTodo);
  };
  const [todos, setTodos] = useState([initTodo]);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  return (
    <>
    <Router>
      <Header title="My Todos List" searchBar={true} />
      <Switch>
        <Route exact path="/" render={()=>{
          return (
            <>
            <AddTodo addTodo={addTodo}/>
            <Todos todos ={todos} onDelete={onDelete}/>
            </>
          )
        }}>
        </Route>
       <Route path="/about">
       <About/>
       </Route>
       
      </Switch>
        <Footer />
      </Router>
    </>
  );
}

export default App;
