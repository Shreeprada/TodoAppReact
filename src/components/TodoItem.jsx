import React, { useState } from "react";
import styles from "./Todo.module.css";
const TodoItem = ({ todo, onDelete, handletoggle }) => {
  const [isCompleted, setIscompleted] = useState(todo.isCompleted);
  return (
    <div className={styles.todo}>
      <input
        type="checkbox"
        checked={isCompleted}
        onChange={(e) => {
          setIscompleted(e.target.checked);
          handletoggle(todo.id);
        }}
      />
      <div className={isCompleted ? styles.striked : styles.box}>
        {todo.value}
      </div>
      <button onClick={() => onDelete(todo.id)}>Delete</button>
    </div>
  );
};
export default TodoItem;
