import React, { useState } from "react";
import { useSelector } from "react-redux";
import { selectUser } from "../features/userStore";


const Card = (props) => {
//   const { user } = useSelector(selectUser);
  const randomUser = props.randomUser;


  return (
<div>
      <img src={randomUser.photo} alt="user image" />

    <div key={randomUser.id}  >
      <h1>
        {randomUser.firstname} {randomUser.lastname}
      </h1>
      <h2>{randomUser.service}</h2>
      <h2>{randomUser.birthdate}</h2>
      <h2>
        {randomUser.city} {randomUser.country}
      </h2>
      <h2>{randomUser.email}</h2>
      <h2>{randomUser.phone}</h2>
      </div>
    </div>
  );
};

export default Card;
