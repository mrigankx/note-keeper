import React, { useState } from "react";

const CreateNote = (props) => {
  const [note, setNote] = useState({
    title: "",
    content: "",
  });
  const inputEvent = (event) => {
    const { name, value } = event.target;
    setNote((oldData) => {
      return {
        ...oldData,
        [name]: value,
      };
    });
  };
  const addEvent = (event) => {
    event.preventDefault();
    props.passnote(note);
    setNote({
      title: "",
      content: "",
    });
  };
  return (
    <React.Fragment>
      <div className="main_note">
        <form>
          <input
            value={note.title}
            name="title"
            onChange={inputEvent}
            type="text"
            placeholder="Title" 
          />
          <hr />
          <br />
          <textarea
            value={note.content}
            name="content"
            onChange={inputEvent}
            rows="5"
            cols="35"
            placeholder="Write a note..." required
          ></textarea>
          <i onClick={addEvent} className="addButton fas fa-plus-circle"></i>
        </form>
      </div>
    </React.Fragment>
  );
};

export default CreateNote;
