import { useState } from "react";
import { Form } from "./components/Form";
import { Items } from "./components/Items";
import { nanoid } from "nanoid";
import { ToastContainer, toast } from 'react-toastify';

const setLocalStorage = (items) => {
  localStorage.setItem("list", JSON.stringify(items));
}

const getLocalStorage = () => {
  let list = localStorage.getItem("list");
  if(list){
    list = JSON.parse(localStorage.getItem("list"));
  }else{
    list = [];
  }
  return list;
}

const App = () => {
  const [items, setItems] = useState(getLocalStorage());

  const removeItem = (id) => {
    const filteredItems = items.filter(item => item.id !== id);
    setItems(filteredItems);
    setLocalStorage(filteredItems);
    toast.success("Item successfuly deleted");
  }

  const addItem = (itemToAdd) => {
    const item = {
      id: nanoid(),
      name: itemToAdd.value,
      completed: false
    };
    const newItems = [...items, item];
    setItems(newItems);
    setLocalStorage(newItems);
    toast.success("Item successfuly added");
  }

  const editItem = (itemId) => {
    const newItems = items.map(item => {
      if(item.id === itemId){
        const newItem = {...item, completed: !item.completed};
        return newItem;
      }
      return item;
    });
    setItems(newItems);
    setLocalStorage(newItems);
  }
  

  return (
    <section className="section-center">
      <Form addItem={addItem} setItems={setItems} items={items} />
      <Items editItem={editItem} removeItem={removeItem} setItems={setItems} items={items} />
      <ToastContainer position='top-center' />
    </section>
    
  );
};

export default App;
