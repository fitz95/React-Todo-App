import { useState } from 'react';
import { FcPlus } from "react-icons/fc";


const InputTodo = ({addTodoItem}) => {
  const [title, setTitle] = useState('');
  const [message, setMessage] = useState('');

  const handleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title.trim()) {
        addTodoItem(title);
        setTitle('');
        setMessage('')
      } else {
        setMessage('Please make sure you add a Task')
      }
  };
  return (
    <>
    <form onSubmit={handleSubmit} className="form-container">
      <input
        type="text"
        placeholder="Add Todo..."
        value={title}
        onChange={handleChange}
        className='input-text'
      />
      <button className='input-submit'>
        <FcPlus 
        style={{
            fontSize : '20px',
            marginTop : '2px'
        }}
        />
        </button>
    </form>
    <span className="submit-warning" >{message}</span>
    </>
  );
};
export default InputTodo;
