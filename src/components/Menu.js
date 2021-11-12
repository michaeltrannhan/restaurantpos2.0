import React, { useState, Component } from 'react';
import './Menu.css';
import { specialColor } from "./Database"
import { ReactComponent as CartLogo } from "./assets/svg/mini-cart.svg";
import { ReactComponent as CartHover } from "./assets/svg/hover-cart.svg";



const Item = ({ id, item, onClick, onClickCart }) => {
  const [Logo, setLogo] = useState(CartLogo)
  const [primary, secondary] = specialColor(item.special)

  const onMouseEnterCart = () => {
    setLogo(CartHover)
  }

  const onMouseLeaveCart = () => {
    setLogo(CartLogo)
  }

  return (
    <div
      className="menu-item-container"
      onClick={onClick}
    >
      {item.special ?
        <div
          className="ribbon"
          style={{
            "--primary": primary,
            "--secondary": secondary
          }}
        ><span>{item.special}</span></div> : ""}
      <img src={item.image} alt="Cupcake"></img>
      <div className="menu-item-description" >
        <div>
          <p className="menu-text-wrap menu-item-text">
            <span className="menu-item-text" style={{ color: "red" }}>
              {id + 1}.
            </span>
            {" " + item.name}
          </p>
        </div>
        <p className="menu-item-text menu-price">
          ${item.price.toFixed(2)}
        </p>
        <Logo className="menu-cart"
          onMouseEnter={onMouseEnterCart}
          onMouseLeave={onMouseLeaveCart}
          onClick={onClickCart}
        />
      </div>
    </div>
  )
}

class Menu extends Component {

  render() {
    return (
      <div className="menu-container" >
        <div className="menu-title">
          <p className="menu-category-font">{this.props.category}</p>
          <div className="menu-line"></div>
        </div>
        <section className="menu-main-container">
          {this.props.items.map((item, index) => {
            return <Item
              key={index}
              id={index}
              item={item}
              onClick={() => { this.props.onClick(item.id) }}
              onClickCart={(e) => {
                e.stopPropagation();
                this.props.onClickCart({
                  id: item.id,
                  quantity: 1,
                  sideDish: []
                })
              }}
            />
          })}
        </section>
      </div>
    )
  }
}

export default Menu
