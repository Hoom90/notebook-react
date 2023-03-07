import Header from "./components/Header";
import Cardlist from "./components/cardlist/Cardlist";
import { useState } from "react";

export default function App() {
  const [notes, setNotes] = useState([])

  function handleCreateNewCard(title,description){
    let id = Date.now()
    let pined = false
    let color = "bg-blue-500"
    setNotes([...notes,{id,title,description,pined,color}])
  }

  function handleDeleteCard(index){
    for(let i=0;i<notes.length;i++){
      if(notes[i].id === index){
        setNotes(current => current.filter(items => items.id !== index))
      }
    }
  }

  function handleColorChange(color,index){
    for(let i=0;i<notes.length;i++){
      if(notes[i].id === index){
        notes[i].color = color
      }
    }
    setNotes([...notes])
  }

  function handlePinChange(IsPined,index){
    for(let i =0;i<notes.length;i++){
      if(notes[i].id === index){
        notes[i].pined = IsPined
      }
    }
    setNotes([...notes])
  }

  return (
    <div className="container mx-auto">
      <Header/>
      <Cardlist notes={notes} handleNew={handleCreateNewCard} handlePin={handlePinChange} handleDelete={handleDeleteCard} handleColor={handleColorChange}/>
    </div>
  );
}
