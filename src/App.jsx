import React, { useRef, useState } from "react";
import Card from "./components/Card";

const App = () => {
  const todoVal = useRef();
  const [data, setdata] = useState([]);

  const addTodo = (e) => {
    e.preventDefault();
    console.log(todoVal.current.value);
    data.push(todoVal.current.value);
    setdata([...data]);
    todoVal.current.value = "";
  };
  const deleteTodo = (index) => {
    console.log("delete todo", index);
    data.splice(index, 1);
    setdata([...data]);
  };
  const editTodo = (index, value) => {
    console.log("edit todo", value);
    data.splice(index, 1, value);
    setdata([...data]);
  };
  return (
    <>
      <h1>todo list</h1>
      <form onSubmit={addTodo}>
        <input type="text" ref={todoVal} placeholder="enter todo" />
        <button type="submit">submit</button>
      </form>
      {data.length > 0 ? (
        data.map((item, index) => {
          return (
            <Card
              key={index}
              title={item}
              deleteTodo={deleteTodo}
              editTodo={editTodo}
              index={index}
            />
          );
        })
      ) : (
        <h1>No data found....</h1>
      )}
    </>
  );
};

export default App;
