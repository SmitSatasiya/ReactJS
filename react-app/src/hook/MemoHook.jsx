// import React, { useMemo, useState } from "react";

// // const nums = new Array(30_000_000).fill(0).map((_, i) => {
// const nums = new Array(3).fill(0).map((_, i) => {
//   return {
//     index: i,
//     // isMagical: i === 29_000_000,
//     isMagical: i === 2,
//   };
// });

// const MemoHook = () => {
//   const [count, setCount] = useState(0);
//   const [number, setNumber] = useState(nums);

//   const magical = useMemo(
//     () => number.find((item) => item.isMagical === true),
//     [number],
//   );
//   return (
//     <div>
//       <span>Magical number is {magical.index}</span>
//       <div>
//         <button
//           onClick={() => {
//             setCount((count) => count + 1);
//             if (count == 10) {
//               setNumber(
//                 // new Array(10_000_000).fill(0).map((_, i) => {
//                 new Array(1).fill(0).map((_, i) => {
//                   return {
//                     index: i,
//                     // isMagical: i === 9_000_000,
//                     isMagical: i === 1,
//                   };
//                 }),
//               );
//             }
//           }}
//         >
//           count is {count}
//         </button>
//       </div>
//     </div>
//   );
// };

// export default MemoHook;
