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
            listId={props.id}
            key={card.id}
            id={card.id}
            title={card.title}
            content={card.content}
            deleteCard={props.deleteCard}
          />
        )}

        <section> 
            <AddItemForm onAddItem= {() => props.addRandom(props.id)} /> 
        </section>

      </div>
    </section>
  )
}