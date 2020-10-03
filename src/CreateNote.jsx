import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import AddIcon from "@material-ui/icons/Add";

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
            placeholder="Write a note..."
          ></textarea>
          <Button
            onClick={addEvent}
            variant="contained"
            color="primary"
            size="small"
          >
            <AddIcon className="plus_sign" />
          </Button>
        </form>
      </div>
    </React.Fragment>
  );
};

export default CreateNote;
