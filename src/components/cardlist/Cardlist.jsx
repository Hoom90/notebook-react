import React, { Fragment } from 'react'
import Card from '../card/Card'
import AddButton from '../../button/AddButton'

export default function Cardlist(props) {

  const notes = props.notes
  
  function handleNewCard(title,description){
    if(title || description) {props.handleNew(title,description)}
  }

  function handleDeleteCard(index){
    props.handleDelete(index)
  }

  function handlePinChange(IsPined,index){

    props.handlePin(IsPined,index)
  }
  
  return (
    <ul className='grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
      {notes.map(note => (
          <Fragment key={note.id}>
            <Card note={note} handlePin={handlePinChange} handleDelete={handleDeleteCard}/>
          </Fragment>
      ))}
      <AddButton handleNew={handleNewCard}/>
    </ul>
  );
}
