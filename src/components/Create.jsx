import React from "react";

function Crate({ handleSubmit, handleInput, input }) {
  return (
    <form onSubmit={handleSubmit}>
      <span>Nama : </span>
      <input onChange={handleInput} value={input.name} name="name" />
      <span>Email : </span>
      <input onChange={handleInput} value={input.email} name="email" />
      <input type={"submit"} />
    </form>
  );
}

export default Crate;
