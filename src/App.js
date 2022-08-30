import React, { useState } from "react";
import "./App.css";

import CreateTodo from "./components/CreateTodo";
import Fetch from "./components/Fetch";

import Popup from "./components/Popup";
import TodoCard from "./components/TodoCard";

function App() {
  const [allTodo, setallTodo] = useState([]);
  const [todo, settodo] = useState("");
  const [dueDate, setdueDate] = useState("");
  const [dueTime, setdueTime] = useState("");
  const [details, setdetails] = useState("");
  const [regDate, setregDate] = useState("");

  const [task, settask] = useState("");
  const [editDate, seteditDate] = useState("");
  const [editTime, seteditTime] = useState("");
  const [editDetails, seteditDetails] = useState("");

  const addTodo = () => {
    let d = Date();
    setregDate(d);

    if (todo === "") {
      alert("Add Task to create todo");
    } else {
      let dueDetails = `${dueDate} || ${dueTime}`;
      let newTodo = { todo, dueDetails, dueDate, dueTime, details, regDate };
      setallTodo([...allTodo, newTodo]);
    }
  };

  const editTask = (index) => {
    let d = Date();
    setregDate(d);

    let dueDet = `${editDate} || ${editTime}`;

    let edittedTask = {
      todo: task,
      dueDetails: dueDet,
      dueDate: editDate,
      dueTime: editTime,
      details: editDetails,
    };
    console.log(edittedTask);
    let newArray = [...allTodo];
    let a = newArray[index];
    a = edittedTask;

    setallTodo(newArray);
  };

  const deleteTodo = (ind) => {
    let d = Date();

    setregDate(d);
    let newArray = [...allTodo];
    let edittedArray = newArray.filter((itemm, index) => index !== ind);
    setallTodo(edittedArray);
  };

  return (
    <>
      {/* <Fetch/> */}
      <CreateTodo
        click={addTodo}
        changeTodo={(e) => settodo(e.target.value)}
        changeDueDate={(e) => setdueDate(e.target.value)}
        changeDueTime={(e) => setdueTime(e.target.value)}
        changeDetails={(e) => setdetails(e.target.value)}
      />

      <div className="container">
        <div className="row">
          {allTodo.map((item, index) => (
            <>
              <TodoCard
                details={item.details}
                title={item.todo}
                due={item.dueDetails}
                date={item.dueDate}
                time={item.dueTime}
                regTime={item.regDate}
                index={index}
                deleteT={() => deleteTodo(index)}
                // editter={() => editTask("", "", "", "", index)}
              />
              <Popup
                index={index}
                title={item.todo}
                details={item.details}
                date={item.dueDate}
                time={item.dueTime}
                chgTask={(e) => settask(e.target.value)}
                chgDate={(e) => seteditDate(e.target.value)}
                chgTime={(e) => seteditTime(e.target.value)}
                chgDetails={(e) => seteditDetails(e.target.value)}
                save={() => editTask(index)}
              />
            </>
          ))}
        </div>
      </div>
    </>
  );
}

export default App;
