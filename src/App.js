import React, { useState } from "react";
import Header from "./Header";

import CreateNote from "./CreateNote";
import Note from "./Note";
const App = () => {
  const [items, setItems] = useState([]);
  const addNote = (note) => {
    setItems((oldData) => {
      return [...oldData, note];
    });
    console.log(note);
  };
  const onDelete = (id) => {
    setItems((oldData) => {
     return oldData.filter((currData, idx) => {
        return idx !== id;
      });
    });
  };
  return (
    <React.Fragment>
      <Header />
      <CreateNote passnote={addNote} />
      {items.map((val, index) => {
        return (
          <Note
            key={index}
            id={index}
            title={val.title}
            content={val.content}
            deleteItem={onDelete}
          />
        );
      })}
    </React.Fragment>
  );
};

export default App;
