import React from "react";
import { Button } from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";
const Note = (props) => {
  const deleteNote = () => {
    props.deleteItem(props.id);
  };
  return (
    <>
      <div className="note">
        <h1 contentEditable="true">{props.title}</h1>
        <hr />
        <p contentEditable="true">{props.content}</p>
        <Button onClick={deleteNote} variant="contained" color="secondary">
          <DeleteIcon />
        </Button>
      </div>
    </>
  );
};
export default Note;
