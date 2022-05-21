import React, { useState } from "react";
import styles from "./Todo.module.css";
import TodoItem from "./TodoItem";
const Todo = () => {
  let [svalue, setSvalue] = useState("");
  const [todos, setTodos] = useState([]);
  const handleChange = (e) => {
    setSvalue(e.target.value);
  };
  const handletoggle = (id) => {
    const updatedTodo = todos.map((item) =>
      item.id === id ? { ...item, isCompleted: !item.isCompleted } : item
    );
    setTodos(updatedTodo);
  };
  const Delete = (id) => {
    let newTodos = todos.filter((todo) => todo.id != id);
    setTodos(newTodos);
  };
  const completed = () => {
    let completedlist = todos.filter((todo) => todo.isCompleted == true);
    // console.log(completedlist);
    setTodos(completedlist);
  };
  return (
    <div>
      <h1>Todo App</h1>
      <input
        className={styles.box}
        value={svalue}
        placeholder="Write Something"
        onChange={handleChange}
        onKeyDownCapture={(e) => {
          if (e.key === "Enter") {
            setTodos([
              ...todos,
              { id: Date.now(), value: svalue, isCompleted: false }
            ]);
            setSvalue("");
          }
        }}
      />
      <br />
      <br />
      <button onClick={completed}>Completed Todo</button>
      {/* <button onClick={()=>{
        // console.log(svalue);
        // todos.push(svalue);
        // console.log(todos);
        setTodos([...todos,{id:Date.now(),value:svalue,isCompleted:false},]);
        setSvalue(""); //clears input once added
    }}>Add
    </button> */}
      <div className={styles.todolist}>
        {todos.map((todo) => (
          <div className={styles.box}>
            <TodoItem
              key={todo.id}
              todo={todo}
              onDelete={Delete}
              handletoggle={() => handletoggle(todo.id)}
            />
          </div>
        ))}
      </div>
    </div>
  );
};
export default Todo;
