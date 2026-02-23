// 🧠 What is use()?
// use() is a new React 19 API that allows components to read Promises and suspend rendering until the Promise resolves, simplifying async data handling.
// use() is a new React 19 API that lets you:

// ✅ Read a Promise directly
// ✅ Wait for async data inside a component
// ✅ Without using useEffect + useState

// 🔥 Why use() Was Introduced

// Before React 19, to fetch data you needed:
// useEffect(() => {
//   fetch(...)
// }, []);

// Which required:
// useState
// useEffect
// loading state
// error handling

// Now with use() → much simpler.

import React, { Suspense, use } from "react";

function fetchUser() {
  return fetch("https://jsonplaceholder.typicode.com/users/1")
    .then(res => res.json());
}

const userPromise = fetchUser();

function User() {
  const user = use(userPromise);

  return <h2>{user.name}</h2>;
}

export default function Usehook() {
  return (
    <Suspense fallback={<h2>Loading...</h2>}>
      <User />
    </Suspense>
  );
}
