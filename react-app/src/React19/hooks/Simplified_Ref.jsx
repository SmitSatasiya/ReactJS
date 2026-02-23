// Before:
// ref was special
// Needed forwardRef

// Now:
// ref works like normal prop
// No forwardRef needed

// useRef is a React Hook.

import React, { useRef } from "react";

function Section({ ref }) {
  return <div ref={ref} style={{ height: "150vh", background: "lightblue" }} />;
}

export default function Simplified_Ref() {
  const sectionRef = useRef(null);

  const scrollToSection = () => {
    sectionRef.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <button onClick={scrollToSection}>Scroll</button>
      <Section ref={sectionRef} />
    </>
  );
}


