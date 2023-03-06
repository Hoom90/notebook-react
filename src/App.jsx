import Header from "./components/Header";
import Cardlist from "./components/cardlist/Cardlist";
import { useState } from "react";
// import axios from "axios";

function App() {
  const [notes, setNotes] = useState([])
  let counter=''

  function handleCreateNewCard(title,description){
    counter = Date.now()
    setNotes({counter,title,description})
    // notes.push({counter,title,description})
  }
  return (
    <div className="container mx-auto">
      <Header className=""/>
      <Cardlist notes={notes} handleNew={handleCreateNewCard}/>
    </div>

  );
}

export default App;
