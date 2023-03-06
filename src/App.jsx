import Header from "./components/Header";
import Cardlist from "./components/cardlist/Cardlist";
import { useEffect,useState } from "react";

export default function App() {
  const [notes, setNotes] = useState([])

  function handleCreateNewCard(title,description){
    let counter = Date.now()
    let pined = false
    setNotes([...notes,{counter,title,description,pined}])
  }

  function handlePinChange(IsPined,index){
    for(let i =0;i<notes.length;i++){
      if(notes[i].counter === index){
        notes[i].pined = IsPined
      }
    }
    setNotes(notes)
  }

  useEffect(() => {
    console.log("hello")
  }, [notes])
  
  return (
    <div className="container mx-auto">
      <Header className=""/>
      <Cardlist notes={notes} handleNew={handleCreateNewCard} handlePin={handlePinChange}/>
    </div>
  );
}
