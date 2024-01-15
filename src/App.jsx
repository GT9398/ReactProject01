import AppName from "./components/AppName"
import AddTodo from "./components/AddTodo"
import TodoItems from "./components/TodoItems"
import ErrorMassage from "./components/ErrorMassage"
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { useState } from "react"

function App() {
  const [todoItems,setTodoItems] =useState([]);
  //add the todo into an array
  const addTodo =(nameVal,dateVal) =>{
    const item ={
      name:nameVal,
      date:dateVal
    }
    const newItem = [...todoItems,item];
    setTodoItems(newItem);
  }
  //delete todo
  const handleDeleteItem = (itemName) =>{
    //filter method filter the record and return the new array
      const newTodo = todoItems.filter(item => itemName!==item.name);
      setTodoItems(newTodo);
  }
  return (
   <div className="appContainer">
      <AppName/>
      <AddTodo addTodo={addTodo}/>
      {todoItems.length==0&&<ErrorMassage/>}
      <TodoItems todoItems={todoItems} handleDeleteItem={handleDeleteItem}/>
   </div>
  )
}

export default App
