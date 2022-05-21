import React, { useState } from "react";
import styles from "./Todo.module.css";
import TodoItem from "./TodoItem";
const Todo = () => {
  let [svalue, setSvalue] = useState("");
  const [todos, setTodos] = useState([]);
  const handleChange = (e) => {
    setSvalue(e.target.value);
  };
  const Delete = (id) => {
    let newTodos = todos.filter((todo) => todo.id != id);
    setTodos(newTodos);
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
            <TodoItem key={todo.id} todo={todo} onDelete={Delete} />
          </div>
        ))}
      </div>
    </div>
  );
};
export default Todo;
