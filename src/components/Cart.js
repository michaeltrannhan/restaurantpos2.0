import React, { Component, useState } from 'react';
import { Link } from 'react-router-dom'

import './Cart.css';
import { ReactComponent as CartLogo } from "./assets/svg/cart.svg";
import { ReactComponent as Plus } from "./assets/svg/plus.svg";
import { ReactComponent as Minus } from "./assets/svg/minus.svg";

const Item = ({ id, name, image, totalPrice, quantity, sideDish, setQuantity }) => {
  const [plus, setPlus] = useState("red")
  const [minus, setMinus] = useState("#2C3A57")

  const onMouseLeavePlus = () => {
    setPlus("red");
  }

  const onMouseDownPlus = () => {
    setPlus("#FC9393");
  }

  const onMouseUpPlus = () => {
    setPlus("red");
    setQuantity(id - 1, quantity + 1);
  }

  const onMouseLeaveMinus = () => {
    setMinus("#2C3A57");
  }

  const onMouseDownMinus = () => {
    setMinus("#C8CCD4");
  }

  const onMouseUpMinus = () => {
    setMinus("#2C3A57");
    setQuantity(id - 1, quantity - 1);
  }

  return (
    <div className="cart-item-container">
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
                {d.desc} <span style={{ float: "right", color: "red", fontWeight: "bold" }}>Kr {d.price}</span>
              </p>
            )
          })}
        </div>
      </div>
      <div className="cart-item-quantity" style={{}}>
        <Minus className="cart-quantity"
          style={{
            marginLeft: "80px",
            fill: minus,
            border: "2px solid #C8CCD4"
          }}
          onMouseLeave={onMouseLeaveMinus}
          onMouseDown={onMouseDownMinus}
          onMouseUp={onMouseUpMinus}
        />
        <span className="cart-quantity-label">{quantity}</span>
        <Plus
          className="cart-quantity"
          style={{ fill: plus }}
          onMouseLeave={onMouseLeavePlus}
          onMouseDown={onMouseDownPlus}
          onMouseUp={onMouseUpPlus}
        />
      </div>
      <span className="cart-item-price">Kr {totalPrice.toFixed(2)}</span>
      <span className="cart-item-price cart-item-tax">
        (Incl. tax 10% = Kr {(totalPrice / 100).toFixed(2)})
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
            />
          })}
        </div>
        <div className="cart-checkout">
          Total:
          <p style={{
            float: 'right',
            color: "red",
            fontSize: "25px",
          }}>
            Kr {Math.round(totalPay * 100) / 100}
          </p>
          <p style={{
            float: 'right',
            fontSize: "15px",
          }}>
            (Incl. tax 10% = Kr {Math.round(totalPay) / 100})
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
