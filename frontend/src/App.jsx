// 🔥What Is a Race Condition?

// Multiple async operations run at the same time, and the one that finishes last overwrites the correct result — even if it wasn’t the latest request.
// It’s called a "race" because the requests are racing each other to finish.

import { useState } from "react";
import "./App.css";
import { useEffect } from "react";
import axios from "axios";

function App() {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [search, setSearch] = useState("");

  // const [products, error, loading] = customeReactQuery("/api/products");

  useEffect(() => {
    // make packets
    const controller = new AbortController();

    // in hook use async for that iife function write
    (async () => {
      try {
        setLoading(true);
        setError(false);
        // const response = await axios.get("api/products");
        const response = await axios.get("api/products?search=" + search, {
          signal: controller.signal,
        });
        console.log(response.data);
        setProducts(response.data);
        setLoading(false);
      } catch (error) {
        if (axios.isCancel(error)) {
          console.log("Request canceled", error.message);
          return;
        }
        setError(true);
        setLoading(false);
      }
    })();

    // Cleanup Method
    return () => [controller.abort()];
  }, [search]);

  // if (error) {
  //   return <h1>Something Went Wrong!</h1>;
  // }

  // if (loading) {
  //   return <h1>Loading...</h1>;
  // }

  return (
    <>
      <h1>Api React</h1>
      <input
        type="text"
        placeholder="Search"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      {loading && <h1>Loading...</h1>}
      {error && <h1>Something went wrongs</h1>}
      <h2>Number of Production are: {products.length}</h2>
    </>
  );
}

export default App;

// ## ✅ Definition of AbortController
// > **AbortController is a Web API used to cancel ongoing asynchronous operations like HTTP requests to prevent memory leaks, race conditions, and unnecessary processing.**
// It works using two parts:

// * **`controller`** → controls the cancellation
// * **`controller.signal`** → connects the request to the controller
// * **`controller.abort()`** → cancels the operation

// ## 🚀 Main Uses of AbortController

// ### 1️⃣ Prevent Race Conditions
// When multiple API calls are triggered (like in search input), you can cancel old requests so only the latest one updates the UI.

// ### 2️⃣ Prevent Memory Leaks in React
// If a component unmounts while a request is still running, aborting prevents:
// Can't perform a React state update on an unmounted component

// ### 3️⃣ Cancel Unnecessary Network Requests
// Example:

// * User navigates away from page
// * User types new search before previous one finishes
// * User clicks another filter

// Instead of wasting network resources, you cancel the old request.

// ### 4️⃣ Improve Performance
// Cancelling unnecessary requests:

// * Saves bandwidth
// * Reduces server load
// * Makes UI more predictable


// ### 5️⃣ Timeout Handling

// You can manually abort a request after some time:

// ```js
// const controller = new AbortController();

// setTimeout(() => {
//   controller.abort();
// }, 5000);
// ```

// This cancels the request after 5 seconds.

// ---

// ## 📌 Where It Is Commonly Used

// * React `useEffect`
// * Search bars
// * Filter systems
// * Infinite scrolling
// * Page navigation
// * Fetch API
// * Axios (with `signal`)


// Custome Hook 
// const customeReactQuery = (urlPath) => {
//   const [products, setProducts] = useState([]);
//   const [error, setError] = useState(false);
//   const [loading, setLoading] = useState(false);
//   useEffect(() => {
//     // in hook use async for that iife function write
//     (async () => {
//       try {
//         setLoading(true);
//         setError(false);
//         const response = await axios.get("api/products");
//         console.log(response.data);
//         setProducts(response.data);
//         setLoading(false);
//       } catch (error) {
//         setError(true);
//         setLoading(false);
//       } finally {
//         setLoading(false);
//       }
//     })();
//   }, []);

//   return [products, error, loading];
// };
