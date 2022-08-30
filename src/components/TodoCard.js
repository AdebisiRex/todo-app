import React from "react";
import edit from "../media/edit.png";
import bin from "../media/bin.png";
// import Popup from "./Popup";

const TodoCard = ({ title, details, regTime, due, index, deleteT }) => {
  return (
    <>
      <div className="col-12 col-sm-6 col-md-4 col-lg-3 g-2">
        <div className="card bg-light border-0 shadow-sm ">
          {/* <img src="..." className="card-img-top" alt="..."> */}
          <div className="card-body">
            <small className="text-muted">Reg:{regTime}</small>
            <h5 className="card-title">{title} </h5>
            <p className="card-text">{details}</p>
            <small className="fw-bold">Task Due: {due}</small>
            <div className="card-footer bg-light text-end ">
              <img
                src={edit}
                alt=""
                data-bs-toggle="modal"
                data-bs-target={"#modal" + index}
                className="me-3"
                width={20}
              />
              <img
                src={bin}
                alt=""
                onClick={deleteT}
                className="me-3"
                width={20}
              />
             
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TodoCard;
