// import React from 'react';
import Card from './Card'
import './List.css';
import AddItemForm from './AddItemForm'
import * as React from "react";
import * as ReactDOM from 'react-dom';
import Dragula from 'react-dragula';

export default function List(props) {

    return (
      <div className='container' ref={this.dragulaDecorator}>>
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
     </div>
    )
  
}