import React from "react";

const User = (props) => {
  return (
    <div>
      <h1>Here is the person you wanted to look at.</h1>
      <h3>Name: {props.user.name}</h3>
      <h3>Age: {props.user.age}</h3>
      <div>
        <a href="/">Back to People</a>
        {/* <a href={`/users/${user.id}/edit`}> Edit Person </a> */}
        {/* <a href={user.id} data-method="delete"> Delete Person </a> */}
      </div>
    </div>
  );
};

export default User;