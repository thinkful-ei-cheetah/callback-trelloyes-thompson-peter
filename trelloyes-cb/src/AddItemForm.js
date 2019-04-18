import React, { Component } from 'react';

class AddItemForm extends Component {
    onAddRandom = (e) => {
        e.preventDefault()
         this.props.onAddItem();
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
          {/* {this.props.listID} */}
        </button>



</form>
        )
}
}

export default AddItemForm;


