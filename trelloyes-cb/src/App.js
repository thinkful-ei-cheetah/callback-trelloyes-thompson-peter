import React, { Component } from 'react';
import List from './List'
import './App.css';


class App extends Component {
  state = {
    store: {lists:this.props.lists, 
            allCards : this.props.allCards}
  }

  static defaultProps = {
    store: {
      lists: [],
      allCards: {},
    }
  };

  handleDeleteItem = (item) => {
     const newItems = this.state.store.lists.filter(itm => itm !== item) 
    this.setState({ lists: newItems }) 
    } 


    handleAddItem = (itemName) => { console.log('handle add item', { itemName }) }
    // { return ( 
    //   <section> 
    //     <AddItemForm onAddItem={this.handleAddItem} /> 
    //   </section> ) }

    handleRandomItem = (listID) => { 
      const newRandomCard = () => { 
        const id = Math.random().toString(36).substring(2, 4) + Math.random().toString(36).substring(2, 4); 
        
        return { id, title: `Random Card ${id}`, content: 'lorem ipsum', } 
      }


      console.log('handle add item', newRandomCard())
      console.log(listID)
      


      // setState = {

      // }
    }


  render() {
    const { store } = this.props
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