import React, { useEffect } from "react";

function ToyForm() {
  useEffect(() => {
    fetch("http://localhost:3001/toys", {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify()
    })
    .then(res => res.json())
    .then(newToy => console.log(newToy))
  })
  return (
    <div className="container">
      <form className="add-toy-form">
        <h3>Create a toy!</h3>
        <input
          type="text"
          name="name"
          placeholder="Enter a toy's name..."
          className="input-text"
        />
        <br />
        <input
          type="text"
          name="image"
          placeholder="Enter a toy's image URL..."
          className="input-text"
        />
        <br />
        <input
          type="submit"
          name="submit"
          value="Create New Toy"
          className="submit"
        />
      </form>
    </div>
  );
}

export default ToyForm;
