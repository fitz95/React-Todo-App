import { useState, useRef } from 'react';
import styles from '@/../styles/TodoItem.module.css'
import { FaTrashAlt, FaRegEdit } from "react-icons/fa";


const TodoItem = ({ itemProp, handleChange, delTodo, setUpdate }) => {
    // const [updateInput, setUpdateInput] = useState(itemProp.title);
    const editInputRef = useRef(null);
    const [editing, setEditing] = useState(false);
    let viewMode = {};
    let editMode = {};
    if (editing) {
      viewMode.display = 'none';
    } else {
      editMode.display = 'none';
    }
    const handleEditing = () => {
        setEditing(true);
    }

    const handleUpdatedDone = (event) => {
        if (event.key === 'Enter') {
          setUpdate(editInputRef.current.value, itemProp.id)  
          setEditing(false);
        }
    };

    const completedStyle = {
        fontStyle: 'italic',
        color: '#595959',
        opacity: 0.4,
        textDecoration: 'line-through',
      };


    return (
      <li className={styles.item}>
        <div className={styles.content} style={viewMode}>
        <input type="checkbox"
         checked={itemProp.completed}
         onChange={() => handleChange(itemProp.id)}
        />
        <button onClick={handleEditing}><FaRegEdit style={{color: "#5e5e5e", fontSize: "16px"}}/></button>
        <button onClick={() => delTodo(itemProp.id)}>< FaTrashAlt style={{color: "#5e5e5e", fontSize: "16px"}}/></button>
        <span style={itemProp.completed ? completedStyle : null}>
            {itemProp.title}
        </span>
        </div>
        <input
            type="text"
            ref={editInputRef}
            defaultValue={itemProp.title}
            className={styles.textInput}
            style={editMode}
            onKeyDown = {handleUpdatedDone}
        />
      </li>
    );
  };
  export default TodoItem;
  