import React from 'react';

function InputField (items) {
  return (
    <div className="container">
      <label><b>{items.strings.en.s8} :</b></label> 
      <input 
        type="text"  
        className="inputfield"
        value={items.strings.en.s9?items.strings.en.s9:""}
        required = {items.item.isMandatory}
        onChange={items.handleInputChange}
        >
      </input>
    </div>
  )
}

export default (InputField);


