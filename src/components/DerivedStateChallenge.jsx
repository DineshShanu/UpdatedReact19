import React, { useState } from "react";

const users = [
  { name: "Alice", age: 25 },
  { name: "Bob", age: 28 },
  { name: "Charlie", age: 23 },
  { name: "Angles", age: 20 },
  { name: "Dive", age: 22 },
];

const DerivedStateChallenge = () => {
  const [getUserList, SetUserList] = useState([]);
  const usr = getUserList.length <= 0 ? 'd-none' : 'd-block';
  const showUserData = () => {
    SetUserList(users);
  };
  return (
    <>
      {/* <ul>
        <h3>User List</h3>
        {users.map((data, index) => (
          <li key={index} className={`test-${index}`}>
            <span>{`${data.name} - ${data.age}`}</span>
          </li>
        ))}
      </ul> */}

      <h4>Click the Buton for Users Data</h4>
      <div className={`my-user ${usr}`}>
        <table style={{ width: "98%", margin: "10px" }}>
          <thead className="bg-primary text-light">
            <tr>
              <th>User Name</th>
              <th>Age</th>
            </tr>
          </thead>
          {getUserList.map((user) => (
            <tbody key={user.age}>
              <tr>
                <td>{user.name}</td>
                <td>{user.age}</td>
              </tr>
            </tbody>
          ))}
        </table>
      </div>

      <button className="btn btn-primary btn-sm" onClick={showUserData}>
        Show Data
      </button>
    </>
  );
};

export default DerivedStateChallenge;
