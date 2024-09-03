import React, { useRef, useState } from "react";

const Card = ({ title, deleteTodo, editTodo, index }) => {
  const [showTodo, setshowTodo] = useState(true);
  const editedValue = useRef()
  const saveEditTodo =()=>{
    console.log(editedValue.current.value);
    
    editTodo(index, editedValue.current.value)
    setshowTodo(true)}
  return (
    <div
      style={{
        margin: "40px",
      }}
    >
      {showTodo ? (
        <div>
          <h3>{title}</h3>
          <button onClick={() => setshowTodo(false)}>edit</button>
          <button onClick={()=>deleteTodo (index)}>delete</button>
        </div>
      ) : (
        <div>
          <input type="text" placeholder="edit your Todo" ref={editedValue} />
          <button onClick={ saveEditTodo}>save</button>
        </div>
      )}
    </div>
  );
};

export default Card;
