import Contact from "./Contact";
import Header from "./Header";
import { useState } from "react";

const Home = () => {
  const [count, setCount] = useState(0);
  console.log("Render Home");
  return (
    <>
      <Header />
      <div>Home</div>
      <Contact />
      <button onClick={() => setCount((prev) => prev + 1)}>Click</button>
      <p>{count}</p>
    </>
  );
};

export default Home;
