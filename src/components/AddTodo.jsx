import React, { useRef } from 'react'
import css from "./style/AddTodo.module.css"
const AddTodo = ({addTodo}) => {
  const nameRef = useRef();
  const dateRef = useRef();

  const handleOnClick = (event) =>{
    event.preventDefault();
    console.log(event);
    const name = nameRef.current.value;
    const date = dateRef.current.value;
    nameRef.current.value = "";
    dateRef.current.value = "";
    addTodo(name,date);
  }
  return (
    <div className='container'>
      <form onSubmit={handleOnClick} className="row mt-3">
        <div className="col-6">
          <input 
          className={css.inputContainer}  type="text" 
          ref={nameRef}
        />
        </div>
        <div className="col-4">
          <input className={css.inputContainer} type="date" 
          ref={dateRef}
          />
        </div>
        <div className="col-2">
          <button type='submit' className={`${css.inputContainer} btn btn-success`} >ADD</button>
        </div>
      </form>
    </div>
  )
}

export default AddTodo;