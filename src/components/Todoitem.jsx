import { useState } from "react";

function Todoitem({ onnewItem }) {
  const [todoname, settodoname] = useState();

  const [duedate, setduedate] = useState();

  const handlenamechange = (event) => {
    settodoname(event.target.value);
  };

  const handledatechange = (event) => {
    setduedate(event.target.value);
  };

  const handleaddbuttclick = () => {
    onnewItem(todoname, duedate);
    setduedate("");
    settodoname("");
  };
  return (
    <div class="row  kg-row">
      <div class="col-4">
        <input
          type="text"
          placeholder="Enter Todo Here"
          value={todoname}
          onChange={handlenamechange}
        />
      </div>
      <div class="col-4">
        <input type="date" onChange={handledatechange} value={duedate} />
      </div>
      <div className="col-2">
        <button
          type="button"
          class="btn btn-success   kg-button"
          onClick={handleaddbuttclick}
        >
          Add
        </button>
      </div>
    </div>
  );
}

export default Todoitem;
