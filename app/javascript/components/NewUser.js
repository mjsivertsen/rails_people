import React from "react";

const NewUser = () => {
  return (
    <div>
      <h1>Create New Person</h1>
      <p>Please enter the info of the new person.</p>
      <form action="/users" method="post">
      <input name="user[name]" placeholder="name goes here" />
      <input name="user[age]" placeholder="age goes here" />
      <button type="submit">Add Person</button>
      </form>
      <a href="/">Back to People</a>
    </div>
  );
};

export default NewUser;