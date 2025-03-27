import { useState } from "react";

export default function StuffForm({ onAddStuff }) {
  const [name, setName] = useState("");
  const [price, setPrice] = useState(0.0);

  function changeName(event){
    setName(event.target.value);
  }
  function changePrice(event){
    setPrice(event.target.value);
  }
  function handleSubmit(event){
    event.preventDefault();
    if(name && price){
      onAddStuff({name: name, price: price});
    }
    else{
      window.alert("Enter Required Value!");
    }

    setName("");
    setPrice(0);
  }

  return (
    <form className="stuff-form" onSubmit={handleSubmit}>
      <p>Stuff name</p>
      <input type="search" placeholder="Banana" value={name} onChange={changeName}/>

      <p>Stuff price</p>
      <input type="search" placeholder="15" value={price} onChange={changePrice}/>

      <button type="submit">Add Stuff</button>
    </form>
  );
}
