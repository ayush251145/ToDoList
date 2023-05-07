import { useState } from "react";
import "./App.css";
import CreateArea from "./Components/CreateArea";
import Header from "./Components/Header";
import Note from "./Components/Note";
import Footer from "./Components/Footer";

function App() {
  const [notes, setNotes] = useState([]);

  const addNote = (newNote) => {
    setNotes((prevNote) => {
      return [...prevNote, newNote];
    });
    console.log(notes);
  };
  const deleteNote = (id) => {
    setNotes((prevNote) => {
      return prevNote.filter((noteItem, index) => {
        return index !== id;
      });
    });
  };

  return (
    <div className="App">
      <Header />
      <CreateArea onAdd={addNote} />
      {notes.map((noteItem, index) => {
        return (
          <Note
            key={index}
            id={index}
            title={noteItem.title}
            content={noteItem.content}
            onDelete={deleteNote}
          />
        );
      })}
      <Footer/>
    </div>
  );
}

export default App;
