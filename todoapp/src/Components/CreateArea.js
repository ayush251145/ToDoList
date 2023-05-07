import React, { useState } from "react";
import Fab from "@mui/material/Fab";
import AddIcon from "@mui/icons-material/Add";

const CreateArea = (props) => {
    const [isExpended,setExpanded] = useState(false);
  const [note, setNote] = useState({
    title: "",
    content: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;

    setNote((prevNote) => {
      return {
        ...prevNote,
        [name]: value,
      };
    });
  };

  const submitNote = (event) => {
    props.onAdd(note);
    setNote({
      title: "",
      content: "",
    });
    event.preventDefault();
  };
  const expand =() =>{
    setExpanded(true);
  }

  return (
    <div>
      <form className="create-note">
        {isExpended && (
             <input
             type="text"
             onChange={handleChange}
             value={note.title}
             name="title"
             placeholder="Title"
           />
        )}
        <textarea
          name="content"
          onChange={handleChange}
          value={note.content}
          rows={isExpended ? 3:1}
          onClick={expand}
          placeholder="Take A Note"
        />
        <Fab onClick={submitNote}>
          <AddIcon />
        </Fab>
      </form>
    </div>
  );
};

export default CreateArea;
