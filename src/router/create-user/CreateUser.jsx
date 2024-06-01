import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToUsers } from "../../context/slice/userSlice";
import { message } from "antd";
import "./CreateUser.css";

function CreateUser() {
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [profession, setProfession] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("");
  let dispatch = useDispatch();
  let users = useSelector((state) => state.users.data);

  const handleSubmit = (e) => {
    e.preventDefault();
    let date = new Date();
    // time
    let timeZoneGMT = (hour) =>
      new Date(date.getTime() + hour * 60 * 60 * 1000);

    // check username
    let checkUsername = users.find((user) => user.username === username);
    if (checkUsername) {
      message.warning("username already exists");
      return;
    }

    // new user
    let newUser = {
      id: date.getTime(),
      name,
      username,
      profession,
      age: +age,
      gender,
      createdAt: timeZoneGMT(5).toISOString(),
      follow: false,
      edit: false,
    };
    dispatch(addToUsers(newUser));

    setName("");
    setUsername("");
    setProfession("");
    setAge("");
    setGender("");
    setEdit(null);
  };

  return (
    <div className="create__user">
      <h2>Create User</h2>
      <form onSubmit={handleSubmit} className="create__user-form" action="">
        <input
          required
          value={name}
          onChange={(e) => setName(e.target.value)}
          type="text"
          placeholder="name"
        />
        <input
          required
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          type="text"
          placeholder="username"
        />
        <input
          required
          value={profession}
          onChange={(e) => setProfession(e.target.value)}
          type="text"
          placeholder="profession"
        />
        <input
          required
          value={age}
          onChange={(e) => setAge(e.target.value)}
          type="number"
          placeholder="age"
        />
        <select
          required
          value={gender}
          onChange={(e) => setGender(e.target.value)}
          name=""
          id=""
        >
          <option value="">gender</option>
          <option value="male">male</option>
          <option value="female">female</option>
        </select>
        <button type="submit">Create</button>
      </form>
    </div>
  );
}

export default CreateUser;
