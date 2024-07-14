import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import AppName from "./components/AppName";

import Todoitem from "./components/Todoitem";
import "./App.css";
// import TodoItem3 from "./components/TodoItem3";
import TodoData from "./TodoData";
import { useState } from "react";

function App() {
  const initialtodoItem = [];

  const [todoitems, settodoitem] = useState(initialtodoItem);
  const newhandleitem = (itemname, itemduedate) => {
    console.log(`new Item Added :${itemname} date:${itemduedate}`);
    const newtodoitem = [
      ...todoitems,
      { name: itemname, duedate: itemduedate },
    ];
  };
  return (
    <center className="todo-container">
      <AppName />
      <Todoitem onnewItem={newhandleitem} />
      <TodoData todoItem={todoitems}></TodoData>
    </center>
  );
}

export default App;
