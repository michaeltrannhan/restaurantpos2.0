import React, { useState, Component } from 'react';
import './Menu.css';
import { ReactComponent as CartLogo } from "./assets/svg/mini-cart.svg";
import { ReactComponent as CartHover } from "./assets/svg/hover-cart.svg";

const Item = ({ id, name, price, image, onClick, onClickCart }) => {
  const [Logo, setLogo] = useState(CartLogo)

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
      <img src={image} alt="Cupcake"></img>
      <div className="menu-item-description" >
        <div>
          <p className="menu-text-wrap menu-item-text">
            <span className="menu-item-text" style={{ color: "red" }}>
              {id + 1}.
            </span>
            {" " + name}
          </p>
        </div>
        <p className="menu-item-text menu-price">
          ${price.toFixed(2)}
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
        <p className="menu-category-font">{this.props.category}</p>
        <div className="menu-line"></div>
        <section className="menu-main-container">
          {this.props.items.map(item => {
            return <Item
              key={item.id}
              id={item.id}
              name={item.name}
              price={item.price}
              image={item.image}
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
