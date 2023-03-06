import React, { Fragment } from 'react'
import Card from '../card/Card'
import AddButton from '../../button/AddButton'

export default function Cardlist(props) {

  const notes = props.notes
  console.log(notes);
  function handleNewCard(title,description){
    if(title || description) {props.handleNew(title,description)}
  }
  
  return (
    <ul className='grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
      {notes.map((note) => {
        return (
          <Fragment key={note.id}>
            <Card note={note} />
          </Fragment>
        );
      })}
      <AddButton handleNew={handleNewCard}/>
    </ul>
  );
}
