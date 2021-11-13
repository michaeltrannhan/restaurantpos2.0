import Signature from "./assets/png/signature.png"
import Fastfood from "./assets/png/fastfood.png"
import Fishery from "./assets/png/fishery.png"
import Meat from "./assets/png/meat.png"
import Drinks from "./assets/png/drinks.png"
import Dessert from "./assets/png/dessert.png"
import Vegan from "./assets/png/vegan.png"
import SideDish from "./assets/png/sidedish.png"

//signature!!!
import Pho from "./assets/png/menu/Signature/pho.png"
import BunRieu from "./assets/png/menu/Signature/bunrieu.png"
import PhaLau from "./assets/png/menu/Signature/phalau.png"
import Curry from "./assets/png/menu/Signature/curry.png"
import Hutieu from "./assets/png/menu/Signature/hutieu.png"
import Comtam from "./assets/png/menu/Signature/comtam.png"
import Xoi from "./assets/png/menu/Signature/xoi.png"

//fast food!!!
import Banhmy from "./assets/png/menu/Fastfood/banhmy.png"
import Burger from "./assets/png/menu/Fastfood/hamburger.png"
import BTT from "./assets/png/menu/Fastfood/banhtrangtron.png"
import Cavien from "./assets/png/menu/Fastfood/cavien.png"
import Changa from "./assets/png/menu/Fastfood/changa.png"
import BTN from "./assets/png/menu/Fastfood/banhtrangnuong.png"
import Kimbap from "./assets/png/menu/Fastfood/kimbap.png"

//fishery !!!
import Crab from "./assets/png/menu/Fishery/crab.png"
import Lobster from "./assets/png/menu/Fishery/lobster.png"
import Shrimp from "./assets/png/menu/Fishery/shrimp.png"
import Snail from "./assets/png/menu/Fishery/snail.png"
import Salmon from "./assets/png/menu/Fishery/salmon.png"
import Tuna from "./assets/png/menu/Fishery/tuna.png"

//Meat!!
import Beef from "./assets/png/menu/Meat/steak.png"
import Pork from "./assets/png/menu/Meat/pork.png"
import Meatball from "./assets/png/menu/Meat/meatball.png"
import chicken from "./assets/png/menu/Meat/chicken.png"
import nuggets from "./assets/png/menu/Meat/chicken_nuggets.png"
import bacon from "./assets/png/menu/Meat/bacon.png"
//Drinks
import beer from "./assets/png/menu/Drinks/beer.png"
import whiskey from "./assets/png/menu/Drinks/whiskey.png"
import champange from "./assets/png/menu/Drinks/champagne.png"
import ruoude from "./assets/png/menu/Drinks/ruoude.png"
import juice from "./assets/png/menu/Drinks/juice.png"
import coke from "./assets/png/menu/Drinks/coke.png"
import water from "./assets/png/menu/Drinks/water.jpg"
import milk from "./assets/png/menu/Drinks/milk.png"

//Desserts !!!
import fruits from "./assets/png/menu/Dessert/fruit.png"
import cupcakes from "./assets/png/menu/Dessert/cupcake.png"
import pancakes from "./assets/png/menu/Dessert/pancake.png"
import che from "./assets/png/menu/Dessert/che.png"
import banhtroinuoc from "./assets/png/menu/Dessert/banhtroinuoc.jfif"
import pie from "./assets/png/menu/Dessert/pie.png"
import icecream from "./assets/png/menu/Dessert/icecream.png"
import puffs from "./assets/png/menu/Dessert/puff.png"
import flan from "./assets/png/menu/Dessert/flan.png"

//Vegan!!
import tofu from "./assets/png/menu/Vegan/tofu.png"
import Salad from "./assets/png/menu/Vegan/salad.png"
import seaweed from "./assets/png/menu/Vegan/seaweed.png"
import fermented from "./assets/png/menu/Vegan/soybean.png"
import cereal from "./assets/png/menu/Vegan/cereal.png"
import vegepizza from "./assets/png/menu/Vegan/vegepizza.png"


