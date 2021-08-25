import React from "react";

const Users = (props) => {
  return (
    <div>
    <h1>Welcome to the People Thing</h1>
    <p>This is a rails project where we mysteriously keep track of some people.  Those people are listed below.</p>
    <a href="/users/new">Create a Person</a>
    {props.users.map((user) => {
    return ( 
    <div style={{margin:"10px", border: "4px solid grey"}}>
    <p>Person No. {user.id}</p>
    <p>Person Name: {user.name}</p>
    <p>Person Age: {user.age}</p>
      <div>
        <a href={`/users/${user.id}`}> View Person </a>
        <a href={`/users/${user.id}/edit`}> Edit Person </a>
        <a href={`/users/${user.id}`} data-method="delete"> Delete Person </a>
      </div>
    </div>
    );
    }
    )};

    </div>
  );
};

export default Users