import React, { Component } from 'react';

import { ReactComponent as HomeLogo } from "./assets/svg/house.svg";

import { food, categories } from "./Database"
import Cart from "./Cart"
import Category from "./Category"
import Menu from "./Menu"
import Detail from './Detail';

class Home extends Component {

  state = {
    chosen: 0,
    curIdx: 0,
    chosenFood: null,
    editIndex: null,
    searchResult: [],
    cart: [
      {
        id: 0,
        quantity: 1,
        sideDish: []
      },
      {
        id: 2,
        quantity: 1,
        sideDish: []
      },
      {
        id: 3,
        quantity: 1,
        sideDish: []
      },
      {
        id: 4,
        quantity: 1,
        sideDish: []
      },
      {
        id: 6,
        quantity: 1,
        sideDish: []
      },
      {
        id: 8,
        quantity: 1,
        sideDish: [0]
      },
      {
        id: 9,
        quantity: 9,
        sideDish: [0, 1, 2, 3]
      },
    ],
  }

  // Search
  onSearch = (e) => {
    var value = e.target.value.toLowerCase()
    if (!value)
      this.setState({ searchResult: [] })
    else {
      var res = []
      for (var i = 0; i < food.length; i++) {
        if (food[i].name.toLowerCase().includes(value))
          res.push(i)
      }
      this.setState({ searchResult: res })
    }
  }

  // Category
  leftFull = () => {
    return this.state.curIdx <= 0
  }
  rightFull = () => {
    return this.state.curIdx + 5 >= categories.length
  }
  getCategories = () => {
    var idx = this.state.curIdx;
    var init;
    if (idx + 5 <= categories.length) {
      init = idx;
    } else {
      init = categories.length - 5;
    }

    if (init > this.state.chosen || init + 4 < this.state.chosen) {
      this.setState({ chosen: init });
    }

    return categories.slice(init, init + 5);
  }
  prevCategories = () => {
    if (!this.leftFull()) {
      var idx = this.state.curIdx - 5;
      idx = idx < 0 ? 0 : idx;
      this.setState({ curIdx: idx });
    }
  }
  nextCategories = () => {
    if (!this.rightFull()) {
      var idx = this.state.curIdx + 10;
      idx = idx > categories.length ? categories.length - 5 : idx;
      this.setState({ curIdx: idx });
    }
  }
  categoryClick = (id) => {
    this.setState({ chosen: id });
  }
  getCateBackground = () => {
    var temp = [
      'white', 'white', 'white', 'white', 'white'
    ];
    temp[this.state.chosen - this.state.curIdx] = '#2C3A57';
    return temp;
  }

  // Menu
  setChosenFood = (id) => {
    this.setState({ chosenFood: id })
  }

  getMenu = () => {
    return food.filter(f => f.categoryID === this.state.chosen)
  }

  // Cart
  getCartItems = () => {
    let cart = this.state.cart;
    var rv = [];

    cart.forEach(function (part, index) {
      this[index] = {
        id: part.id,
        quantity: part.quantity,
        sideDish: part.sideDish.map((d) => { return food[part.id].sideDish[d] }),
        name: food[part.id].name,
        image: food[part.id].image,
        price: food[part.id].price,
      };
    }, rv);

    return rv;
  }
  setQuantity = (index, quantity) => {
    let cart = this.state.cart;

    if (quantity === 0) { cart.splice(index, 1) }
    else {
      cart[index] = {
        id: cart[index].id,
        quantity: quantity,
        sideDish: cart[index].sideDish,
      }
    }

    this.setState({ cart: cart })
  }
  editItem = (index) => {
    this.setState({ editIndex: index })
  }

  // Detail
  addToCart = (item) => {
    if (item.quantity === 0) return
    let cart = this.state.cart;
    let index = cart.findIndex(
      (i) => {
        return (
          i.id === item.id &&
          JSON.stringify(i.sideDish) === JSON.stringify(item.sideDish)
        )
      }
    )
    if (index > -1)
      cart[index] = {
        ...cart[index],
        quantity: cart[index].quantity + item.quantity
      }
    else
      cart.push(item)

    this.setState({ cart: cart })
  }
  editCartItem = (item) => {
    let cart = this.state.cart
    if (item.quantity === 0) {
      cart.splice(this.state.editIndex, 1)
      return
    }
    cart[this.state.editIndex].quantity = item.quantity
    cart[this.state.editIndex].sideDish = item.sideDish
    this.setState({ cart: cart })
  }

  render() {

    return (
      <div className="app">
        <div className="home-container" >
          <button className="home-button" >
            <HomeLogo className="home-logo"
            />
          </button>
          <p className="home-font" > Back to Home </p>
          <div className="search-container">
            <input
              className="search"
              type="text"
              placeholder="Search.."
              onChange={this.onSearch}
              onBlur={(e) => {
                e.target.value = ''
                this.setState({ searchResult: [] })
              }}
            />
            <div>
              {this.state.searchResult.map(index => {
                return (
                  <div
                    key={index}
                    onMouseDown={() => { this.setChosenFood(index) }}
                  >
                    <div>
                      <img src={food[index].image} alt={food[index].name} />
                    </div>
                    <h5>{food[index].name} </h5>
                    <p>${food[index].price.toFixed(2)} </p>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
        <Category
          categories={this.getCategories()}
          curIdx={this.state.curIdx}
          chosen={this.state.chosen - this.state.curIdx}
          onClick={this.categoryClick}
          leftFull={this.leftFull}
          rightFull={this.rightFull}
          prevCategories={this.prevCategories}
          nextCategories={this.nextCategories}
          backgrounds={this.getCateBackground()}
        />
        <Menu
          category={categories[this.state.chosen].name}
          items={this.getMenu()}
          onClick={this.setChosenFood}
          onClickCart={this.addToCart}
        />
        <Cart
          cart={this.getCartItems()}
          setQuantity={this.setQuantity}
          editItem={this.editItem}
          setTotalPay={this.props.setTotalPay}
        />
        <Detail
          trigger={this.state.editIndex !== null || this.state.chosenFood !== null}
          item={this.state.editIndex !== null ? food[this.state.cart[this.state.editIndex].id] :
            (this.state.chosenFood !== null ? food[this.state.chosenFood] :
              null)}
          itemInfo={this.state.editIndex ?
            {
              quantity: this.state.cart[this.state.editIndex].quantity,
              checked: this.state.cart[this.state.editIndex].sideDish
            } :
            null}
          onClose={() => {
            if (this.state.editIndex !== null)
              this.setState({ editIndex: null })
            else
              this.setChosenFood(null)
          }}
          onSubmit={this.state.editIndex ? this.editCartItem : this.addToCart}
        />
      </div>
    );
  }
}

export default Home;