//Side Dishes!!!
import kimchi from "./assets/png/menu/SideDishes/kimchi.png"
import bread from "./assets/png/menu/SideDishes/bread.png"
import soysauce from "./assets/png/menu/SideDishes/soysauce.png"
import hotsauce from "./assets/png/menu/SideDishes/hotsauce.png"
import rice from "./assets/png/menu/SideDishes/rice.png"
import noodles from "./assets/png/menu/SideDishes/noodles.png"
import weebs from "./assets/png/menu/SideDishes/weeb.png"

export const categories = [
  { id: 0, image: Signature, name: 'Signature' },
  { id: 1, image: Fastfood, name: 'Fastfood' },
  { id: 2, image: Fishery, name: 'Fishery' },
  { id: 3, image: Meat, name: 'Meat' },
  { id: 4, image: Drinks, name: 'Drinks' },
  { id: 5, image: Dessert, name: 'Dessert' },
  { id: 6, image: Vegan, name: 'Vegan' },
  { id: 7, image: SideDish, name: 'Others' }
]

export function specialColor(special) {
  /*
    Assign colors to a special ribbon of
    an item. If not set explicitly for 
    a type return a grey-ish theme.
  */
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
    id: 0, name: "Pho", image: Pho, price: 123.00,
    sideDish: [
      {
        desc: "Vegetables",
        price: 5
      }
    ],
    detail: {
      sku: 401,
      desc: "Pho",
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
    id: 1, name: "Bun Rieu", image: BunRieu, price: 241.69,
    sideDish: [
      {
        desc: "Vegetables",
        price: 65
      }
    ],
    detail: {
      sku: 401,
      desc: "bun rieu",
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
    id: 2, name: "Pha Lau", image: PhaLau, price: 51241.12,
    sideDish: [
      {
        desc: "Additional meat",
        price: 134
      }
    ],
    detail: {
      sku: 401,
      desc: "Pha Lau",
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
    id: 3, name: "Chicken Curry", image: Curry, price: 5126.25,
    sideDish: [
      {
        desc: "Vegetables",
        price: 525
      }
    ],
    detail: {
      sku: 401,
      desc: "Chicken Curry",
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
    id: 4, name: "Hu tieu", image: Hutieu, price: 6426.25,
    sideDish: [
      {
        desc: "Vegetables",
        price: 1
      }
    ],
    detail: {
      sku: 401,
      desc: "Hu tieu",
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
    id: 5, name: "Com tam", image: Comtam, price: 862.64,
    sideDish: [
      {
        desc: "Tomato and cuCUMber",
        price: 123
      }
    ],
    detail: {
      sku: 401,
      desc: "Com tam",
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
    id: 6, name: "Sticky Rice", image: Xoi, price: 325.64,
    sideDish: [
      {
        desc: "Soy sauce & hot chili sauce",
        price: 321
      }
    ],
    detail: {
      sku: 401,
      desc: "Sticky rice",
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
    id: 7, name: "Banh My", image: Banhmy, price: 982.22,
    sideDish: [
      {
        desc: "Chicken",
        price: 98
      },
      {
        desc: "Beef",
        price: 98
      }
    ],
    detail: {
      sku: 401,
      desc: "Banh my",
    },
    factor: {
      protein: "What is lorem ipsum?",
      additives: "03",
      baking: "040",
      decor: "04"
    },
    categoryID: 1,
    special: "Bestseller"
  },
  {
    id: 8, name: "Hamburger", image: Burger, price: 77.22,
    sideDish: [
      {
        desc: "Vegetables",
        price: 100
      },
      {
        desc: "More cheese",
        price: 1000
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
    categoryID: 1,
    special: "Hot"
  },
  {
    id: 9, name: "Banh trang tron", image: BTT, price: 10.01,
    sideDish: [
      {
        desc: "Size: Small",
        price: 0
      },
      {
        desc: "Size: Medium",
        price: 100
      },
      {
        desc: "Size: Large",
        price: 500
      },
      {
        desc: "Size: XXL!",
        price: 9999
      },
    ],
    detail: {
      sku: 401,
      desc: "banh trang tron",
    },
    factor: {
      protein: "What is lorem ipsum?",
      additives: "03",
      baking: "040",
      decor: "04"
    },
    categoryID: 1,
    special: "Hot"
  },
  {
    id: 10, name: "Fried fish balls", image: Cavien, price: 77.22,
    sideDish: [
      {
        desc: "Hot sauce",
        price: 100
      },
      {
        desc: "Soybean sauce",
        price: 100
      }
    ],
    detail: {
      sku: 401,
      desc: "Fish balls",
    },
    factor: {
      protein: "What is lorem ipsum?",
      additives: "03",
      baking: "040",
      decor: "04"
    },
    categoryID: 1,
    special: "Coupon"
  },
  {
    id: 11, name: "Grilled chicken legs", image: Changa, price: 77.22,
    sideDish: [
    ],
    detail: {
      sku: 401,
      desc: "Chicken legs",
    },
    factor: {
      protein: "What is lorem ipsum?",
      additives: "03",
      baking: "040",
      decor: "04"
    },
    categoryID: 1,
    special: "Discount"
  },
  {
    id: 12, name: "banh trang nuong", image: BTN, price: 77.22,
    sideDish: [
      {
        desc: "Hot sauce",
        price: 100
      },
      {
        desc: "Soybean sauce",
        price: 100
      },
      {
        desc: "Eggs",
        price: 100
      }
    ],
    detail: {
      sku: 401,
      desc: "banh trang nuong",
    },
    factor: {
      protein: "What is lorem ipsum?",
      additives: "03",
      baking: "040",
      decor: "04"
    },
    categoryID: 1,
    special: ""
  },
  {
    id: 13, name: "Kimbap", image: Kimbap, price: 77.22,
    sideDish: [
      {
        desc: "Hot sauce",
        price: 100
      },
      {
        desc: "Soybean sauce",
        price: 100
      },
      {
        desc: "Mayonaise sauce",
        price: 100
      }
    ],
    detail: {
      sku: 401,
      desc: "Kimbap",
    },
    factor: {
      protein: "What is lorem ipsum?",
      additives: "03",
      baking: "040",
      decor: "04"
    },
    categoryID: 1,
    special: ""
  },
  {
    id: 14, name: "Grilled crab", image: Crab, price: 77.22,
    sideDish: [
      {
        desc: "Special sauce",
        price: 100
      },
    ],
    detail: {
      sku: 401,
      desc: "Crab",
    },
    factor: {
      protein: "What is lorem ipsum?",
      additives: "03",
      baking: "040",
      decor: "04"
    },
    categoryID: 2,
    special: ""
  },
  {
    id: 15, name: "Lobster", image: Lobster, price: 77.22,
    sideDish: [
    ],
    detail: {
      sku: 401,
      desc: "Lobster",
    },
    factor: {
      protein: "What is lorem ipsum?",
      additives: "03",
      baking: "040",
      decor: "04"
    },
    categoryID: 2,
    special: ""
  },
  {
    id: 16, name: "Fried Shrimp", image: Shrimp, price: 77.22,
    sideDish: [
      {
        desc: "Hot sauce",
        price: 100
      },
      {
        desc: "Soybean sauce",
        price: 100
      },
      {
        desc: "Mayonaise sauce",
        price: 100
      }
    ],
    detail: {
      sku: 401,
      desc: "Shrimp",
    },
    factor: {
      protein: "What is lorem ipsum?",
      additives: "03",
      baking: "040",
      decor: "04"
    },
    categoryID: 2,
    special: ""
  },
  {
    id: 17, name: "Snail", image: Snail, price: 77.22,
    sideDish: [
      {
        desc: "Vegetable",
        price: 100
      }
    ],
    detail: {
      sku: 401,
      desc: "Kimbap",
    },
    factor: {
      protein: "What is lorem ipsum?",
      additives: "03",
      baking: "040",
      decor: "04"
    },
    categoryID: 2,
    special: ""
  },
  {
    id: 18, name: "Salmon Filet", image: Salmon, price: 77.22,
    sideDish: [
      {
        desc: "Special sauce",
        price: 100
      }
    ],
    detail: {
      sku: 401,
      desc: "Salmon",
    },
    factor: {
      protein: "What is lorem ipsum?",
      additives: "03",
      baking: "040",
      decor: "04"
    },
    categoryID: 2,
    special: ""
  },
  {
    id: 19, name: "Tuna Filet", image: Tuna, price: 77.22,
    sideDish: [
      {
        desc: "Special Sauce",
        price: 100
      }
    ],
    detail: {
      sku: 401,
      desc: "tuna",
    },
    factor: {
      protein: "What is lorem ipsum?",
      additives: "03",
      baking: "040",
      decor: "04"
    },
    categoryID: 2,
    special: "Discount"
  },
  ///meat from 20
  {
    id: 20, name: "Beefsteak", image: Beef, price: 77.22,
    sideDish: [
      {
        desc: "Olive oil",
        price: 100
      }
    ],
    detail: {
      sku: 401,
      desc: "Steak",
    },
    factor: {
      protein: "What is lorem ipsum?",
      additives: "03",
      baking: "040",
      decor: "04"
    },
    categoryID: 3,
    special: "Hot"
  },
  {
    id: 21, name: "Pork", image: Pork, price: 77.22,
    sideDish: [
      {
        desc: "Vegetable",
        price: 100
      }
    ],
    detail: {
      sku: 401,
      desc: "Pork",
    },
    factor: {
      protein: "What is lorem ipsum?",
      additives: "03",
      baking: "040",
      decor: "04"
    },
    categoryID: 3,
    special: ""
  },
  {
    id: 22, name: "Pork meatballs", image: Meatball, price: 77.22,
    sideDish: [
      {
        desc: "Additional meatballs",
        price: 200
      }
    ],
    detail: {
      sku: 401,
      desc: "Meatballs",
    },
    factor: {
      protein: "What is lorem ipsum?",
      additives: "03",
      baking: "040",
      decor: "04"
    },
    categoryID: 3,
    special: ""
  },
  {
    id: 23, name: "Grilled Chicken", image: chicken, price: 77.22,
    sideDish: [
      {
        desc: "Lemon leaves",
        price: 200
      }
    ],
    detail: {
      sku: 401,
      desc: "Chicken",
    },
    factor: {
      protein: "What is lorem ipsum?",
      additives: "03",
      baking: "040",
      decor: "04"
    },
    categoryID: 3,
    special: ""
  },
  {
    id: 24, name: "Chicken Nuggets", image: nuggets, price: 77.22,
    sideDish: [
      {
        desc: "Sauces",
        price: 200
      }
    ],
    detail: {
      sku: 401,
      desc: "Nuggets",
    },
    factor: {
      protein: "What is lorem ipsum?",
      additives: "03",
      baking: "040",
      decor: "04"
    },
    categoryID: 3,
    special: ""
  },
  {
    id: 25, name: "Bacon", image: bacon, price: 77.22,
    sideDish: [
      {
        desc: "Additional bacon",
        price: 100
      }
    ],
    detail: {
      sku: 401,
      desc: "Bacon",
    },
    factor: {
      protein: "What is lorem ipsum?",
      additives: "03",
      baking: "040",
      decor: "04"
    },
    categoryID: 3,
    special: ""
  },
  //drinks starts from 26
  {
    id: 26, name: "Beer", image: beer, price: 50.22,
    sideDish: [
      {
        desc: "Ice bucket",
        price: 10
      }
    ],
    detail: {
      sku: 501,
      desc: "Beer"
    },
    factor: {
      protein: "What is lorem ipsum?",
      additives: "03",
      baking: "040",
      decor: "04"
    },
    categoryID: 4,
    special: "Bestseller"
  },
  {
    id: 27, name: "Whiskey", image: whiskey, price: 100.22,
    sideDish: [
      {
        desc: "Ice bucket",
        price: 10
      }
    ],
    detail: {
      sku: 601,
      desc: "Wine"
    },
    factor: {
      protein: "What is lorem ipsum?",
      additives: "03",
      baking: "040",
      decor: "04"
    },
    categoryID: 4,
    special: ""
  },
  {
    id: 28, name: "Champagne", image: champange, price: 70.22,
    sideDish: [
      {
        desc: "Ice bucket",
        price: 10
      }
    ],
    detail: {
      sku: 501,
      desc: "Champagne"
    },
    factor: {
      protein: "What is lorem ipsum?",
      additives: "03",
      baking: "040",
      decor: "04"
    },
    categoryID: 4,
    special: ""
  },
  {
    id: 29, name: "Rượu đế", image: ruoude, price: 50.22,
    sideDish: [
      {
        desc: "mồi nhắm",
        price: 50
      }
    ],
    detail: {
      sku: 501,
      desc: "Alcohol"
    },
    factor: {
      protein: "What is lorem ipsum?",
      additives: "03",
      baking: "040",
      decor: "04"
    },
    categoryID: 4,
    special: ""
  },
  {
    id: 30, name: "Juice", image: juice, price: 30.22,
    sideDish: [
      {
        desc: "Additional fruits",
        price: 20
      }
    ],
    detail: {
      sku: 501,
      desc: "Drinks"
    },
    factor: {
      protein: "What is lorem ipsum?",
      additives: "03",
      baking: "040",
      decor: "04"
    },
    categoryID: 4,
    special: ""
  },
  {
    id: 31, name: "Soft drinks", image: coke, price: 50.22,
    sideDish: [
      {
        desc: "Bamboo straws",
        price: 5
      }
    ],
    detail: {
      sku: 501,
      desc: "Drinks"
    },
    factor: {
      protein: "What is lorem ipsum?",
      additives: "03",
      baking: "040",
      decor: "04"
    },
    categoryID: 4,
    special: ""
  },
  {
    id: 32, name: "Water", image: water, price: 50.22,
    sideDish: [
      {
        desc: "Ice bucket",
        price: 10
      },
      {
        desc: "Straws",
        price: 1
      }
    ],
    detail: {
      sku: 501,
      desc: "Water"
    },
    factor: {
      protein: "What is lorem ipsum?",
      additives: "03",
      baking: "040",
      decor: "04"
    },
    categoryID: 4,
    special: "Coupon"
  },
  {
    id: 33, name: "Milk", image: milk, price: 20.22,
    sideDish: [
      {
        desc: "Bamboo straws",
        price: 5
      },
      {
        desc: "Change to soya milk",
        price: 30
      }
    ],
    detail: {
      sku: 501,
      desc: "Milk"
    },
    factor: {
      protein: "What is lorem ipsum?",
      additives: "03",
      baking: "040",
      decor: "04"
    },
    categoryID: 4,
    special: ""
  },
  //desert starts from 34
  {
    id: 34, name: "Fruits", image: fruits, price: 50.22,
    sideDish: [
      {
        desc: "Condensed milk",
        price: 25
      }
    ],
    detail: {
      sku: 551,
      desc: "Fruits"
    },
    factor: {
      protein: "What is lorem ipsum?",
      additives: "03",
      baking: "040",
      decor: "04"
    },
    categoryID: 5,
    special: ""
  },
  {
    id: 35, name: "Cupcakes", image: cupcakes, price: 50.22,
    sideDish: [
      {
        desc: "Honey",
        price: 5
      }
    ],
    detail: {
      sku: 501,
      desc: "Cupcakes"
    },
    factor: {
      protein: "What is lorem ipsum?",
      additives: "03",
      baking: "040",
      decor: "04"
    },
    categoryID: 5,
    special: ""
  },
  {
    id: 36, name: "Pancakes", image: pancakes, price: 50.22,
    sideDish: [
      {
        desc: "Honey",
        price: 30
      },
      {
        desc: "Butter",
        price: 30
      }
    ],
    detail: {
      sku: 501,
      desc: "Pancakes"
    },
    factor: {
      protein: "What is lorem ipsum?",
      additives: "03",
      baking: "040",
      decor: "04"
    },
    categoryID: 5,
    special: ""
  },
  {
    id: 37, name: "Chè", image: che, price: 50.22,
    sideDish: [
      {
        desc: "More fruits",
        price: 20
      }
    ],
    detail: {
      sku: 501,
      desc: "Chè"
    },
    factor: {
      protein: "What is lorem ipsum?",
      additives: "03",
      baking: "040",
      decor: "04"
    },
    categoryID: 5,
    special: ""
  },
  {
    id: 38, name: "Bánh trôi nước", image: banhtroinuoc, price: 50.22,
    sideDish: [
      {
        desc: "Coconut milk extra",
        price: 10
      }
    ],
    detail: {
      sku: 501,
      desc: "Banh Troi Nuoc"
    },
    factor: {
      protein: "What is lorem ipsum?",
      additives: "03",
      baking: "040",
      decor: "04"
    },
    categoryID: 5,
    special: "Discount"
  },
  {
    id: 39, name: "Pie", image: pie, price: 50.22,
    sideDish: [
      {
        desc: "Honey",
        price: 30
      }
    ],
    detail: {
      sku: 501,
      desc: "Pie"
    },
    factor: {
      protein: "What is lorem ipsum?",
      additives: "03",
      baking: "040",
      decor: "04"
    },
    categoryID: 5,
    special: "Hot"
  },
  {
    id: 40, name: "Ice cream", image: icecream, price: 50.22,
    sideDish: [
      {
        desc: "Chocolate",
        price: 30
      },
      {
        desc: "Peanut",
        price: 20
      },
      {
        desc: "Almond",
        price: 20
      }
    ],
    detail: {
      sku: 501,
      desc: "Ice cream"
    },
    factor: {
      protein: "What is lorem ipsum?",
      additives: "03",
      baking: "040",
      decor: "04"
    },
    categoryID: 5,
    special: "Hot"
  },
  {
    id: 41, name: "Cream puffs", image: puffs, price: 50.22,
    sideDish: [
      {
        desc: "Extra cream",
        price: 30
      }
    ],
    detail: {
      sku: 501,
      desc: "Puffs"
    },
    factor: {
      protein: "What is lorem ipsum?",
      additives: "03",
      baking: "040",
      decor: "04"
    },
    categoryID: 5,
    special: ""
  },
  {
    id: 42, name: "Crème caramel", image: flan, price: 50.22,
    sideDish: [
      {
        desc: "Condensed milk",
        price: 20
      },
      {
        desc: "Milk coffee",
        price: 30
      }
    ],
    detail: {
      sku: 501,
      desc: "Flan"
    },
    factor: {
      protein: "What is lorem ipsum?",
      additives: "03",
      baking: "040",
      decor: "04"
    },
    categoryID: 5,
    special: ""
  },
  //vegan from 43
  {
    id: 43, name: "Tofu", image: tofu, price: 50.22,
    sideDish: [
      {
        desc: "Soy sauce",
        price: 30
      }
    ],
    detail: {
      sku: 501,
      desc: "Tofu"
    },
    factor: {
      protein: "What is lorem ipsum?",
      additives: "03",
      baking: "040",
      decor: "04"
    },
    categoryID: 6,
    special: ""
  },
  {
    id: 44, name: "Salad", image: Salad, price: 50.22,
    sideDish: [
      {
        desc: "Honey",
        price: 30
      }
    ],
    detail: {
      sku: 501,
      desc: "Salad"
    },
    factor: {
      protein: "What is lorem ipsum?",
      additives: "03",
      baking: "040",
      decor: "04"
    },
    categoryID: 6,
    special: "Coupon"
  },
  {
    id: 45, name: "Seaweed", image: seaweed, price: 50.22,
    sideDish: [
      {
        desc: "bao lâu thì dc 1 tỷ gói mè",
        price: 30
      }
    ],
    detail: {
      sku: 501,
      desc: "cần biển"
    },
    factor: {
      protein: "What is lorem ipsum?",
      additives: "03",
      baking: "040",
      decor: "04"
    },
    categoryID: 6,
    special: "Bestseller"
  },
  {
    id: 46, name: "Soya fermented", image: fermented, price: 50.22,
    sideDish: [
      {
        desc: "Rice",
        price: 30
      }
    ],
    detail: {
      sku: 501,
      desc: "Fermented"
    },
    factor: {
      protein: "What is lorem ipsum?",
      additives: "03",
      baking: "040",
      decor: "04"
    },
    categoryID: 6,
    special: ""
  },
  {
    id: 47, name: "Cereal", image: cereal, price: 50.22,
    sideDish: [
      {
        desc: "Milk",
        price: 30
      }
    ],
    detail: {
      sku: 501,
      desc: "cereal"
    },
    factor: {
      protein: "What is lorem ipsum?",
      additives: "03",
      baking: "040",
      decor: "04"
    },
    categoryID: 6,
    special: ""
  },
  {
    id: 48, name: "Vegetarian pizaa", image: vegepizza, price: 50.22,
    sideDish: [
      {
        desc: "Sauce",
        price: 30
      },
      {
        desc: "Peperoni",
        price: 50
      }
    ],
    detail: {
      sku: 501,
      desc: "pizza"
    },
    factor: {
      protein: "What is lorem ipsum?",
      additives: "03",
      baking: "040",
      decor: "04"
    },
    categoryID: 6,
    special: ""
  },
  //Toppings from 49
  {
    id: 49, name: "Kimchi", image: kimchi, price: 50.22,
    sideDish: [
    ],
    detail: {
      sku: 501,
      desc: "kimchi"
    },
    factor: {
      protein: "What is lorem ipsum?",
      additives: "03",
      baking: "040",
      decor: "04"
    },
    categoryID: 7,
    special: ""
  },
  {
    id: 50, name: "Bread", image: bread, price: 50.22,
    sideDish: [
    ],
    detail: {
      sku: 501,
      desc: "bread"
    },
    factor: {
      protein: "What is lorem ipsum?",
      additives: "03",
      baking: "040",
      decor: "04"
    },
    categoryID: 7,
    special: ""
  },
  {
    id: 51, name: "Soy sauce", image: soysauce, price: 50.22,
    sideDish: [
    ],
    detail: {
      sku: 501,
      desc: "Soy sauce"
    },
    factor: {
      protein: "What is lorem ipsum?",
      additives: "03",
      baking: "040",
      decor: "04"
    },
    categoryID: 7,
    special: "Bestseller"
  },
  {
    id: 52, name: "Hot chili sauce", image: hotsauce, price: 50.22,
    sideDish: [
    ],
    detail: {
      sku: 501,
      desc: "Hot chili sauce"
    },
    factor: {
      protein: "What is lorem ipsum?",
      additives: "03",
      baking: "040",
      decor: "04"
    },
    categoryID: 7,
    special: ""
  },
  {
    id: 53, name: "Rice", image: rice, price: 50.22,
    sideDish: [
    ],
    detail: {
      sku: 501,
      desc: "Rice"
    },
    factor: {
      protein: "What is lorem ipsum?",
      additives: "03",
      baking: "040",
      decor: "04"
    },
    categoryID: 7,
    special: ""
  },
  {
    id: 54, name: "Noodles", image: noodles, price: 50.22,
    sideDish: [
    ],
    detail: {
      sku: 501,
      desc: "Noodles"
    },
    factor: {
      protein: "What is lorem ipsum?",
      additives: "03",
      baking: "040",
      decor: "04"
    },
    categoryID: 7,
    special: "Hot"
  },
  {
    id: 55, name: "Weebs", image: weebs, price: 9999.8888,
    sideDish: [
      {
        desc: "S",
        price: 1111
      },
      {
        desc: "L",
        price: 4444
      },
      {
        desc: "XL",
        price: 7777
      },
      {
        desc: "XXL",
        price: 9999.9999
      }
    ],
    detail: {
      sku: 501,
      desc: "For Khôi"
    },
    factor: {
      protein: "What is lorem ipsum?",
      additives: "03",
      baking: "040",
      decor: "04"
    },
    categoryID: 7,
    special: "Bestseller"
  },
]