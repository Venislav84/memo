import { useState, memo } from "react";

const Contact = () => {
  const [count, setCount] = useState(0);
  console.log("Render Contact");
  return (
    <div>
      Contact
      <button onClick={() => setCount((prev) => prev + 1)}>Click</button>
      <p>{count}</p>
    </div>
  );
};

export default memo(Contact);
