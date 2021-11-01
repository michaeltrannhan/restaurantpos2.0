import React, { Component } from 'react'
import './Cart.css';
import './Detail.css';

import { ReactComponent as CartLogo } from "./assets/svg/cart.svg";
import { ReactComponent as Close } from "./assets/svg/close.svg";
import { ReactComponent as Plus } from "./assets/svg/plus.svg";
import { ReactComponent as Minus } from "./assets/svg/minus.svg";


const Factor = ({ name, content }) => {
  return (
    <h4 className="factor">
      {name}: {" "} <span style={{ color: "grey", fontWeight: "normal" }}> {content}</span>
    </h4>
  )
}

const SideDish = ({ item, onChange }) => {
  return (
    <label class="check-container">{item.desc}
      <input type="checkbox" onChange={onChange} />
      <span class="check-mark"></span>
      <span style={{
        color: "red",
        fontWeight: "bold",
        float: "right",
        marginRight: "30px"
      }}>
        kr {item.price}
      </span>
    </label>
  )
}

export default class Detail extends Component {
  state = {
    quantity: 1,
    checked: []
  }

  setQuantity = (quantity) => {
    this.setState({ quantity: quantity })
  }

  checkSideDish = (index) => {
    var checked = this.state.checked
    if (checked.includes(index)) {
      checked.splice(checked.indexOf(index), 1)
    }
    else {
      checked.push(index)
    }

    this.setState({ checked: checked })
  }

  onSubmit = () => {
    this.props.onSubmit({
      id: this.props.item.id,
      quantity: this.state.quantity,
      sideDish: this.state.checked
    })
    this.onClose()
  }

  onClose = () => {
    this.setState({ checked: [] })
    this.props.onClose()
  }

  render() {
    let item = this.props.item;
    var totalPrice = item ? item.price : null;

    return (this.props.trigger) ? (
      <div className="popup">
        <div className="popup-inner">
          <div className="header">
            ADD TO CART
            <Close className="close-button" onClick={this.onClose}></Close>
          </div>
          <div className="detail-container">
            <div className="image-container">
              <div>
                <img src={item.image} alt={item.name}></img>
              </div>
            </div>
            <div className="description">
              <div className="specs">
                <h3>SKU</h3>
                <h3>Description</h3>
                <h3 className="specs-last">Unit Price</h3>
                <p>{item.detail.sku}</p>
                <p>{item.detail.desc}</p>
                <p className="specs-last specs-price">kr {item.price.toFixed(2)}</p>
              </div>
              <div className="divider"></div>
              <div className="quantity-row">
                <h3 className="quantity-left">Quantity</h3>
                <div className="cart-item-quantity quantity-right">
                  <Minus className="cart-quantity"
                    style={{
                      fill: "#2C3A57",
                      border: "2px solid #C8CCD4"
                    }}
                    onClick={() => { this.setQuantity(this.state.quantity - 1) }}
                  />
                  <span className="cart-quantity-label">{this.state.quantity}</span>
                  <Plus
                    className="cart-quantity"
                    onClick={() => { this.setQuantity(this.state.quantity + 1) }}
                  />
                </div>
              </div>
              <div className="divider"></div>
              <Factor name="Protein" content={item.factor.protein} />
              <Factor name="Additives" content={item.factor.additives} />
              <Factor name="Baking material" content={item.factor.baking} />
              <Factor name="Food decoration" content={item.factor.decor} />
              <h3 style={{ marginTop: "30px" }}>
                Side dishes {"("}<span style={{ color: "red" }}>*</span>{")"}
                <span style={{
                  float: "right",
                  color: "grey",
                  fontSize: "15px",
                  fontWeight: "normal"
                }} >
                  Selected quantity: {this.state.checked.length}
                </span>
              </h3>
              <h3 style={{
                color: "grey",
                fontSize: "15px",
                fontWeight: "normal",
                marginBottom: "20px",
              }} >
                Please select on of the properties below
              </h3>
              {item.sideDish.map((d, index) => {
                let checked = this.state.checked.includes(index);
                if (checked) totalPrice += d.price;
                return <SideDish
                  key={index}
                  item={d}
                  onChange={() => { this.checkSideDish(index) }}
                />
              })}
            </div>
            <div className="add-container">
              <div className="add-button" onClick={this.onSubmit}>
                <CartLogo />
                <h3>Kr {(totalPrice * this.state.quantity).toFixed(2)} </h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    ) : ""
  }
}
