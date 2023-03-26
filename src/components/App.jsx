import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {

  const [notes , setnotes] = useState([]); 

  function addnote(note) {
    setnotes((prevnote)=>{
return [...prevnote , note]

    })
  }

  function deleteitem(id)
{
setnotes((prevnotes)=>{
  return notes.filter((anote , index)=>{
    return index !== id
  })
})
}

  return (
    <div>
      <Header />
      <CreateArea Onadd={addnote} />
       {notes.map((annote,index)=>{ return <Note key={index} id={index} title = {annote.title} content ={annote.content} ondelete={deleteitem}/> })}
      <Footer />
    </div>
  );
}

export default App;
