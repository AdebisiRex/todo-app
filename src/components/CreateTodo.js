import React from "react";

const CreateTodo = ({ click, changeTodo, changeDueDate, changeDueTime, changeDetails }) => {
  return (
    <>
      <div className="col-7 p-5 mx-auto  shadow mb-3">
        {/* <form> */}
          <input
            className="form-control  mb-3"
            type="text"
            name="todo"
            placeholder="Input Todo"
            onChange={changeTodo}
          />
          <div className="input-group mb-3">
            <span className="input-group-text">Task Due</span>
            <input
              type="date"
              className="form-control"
              placeholder="DueDate"
              onChange={changeDueDate}
            />
            <input
              type="time"
              className="form-control"
              placeholder="Username"
              onChange={changeDueTime}
            />
          </div>
          <textarea
          onChange={changeDetails}
            className="form-control mb-3"
            placeholder="More details about this task"
            name="Todo Details"
            id=""
            cols="30"
            rows="3"
          ></textarea>
          <button onClick={click} className="btn btn-lg btn-info form-control">
            Add Todo
          </button>
        {/* </form> */}
      </div>
    </>
  );
};

export default CreateTodo;
