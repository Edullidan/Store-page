import React, { useState } from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";
import Order from "./Order";

const showOrders = (props) => {
  let summa = 0
  props.orders.forEach((el) => summa += Number.parseFloat(el.price))
  if (!Array.isArray(props.orders) || props.orders.length === 0) {
    return <div className="empty"></div>;
  }

  return (
    <div>
      {props.orders.map((el) => (
        <Order onDelete={props.onDelete} key={el.id} item={el}></Order>
      ))}
      <p className="summa">Сумма:{new Intl.NumberFormat().format(summa)}$</p>
    </div>
  );
};

const showNothing = () => {
  return (<div className="empty">
    <h2>Товаров нет</h2>
  </div>)
}

export default function Header(props) {
  const [cartOpen, setCartOpen] = useState(false);

  return (
    <header>
      <div>
        <span className='logo'>House Staff</span>
        <ul className='navigation'>
          <li>Про нас</li>
          <li>Контакты</li>
          <li>Кабинет</li>
        </ul>
        <AiOutlineShoppingCart
          onClick={() => setCartOpen(!cartOpen)}
          className={`shop-cart-button ${cartOpen && "active"}`}
        />
         {cartOpen && (
          <div className="shop-cart"
          >
            {props.orders.length > 0 ?
            showOrders(props) : showNothing() 
          }
          </div>
         )}
      </div>
      <div className='presentation'></div>
    </header>
  );
}