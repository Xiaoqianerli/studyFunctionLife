import "./styles.css";
import { useEffect, useState } from "react";
import fetch from "node-fetch";
// 88
// https://jsonplaceholder.typicode.com/todos/1
function Todo({ id }) {
  const [data, setData] = useState({});
  useEffect(() => {
    console.log("outer seven");
    fetch(`https://jsonplaceholder.typicode.com/todos/${id}`)
      .then((res) => res.text())
      .then((data) => {
        setData({ name: "seven" });
        console.log("inner seven");
      });
  }, [id]);

  return <div>{data.name}</div>;
}
export default function App() {
  const [id, setId] = useState(1);
  useEffect(() => {
    setTimeout(() => {
      setId(2);
    }, 1000);
  }, []);

  return (
    <div className="App">
      <Todo id={id} />
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
    </div>
  );
}
