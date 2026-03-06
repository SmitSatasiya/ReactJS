import React, { useState } from "react";
import "./App.css";
import ActionStateExample from "./React19/hooks/useActionState";
import CommentExample from "./React19/hooks/useOptimistic";
import Resource_Preload from "./React19/apis/Resource_Preload";
import Simplified_Ref from "./React19/hooks/Simplified_Ref";
import Usehook from "./React19/apis/Use";
import AP from "./API_Integration/AP";
import FramerMotion from "@/motion/FramerMotion";
// import MemoHook from "./hook/MemoHook";
import Navbar from "./componentes/Navbar";
import { useSelector, useDispatch } from "react-redux";
import { decrement, increment, multiply } from "./Redux/counter/counterSlice";

const App = () => {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();
  return (
    <>
      <Navbar />
      <div>
        <h1>Count: {count}</h1>

        <button onClick={() => dispatch(increment())}>Increment</button>

        <button onClick={() => dispatch(decrement())}>Decrement</button>

        <button onClick={() => dispatch(multiply())}>Multiply</button>
      </div>
      {/* <ActionStateExample /> */}
      {/* <CommentExample /> */}
      {/* <Resource_Preload /> */}
      {/* <Simplified_Ref /> */}
      {/* <Usehook /> */}
      {/* <AP /> */}
      {/* <FramerMotion /> */}
      {/* <MemoHook /> */}
    </>
  );
};

export default App;
