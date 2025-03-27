import React, { useState } from "react";

import OrderCard from "./components/OrderCard";
import CheckoutButton from "./components/CheckoutButton";

const ORDERS = [
  {
    product: "Banana",
    price: 54.6,
    quantity: 3,
  },
  {
    product: "Computer",
    price: 100.5,
    quantity: 4,
  },
  {
    product: "Table",
    price: 1070,
    quantity: 3,
  },
];

export default function App() {
  const [orders, setOrders] = React.useState(ORDERS);

  function handleOrder(newOrder){
    setOrders( o =>
      o.map((order) =>
        order.product === newOrder.name ? { ...order, quantity: newOrder.quantity } : order
      )
    );
  }
  function calculateTotal(){
    return orders.reduce((acc, cur) => acc + cur.price * cur.quantity, 0)
  }

  console.log(orders)
  return (
    <>
      <header>
        <h1>Your orders</h1>
      </header>

      <div className="order-list">
        {orders.map(order => <OrderCard name={order.product} 
                                        unitPrice={order.price}
                                        quantityP={order.quantity}
                                        handleOrder={handleOrder}></OrderCard>)}
      </div>

      <CheckoutButton total={calculateTotal()}></CheckoutButton>
    </>
  );
}
