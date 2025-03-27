import React, { useState } from "react";

export default function OrderCard({name, unitPrice, quantityP, handleOrder}) {
  const [quantity, setQuantity] = useState(quantityP);

  function handleTakeOut(){
    if(quantity > 0){
      setQuantity(q => q - 1);
      handleOrder({name: name, quantity: quantity - 1});
    }
  }
  function handleAddIn(){
    setQuantity(q => q + 1);
    handleOrder({name: name, quantity: quantity + 1});
  }
  return (
    <div className="order">
      <div>
        <h4>{name}</h4>
        <small>$ {unitPrice}</small>
      </div>

      <div className="order-quantity">
        <div className={`order-button disable`} onClick={handleTakeOut}>-</div>
        <h4>{quantity}</h4>
        <div className="order-button" onClick={handleAddIn}>+</div>
      </div>
    </div>
  );
}
