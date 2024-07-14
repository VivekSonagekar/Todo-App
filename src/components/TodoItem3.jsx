function TodoItem3(props, index) {
  return (
    <div class="row kg-row">
      <div class="col-4">{props.todoname}</div>
      <div class="col-4">{props.tododate}</div>
      <div class="col-2">
        <button type="button" class="btn btn-danger kg-button">
          Delete
        </button>
      </div>
    </div>
  );
}

export default TodoItem3;
