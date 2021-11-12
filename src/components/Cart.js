import React, { Component, useState } from 'react';
import { Link } from 'react-router-dom'

import './Cart.css';
import { ReactComponent as CartLogo } from "./assets/svg/cart.svg";
import { ReactComponent as Plus } from "./assets/svg/plus.svg";
import { ReactComponent as Minus } from "./assets/svg/minus.svg";

const Item = ({ id, name, image, totalPrice, quantity, sideDish, setQuantity, editItem }) => {
  const [editingQuantity, setEditingQuantity] = useState(false)
  var value = quantity

  const onPlus = (e) => {
    e.stopPropagation();
    setQuantity(id - 1, quantity + 1);
  }

  const onMinus = (e) => {
    e.stopPropagation();
    setQuantity(id - 1, quantity - 1);
  }

  return (
    <div
      className="cart-item-container"
      onClick={editItem}
    >
      <div className="cart-item-image-wrap">
        <img src={image} alt="Coke" className="cart-item-image" ></img>
      </div>
      <div>
        <p className="cart-text-wrap cart-item-text">
          <span className="cart-item-text" style={{ color: "red", textOverflow: "ellipsis" }}>
            {id + ". "}
          </span>
          {name}
        </p>
        <div style={{ minHeight: "10px" }}>
          {sideDish.map((d, index) => {
            return (
              <p
                className="cart-text-wrap cart-item-text cart-item-detail"
                key={index}
              >
                {d.desc} <span style={{ float: "right", color: "red", fontWeight: "bold" }}>${d.price}</span>
              </p>
            )
          })}
        </div>
      </div>
      <div className="cart-item-quantity" style={{}}>
        <Minus className="cart-quantity"
          style={{
            marginLeft: "80px",
            fill: "#2C3A57",
            border: "2px solid #C8CCD4"
          }}
          onClick={onMinus}
        />
        {
          editingQuantity ? <textarea
            autoFocus
            defaultValue={quantity}
            className="cart-quantity-label text-area"
            rows="1"
            onKeyDown={(e) => {
              if (e.key === "Enter")
                e.target.blur();
            }}
            onClick={(e) => {
              e.stopPropagation()
            }}
            onFocus={(e) => e.target.select()}
            onChange={(e) => {
              value = e.target.value
            }}
            onBlur={() => {
              setQuantity(id - 1, Number(value))
              setEditingQuantity(false)
            }}
          ></textarea> :
            <span
              className="cart-quantity-label"
              onClick={(e) => {
                e.stopPropagation()
                setEditingQuantity(true)
              }}
            >{quantity}</span>
        }
        <Plus
          className="cart-quantity"
          onClick={onPlus}
        />
      </div>
      <span className="cart-item-price">${totalPrice.toFixed(2)}</span>
      <span className="cart-item-price cart-item-tax">
        (Incl. tax 10% = ${(totalPrice / 100).toFixed(2)})
      </span>
    </div >
  )
}

class Cart extends Component {

  render() {
    var totalPay = 0;

    return (
      <div className="cart-container" >
        <div className="cart-header" >
          <CartLogo className="cart-logo" />
          <h1 className="cart-font" > Your cart </h1>
          <button className="dine-button">DINE IN</button>
        </div>
        <div className="cart-main-container">
          {this.props.cart.map((c, index) => {
            var totalPrice = c.price;
            c.sideDish.forEach((d) => {
              totalPrice += d.price
            })
            totalPrice = Math.round(totalPrice * c.quantity * 100) / 100
            totalPay += totalPrice;

            return <Item
              key={index}
              id={index + 1}
              name={c.name}
              image={c.image}
              totalPrice={totalPrice}
              quantity={c.quantity}
              sideDish={c.sideDish}
              setQuantity={this.props.setQuantity}
              editItem={() => { this.props.editItem(index) }}
            />
          })}
        </div>
        <div className="cart-checkout">
          Total:
          <p style={{
            float: 'right',
            color: "red",
            fontSize: "25px",
            minWidth: "135px",
            textAlign: "right"
          }}>
            ${Math.round(totalPay * 100) / 100}
          </p>
          <p style={{
            float: 'right',
            fontSize: "15px",
            minWidth: "180px",
            textAlign: "right"
          }}>
            (Incl. tax 10% = ${Math.round(totalPay) / 100})
          </p>
          <Link to="/payment" style={{ textDecoration: 'none' }}>
            <div
              className="cart-payment"
              onClick={() => { this.props.setTotalPay(totalPay * 1.1) }}
            >
              <p>
                PAYMENT
              </p>
            </div>
          </Link>
        </div>
      </div>
    )
  }
}

export default Cart
