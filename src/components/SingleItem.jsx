import React, { useState } from 'react'

export const SingleItem = ({ item, removeItem, editItem }) => {

  

  return (
    <div className="single-item">
    <input onChange={() => editItem(item.id)} type="checkbox" checked={item.completed} />
    <p style={{textTransform: "capitalize", textDecoration: item.completed ? "line-through" : "none"}}>{ item.name }</p>
    <button onClick={() => removeItem(item.id)} className="btn remove-btn" type="button">
      delete
    </button>
  </div>
  )
}
