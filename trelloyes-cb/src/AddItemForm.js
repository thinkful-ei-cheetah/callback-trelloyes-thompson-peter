import React, { Component } from 'react';

class AddItemForm extends Component {
    onAddRandom = (e) => {
        e.preventDefault()
        // e.target['inputName'] references `<input name='inputName' />`
        this.props.onAddItem()
      }
      render() {
    
     return (
<form onClick={this.onAddRandom}>


  <button
          type='button'
          className='List-add-button'
          onClick={console.log('I was clicked')}
        >
          + Add Random Card
        </button>



</form>
        )
}
}

export default AddItemForm;


