import React, { useState } from "react";

const AddTodo = () => {
  const [input, setInput] = useState("");
  return (
    <>
      <form onSubmit={addTodoHandler} className="">
        <input type="text" />
      </form>
    </>
  );
};

export default AddTodo;
