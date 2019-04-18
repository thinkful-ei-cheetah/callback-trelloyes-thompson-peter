import React, { Component } from 'react';
import List from './List'
import './App.css';


class App extends Component {
  state = {
    store: {lists: this.props.store.lists, 
            allCards : this.props.store.allCards}
  }
    

  handleDeleteItem = (listId,itemId) => {
    let allLists= this.state.store.lists;
    let allCard= this.state.store.allCards;
    const newLists = allLists.map(list => 
      { list.cardIds = 
        list.cardIds.filter(id => id !== itemId); 
        return list; 
      });
    
    console.log("newlists:",newLists)
    this.setState({ 
      store: {
        lists: newLists,
        allCards: {
          ...allCard
        }
      }
    })

    console.log('post-state:', listId, itemId) 

  } 

  handleAddItem = (itemName) => {
      const nuCard = {} ;
      const newLists = this.state.store.lists.map(list => {
        if (list.id === itemName) {
          list.cardIds.push(nuCard.id)
        }
        return list
      })

      this.setState({
        store: {
          lists: newLists,
          allCards: {
            ...this.state.store.allCards,
            [nuCard.id]: nuCard
          }
        }
      })
  
      console.log('handle add item', { itemName }) 
  
  }


    handleRandomItem = (listID) => { 


      const newRandomCard = () => { 
        const id = Math.random().toString(36).substring(2, 4) + Math.random().toString(36).substring(2, 4); 
        
        return { id, title: `Random Card ${id}`, content: 'lorem ipsum', } 
      }

      const randomCard = newRandomCard()
      const newLists = this.state.store.lists.map(list => {
        if (list.id === listID) {
          list.cardIds.push(randomCard.id)
        }
        return list
      })

      this.setState({
        store: {
          lists: newLists,
          allCards: {
            ...this.state.store.allCards,
            [randomCard.id]: randomCard
          }
        }
      })

    }


  render() {
    const {store}  = this.state
    return (
      <main className='App'>
        <header className='App-header'>
          <h1>Trelloyes!</h1>
        </header>
        <div className='App-list'>
          {store.lists.map(list => (
            <List
              key={list.id}
              header={list.header}
              cards={list.cardIds.map(id => store.allCards[id])}
              addRandom={this.handleRandomItem}
              deleteCard={this.handleDeleteItem}
              id={list.id}
            />
          ))}
        </div>
      </main>
    );
  }
}

export default App;