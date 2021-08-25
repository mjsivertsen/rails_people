import React from "react";

const EditUser = (props) => {
  return (
    <div>
      <h1>Edit Person</h1>
      <p>Please enter the updated info of the person.</p>
      <form action={`/users/${props.user.id}`} method="post">
      <input type ="hidden" name="_method" value="patch" />      
      <input defaultValue={props.user.name} name="user[name]" />
      <input defaultValue={props.user.age} name="user[age]" />
      <button type="submit">Change Person</button>
      </form>
      <a href="/">Back to People</a>
    </div>
  );
};

export default EditUser;