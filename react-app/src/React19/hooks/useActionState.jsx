// import React, { useActionState } from "react";

// async function submitForm(prevState, formData) {
//   const name = formData.get("name");

//   await new Promise((resolve) => setTimeout(resolve, 1000));

//   if (!name) {
//     return { success: false, message: "Name is required!" };
//   }

//   return { success: true, message: `Welcome, ${name}!` };
// }

// export default function ActionStateExample() {
//   const [state, formAction, isPending] = useActionState(submitForm, {
//     success: null,
//     message: "",
//   });

//   return (
//     <div style={{ padding: "20px" }}>
//       <h2>useActionState Example</h2>

//       <form action={formAction}>
//         <input type="text" name="name" placeholder="Enter your name" />
//         <button type="submit" disabled={isPending}>
//           {isPending ? "Submitting..." : "Submit"}
//         </button>
//       </form>

//       {state.message && (
//         <p
//           style={{
//             color: state.success ? "green" : "red",
//             marginTop: "10px",
//           }}
//         >
//           {state.message}
//         </p>
//       )}
//     </div>
//   );
// }

// | Hook             | Purpose                            |
// | ---------------- | ---------------------------------- |
// | `useActionState` | Manages form result state          |
// | `useFormStatus`  | Tracks submission status (loading) |


// useFormStatus Example
import React, { useActionState } from "react";
import { useFormStatus } from "react-dom";

async function submitForm(prevState, formData) {
  const name = formData.get("name");

  await new Promise((resolve) => setTimeout(resolve, 2000));

  if (!name) {
    return { success: false, message: "Name is required!" };
  }

  return { success: true, message: `Welcome, ${name}!` };
}

function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <button type="submit" disabled={pending}>
      {pending ? "Submitting..." : "Submit"}
    </button>
  );
}

export default function FormExample() {
  const [state, formAction] = useActionState(submitForm, {
    success: null,
    message: "",
  });

  return (
    <form action={formAction}>
      <input type="text" name="name" placeholder="Enter name" />
      <SubmitButton />

      {state.message && (
        <p style={{ color: state.success ? "green" : "red" }}>
          {state.message}
        </p>
      )}
    </form>
  );
}
