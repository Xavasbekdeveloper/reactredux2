import React from "react";
import "./Users.css";
import male from "../../assets/male-avatar-boy-face-man-user-9.svg";
import female from "../../assets/female-avatar-girl-face-woman-user-2.svg";
import { useDispatch } from "react-redux";
import { followUser, removeUsers } from "../../context/slice/userSlice";

function Users({ data }) {
  let dispatch = useDispatch();
  console.log(data);
  return (
    <div className="users__wrapper">
      {data?.map((user) => (
        <div key={user.id} className="users__card">
          <img src={user.gender === "male" ? male : female} alt="" />
          <h2>{user.name}</h2>
          <p>{user.username}</p>
          <p>{user.profession}</p>
          <p>{user.age} years old</p>
          <p className="users__card__hour">
            {user.createdAt.split("T")[1].slice(0, 5)}
          </p>
          <button onClick={() => dispatch(removeUsers(user))}>Remove</button>
          <button onClick={() => dispatch(followUser(user))}>
            {user.follow ? "unFollow" : "Follow"}
          </button>
          <button className="users__card__edit">Edit</button>
        </div>
      ))}
    </div>
  );
}

export default Users;
