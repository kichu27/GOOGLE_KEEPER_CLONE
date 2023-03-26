import React, { useState } from "react";

function CreateArea(props) {
  const [note, setnote] = useState({
    title: "",
    content: ""
  });

  function handlechange(event) {
    const { name, value } = event.target;
    setnote((prevvalue) => {
      return { ...prevvalue, [name]: value };
    });
  }

  function submitnote(event) {
    props.Onadd(note);
    event.preventDefault();
  }

  return (
    <div>
      <form>
        <input onChange={handlechange} name="title" placeholder="Title" />
        <textarea
          onChange={handlechange}
          name="content"
          placeholder="Take a note..."
          rows="3"
        />
        <button onClick={submitnote}>Add</button>
      </form>
    </div>
  );
}

export default CreateArea;
