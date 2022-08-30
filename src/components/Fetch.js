import React, { useState } from "react";
import axios from "axios";

const Fetch = () => {
  const [users, setusers] = useState("");
//   const endpoint = "https://jsonplaceholder.typicode.com/users";
  const endpoint2 = "https://api.github.com/users";

  const getData = () => {
    axios.get(endpoint2).then((result) => {
      //   console.log(result.data);
      setusers(result.data);
    });
  };

  return (
    <>
      <button className="btn form-control btn-info" onClick={getData}> Fetch</button>

      {users.map((user, index) => (
        <>
          <h3>{user.login}</h3>
          <img src={user.avatar_url} alt="" />
        </>
      ))}
    </>
  );
};

export default Fetch;
