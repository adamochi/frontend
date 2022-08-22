import React, { useState } from "react";

const CreateNote = () => {
  const [input, setInput] = useState({
    title: "",
    content: "",
  });
  const handleChange = (event) => {
    const { name, value } = event.target;
    setInput((currentState) => {
      return {
        ...currentState,
        [name]: value,
      };
    });
  };
  const handleClick = (e) => {
    e.preventDefault();
    console.log(input);
    e.target.parentNode[0].value = "";
    e.target.parentNode[1].value = "";
  };

  return (
    <div className="container">
      <h1>create</h1>
      <form>
        <input
          value={input.title}
          onChange={handleChange}
          placeholder="note title"
          name="title"
          className="form-control"
          type="text"
          autoCapitalize="off"
        />
        <textarea
          value={input.content}
          onChange={handleChange}
          placeholder="note content"
          name="content"
          className="form-control"
          cols="30"
          rows="10"
          autoCapitalize="off"
        ></textarea>
        <button onClick={handleClick} className="btn btn-lg btn-info">
          Add Note
        </button>
      </form>
    </div>
  );
};

export default CreateNote;
