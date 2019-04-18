import React, { Component } from 'react';
import List from './List'
import './App.css';


class App extends Component {
  state = {
    store: {lists: this.props.store.lists, 
            allCards : this.props.store.allCards}
  }
    
  // static defaultProps = {
  //   store: {
  //     lists: [],
  //     allCards: {},
  //   }
  // };

  handleDeleteItem = (item) => {
     const newItems = this.state.store.lists.filter(itm => itm !== item) 
    this.setState({ lists: newItems }) 
    } 


    handleAddItem = (itemName) => { console.log('handle add item', { itemName }) }

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


      console.log('handle add item', randomCard)
      console.log(listID)
      console.log(this.state.store.lists[0].cardIds)
      console.log(this.state.allCards)

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
              id={list.id}
            />
          ))}
        </div>
      </main>
    );
  }
}

export default App;