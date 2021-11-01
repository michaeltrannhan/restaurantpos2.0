import React, { Component } from 'react';

import { ReactComponent as Home } from "./components/assets/svg/house.svg";
import Cart from "./components/Cart"
import Category from "./components/Category"
import Menu from "./components/Menu"

import Cupcake from "./components/assets/png/cupcake.png"
import Seafood from "./components/assets/png/seafood.png"
import Juice from "./components/assets/png/juice.png"
import Coke from "./components/assets/png/coke.png"
import Alcohol from "./components/assets/png/alcohol.png"
import Candy from "./components/assets/png/candy.png"

import Hamburger from "./components/assets/png/menu/hamburger.png"
import GrilledSquid from "./components/assets/png/menu/grilled_squid.png"
import ChickenNuggets from "./components/assets/png/menu/chicken_nuggets.png"
import CokeMenu from "./components/assets/png/menu/coke.png"
import Kimchi from "./components/assets/png/menu/kimchi.png"
import TomatoPotato from "./components/assets/png/menu/tomato_potato.png"
import Salad from "./components/assets/png/menu/salad.png"
import Steak from "./components/assets/png/menu/steak.png"
import Pork from "./components/assets/png/menu/pork.png"
import Weeb from "./components/assets/png/menu/weeb.png"
import Detail from './components/Detail';

const categories = [
  { id: 0, image: Cupcake, name: 'Cupcake' },
  { id: 1, image: Seafood, name: 'Sea food' },
  { id: 2, image: Juice, name: 'Juice' },
  { id: 3, image: Coke, name: 'Coke' },
  { id: 4, image: Alcohol, name: 'Alcohol' },
  { id: 5, image: Candy, name: 'Candy' },
]

const food = [
  {
    id: 0, name: "Hamburger", image: Hamburger, price: 123.00,
    sideDish: [
      {
        desc: "Vegetables",
        price: 5
      }
    ],
    detail: {
      sku: 401,
      desc: "Hamburger",
    },
    factor: {
      protein: "What is lorem ipsum?",
      additives: "03",
      baking: "040",
      decor: "04"
    }
  },
  {
    id: 1, name: "Grilled squid satay", image: GrilledSquid, price: 241.69,
    sideDish: [
      {
        desc: "No side dish",
        price: 69
      }
    ],
    detail: {
      sku: 401,
      desc: "Hamburger",
    },
    factor: {
      protein: "What is lorem ipsum?",
      additives: "03",
      baking: "040",
      decor: "04"
    }
  },
  {
    id: 2, name: "Chicken nuggets", image: ChickenNuggets, price: 51241.12,
    sideDish: [
      {
        desc: "Beef",
        price: 134
      }
    ],
    detail: {
      sku: 401,
      desc: "Hamburger",
    },
    factor: {
      protein: "What is lorem ipsum?",
      additives: "03",
      baking: "040",
      decor: "04"
    }
  },
  {
    id: 3, name: "Coca Cola", image: CokeMenu, price: 5126.25,
    sideDish: [
      {
        desc: "Pepsi",
        price: 525
      }
    ],
    detail: {
      sku: 401,
      desc: "Hamburger",
    },
    factor: {
      protein: "What is lorem ipsum?",
      additives: "03",
      baking: "040",
      decor: "04"
    }
  },
  {
    id: 4, name: "Kimchi", image: Kimchi, price: 6426.25,
    sideDish: [
      {
        desc: "With wine",
        price: 1
      }
    ],
    detail: {
      sku: 401,
      desc: "Hamburger",
    },
    factor: {
      protein: "What is lorem ipsum?",
      additives: "03",
      baking: "040",
      decor: "04"
    }
  },
  {
    id: 5, name: "Tomato & potato hybridization", image: TomatoPotato, price: 862.64,
    sideDish: [
      {
        desc: "Without tomato & potato",
        price: 123
      }
    ],
    detail: {
      sku: 401,
      desc: "Hamburger",
    },
    factor: {
      protein: "What is lorem ipsum?",
      additives: "03",
      baking: "040",
      decor: "04"
    }
  },
  {
    id: 6, name: "Salad", image: Salad, price: 325.64,
    sideDish: [
      {
        desc: "Meat instead of vegetables",
        price: 321
      }
    ],
    detail: {
      sku: 401,
      desc: "Hamburger",
    },
    factor: {
      protein: "What is lorem ipsum?",
      additives: "03",
      baking: "040",
      decor: "04"
    }
  },
  {
    id: 7, name: "Medium rare steak", image: Steak, price: 982.22,
    sideDish: [
      {
        desc: "But it's chicken",
        price: 98
      }
    ],
    detail: {
      sku: 401,
      desc: "Hamburger",
    },
    factor: {
      protein: "What is lorem ipsum?",
      additives: "03",
      baking: "040",
      decor: "04"
    }
  },
  {
    id: 8, name: "Raw pork", image: Pork, price: 77.22,
    sideDish: [
      {
        desc: "Not raw",
        price: 100
      },
      {
        desc: "Real pig",
        price: 10
      }
    ],
    detail: {
      sku: 401,
      desc: "Hamburger",
    },
    factor: {
      protein: "What is lorem ipsum?",
      additives: "03",
      baking: "040",
      decor: "04"
    }
  },
  {
    id: 9, name: "Don't ask me, this is just an example", image: Weeb, price: 10.01,
    sideDish: [
      {
        desc: "Cup size: Humongous",
        price: 9999
      },
      {
        desc: "Face: Freaking cute",
        price: 8888
      },
      {
        desc: "Existence: Yes pls :(",
        price: 6969
      },
      {
        desc: "2D: No pls :(",
        price: 10
      },
    ],
    detail: {
      sku: 401,
      desc: "Hamburger",
    },
    factor: {
      protein: "What is lorem ipsum?",
      additives: "03",
      baking: "040",
      decor: "04"
    }
  },
]

class App extends Component {

  state = {
    chosen: 0,
    curIdx: 0,
    chosenFood: null,
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

  setChosenFood = (id) => {
    this.setState({ chosenFood: id })
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

  // Detail
  addToCart = (item) => {
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

  render() {

    return (
      <div className="app no-select">
        <div className="home-container" >
          <button className="home-button" >
            <Home className="home-logo"
            />
          </button>
          <p className="home-font" > Back to Home </p>
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
          items={food}
          onClick={this.setChosenFood}
        />
        <Cart
          cart={this.getCartItems()}
          setQuantity={this.setQuantity}
        />
        <Detail
          trigger={this.state.chosenFood !== null}
          item={this.state.chosenFood !== null ? food[this.state.chosenFood] : null}
          onClose={() => { this.setChosenFood(null) }}
          onSubmit={this.addToCart}
        />
      </div>
    );
  }
}

export default App;