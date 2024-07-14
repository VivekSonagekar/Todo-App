// import App from "./App";
import TodoItem3 from "./components/TodoItem3";
const TodoData = ({ todoItem }) => {
  return (
    <div className="item-container">
      {todoItem.map((props, index) => (
        <TodoItem3
          key="index"
          tododate={props.duedate}
          todoname={props.name}
        ></TodoItem3>
      ))}
    </div>
  );
};

export default TodoData;
