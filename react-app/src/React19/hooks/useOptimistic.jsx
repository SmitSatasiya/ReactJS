// | useState               | useOptimistic             |
// | ---------------------- | ------------------------- |
// | Updates after response | Updates before response   |
// | Slower UX              | Instant UI                |
// | Normal state           | Temporary predicted state |

import React, { useOptimistic, useState } from "react";

export default function CommentExample() {
  const [comments, setComments] = useState([]);

  const [optimisticComments, addOptimisticComment] = useOptimistic(
    comments,
    (currentComments, newComment) => [
      ...currentComments,
      { text: newComment, sending: true },
    ]
  );

  async function handleSubmit(formData) {
    const newComment = formData.get("comment");

    // 1️⃣ Show instantly
    addOptimisticComment(newComment);

    // 2️⃣ Simulate server delay
    await new Promise((resolve) => setTimeout(resolve, 2000));

    // 3️⃣ Save real comment
    setComments((prev) => [
      ...prev,
      { text: newComment, sending: false },
    ]);
  }

  return (
    <div style={{ padding: "20px" }}>
      <h2>useOptimistic Example</h2>

      <form action={handleSubmit}>
        <input type="text" name="comment" placeholder="Write comment..." />
        <button type="submit">Add</button>
      </form>

      <ul>
        {optimisticComments.map((c, index) => (
          <li key={index}>
            {c.text} {c.sending && " (Sending...)"}
          </li>
        ))}
      </ul>
    </div>
  );
}
