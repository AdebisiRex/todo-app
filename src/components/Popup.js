import React from "react";
// import { useState } from "react";

const Popup = ({ title, details, index, date, time, chgTask, chgTime, chgDetails, chgDate, save }) => {


  return (
    <>
      <div
        className="modal fade"
        id={"modal" + index}
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                Edit Task Information
              </h5>
            </div>
            <div className="modal-body">
              <input
                className="form-control mb-3"
                type="text"
                name="todo"
                placeholder={title}
                // placeholder="Input Todo"
                onChange={chgTask}
              />

              <div className="input-group mb-3">
                <span className="input-group-text">Task Due</span>
                <input
                  value={date}
                  type="date"
                  className="form-control"
                  placeholder="DueDate"
                  onChange={chgDate}
                />
                <input
                  type="time"
                  placeholder={time}
                  className="form-control"
                  // placeholder="Username"
                  onChange={chgTime}
                />
              </div>
              <textarea
                onChange={chgDetails}
                className="form-control mb-3"
                // placeholder="More details about this task"
                name="Todo Details"
                id=""
                placeholder={details}
                cols="30"
                rows="3"
              ></textarea>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button
                data-bs-dismiss="modal"
                type="button"
                className="btn btn-info"
                onClick={save}
              >
                Save changes
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Popup;
