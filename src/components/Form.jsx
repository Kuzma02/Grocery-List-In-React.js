import React from 'react'
import { toast } from 'react-toastify';

export const Form = ({ addItem }) => {

  const handleSubmit = (e) => {
    e.preventDefault();

    if(e.target.name.value === ""){
      toast.error("Please enter some value");
      return;
    }

    addItem(e.target.name);

    
  

  }

  return (
    <form onSubmit={handleSubmit}>
      <h4>grocery list</h4>
      <div className="form-control">
        <input type="text" name='name' className="form-input" />
        <button type="submit" className="btn">
          add item
        </button>
      </div>
    </form>
  )
}
