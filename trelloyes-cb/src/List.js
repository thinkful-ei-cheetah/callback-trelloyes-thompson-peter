import React from 'react';
import Card from './Card'
import './List.css';
import AddItemForm from './AddItemForm'

export default function List(props) {
  return (
    <section className='List'>
      <header className='List-header'>
        <h2>{props.header}</h2>
      </header>
      <div className='List-cards'>
        {props.cards.map((card) =>
          <Card
            key={card.id}
            title={card.title}
            content={card.content}
          />
        )}

        <section> 
            <AddItemForm onAddItem= {() => props.addRandom(props.id)} listID={props.id}/> 
        </section>
        {/* <button
          type='button'
          className='List-add-button'
        >
          + Add Random Card
        </button> */}
      </div>
    </section>
  )
}