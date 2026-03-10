import React, { useEffect, useState } from "react";

const Todo = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function getData() {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts",
      );
      const data = await response.json();
      if (data && data.length) {
        setData(data);
      }
    }
    getData();
  }, []);

  return (
    <>
      <ul>
        {data.map((todo) => (
          <div>
            <br />
            <li key={todo.id}>{todo.title}</li>
            <li>{todo.body}</li>
            <br />
          </div>
        ))}
      </ul>
    </>
  );
};

export default Todo;
