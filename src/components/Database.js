import Cupcake from "./assets/png/cupcake.png"
import Seafood from "./assets/png/seafood.png"
import Juice from "./assets/png/juice.png"
import Coke from "./assets/png/coke.png"
import Alcohol from "./assets/png/alcohol.png"
import Candy from "./assets/png/candy.png"

import Hamburger from "./assets/png/menu/hamburger.png"
import GrilledSquid from "./assets/png/menu/grilled_squid.png"
import ChickenNuggets from "./assets/png/menu/chicken_nuggets.png"
import CokeMenu from "./assets/png/menu/coke.png"
import Kimchi from "./assets/png/menu/kimchi.png"
import TomatoPotato from "./assets/png/menu/tomato_potato.png"
import Salad from "./assets/png/menu/salad.png"
import Steak from "./assets/png/menu/steak.png"
import Pork from "./assets/png/menu/pork.png"
import Weeb from "./assets/png/menu/weeb.png"

export const categories = [
  { id: 0, image: Cupcake, name: 'Cupcake' },
  { id: 1, image: Seafood, name: 'Sea food' },
  { id: 2, image: Juice, name: 'Juice' },
  { id: 3, image: Coke, name: 'Coke' },
  { id: 4, image: Alcohol, name: 'Alcohol' },
  { id: 5, image: Candy, name: 'Candy' },
]

export function specialColor(special) {
  /*
    Assign colors to a special ribbon of
    an item. If not set explicitly for 
    a type return a grey-ish theme.
  */
  console.log(special);
  if (special.toLowerCase() === "bestseller")
    return ["#79A70A", "#9BC90D"]
  else if (special.toLowerCase() === "hot")
    return ["#a70a0a", "#c90d0d"]
  else if (special.toLowerCase() === "discount")
    return ["#a7a40a", "#c9c60d"]
  else if (special.toLowerCase() === "coupon")
    return ["#0a82a7", "#0d94c9"]
  else
    return ["grey", "#c7c7c7"]
}

export const food = [
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
    },
    categoryID: 0,
    special: "Bestseller"
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
    },
    categoryID: 0,
    special: "Hot"
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
    },
    categoryID: 0,
    special: "Discount"
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
    },
    categoryID: 0,
    special: "Coupon"
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
    },
    categoryID: 0,
    special: ""
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
    },
    categoryID: 0,
    special: ""
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
    },
    categoryID: 0,
    special: ""
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
    },
    categoryID: 0,
    special: ""
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
    },
    categoryID: 0,
    special: ""
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
    },
    categoryID: 0,
    special: ""
  },
]