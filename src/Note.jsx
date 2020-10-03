import React from "react";

const Note = (props) => {
  const deleteNote = (event) => {
    event.preventDefault();
    props.deleteItem(props.id);
  };
  return (
    <>
      <div className="note">
        <h1 contentEditable="true">{props.title}</h1>
        <hr />
        <p contentEditable="true">{props.content}</p>
        <i onClick={deleteNote} className="trashIcon fas fa-trash"></i>
      </div>
    </>
  );
};
export default Note;
