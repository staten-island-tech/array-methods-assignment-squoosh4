const mcdonalds_menu = [
  {
    item_name: "mcnuggets",
    variants: ["4 piece", "6 piece"],
    price: [
      "four_piece: $2.99",
      "six_piece: $3.99",
    ],
    yummy: true,
  },

  {
    item_name: "quarter pounder",
    variants: [
      "plain",
      "with cheese",
      "with cheese bacon",
      "double patty",
      "double patty with cheese",
      "double patty with cheese bacon", 
    ],
    price: [
      "plain: $4.99",
      "with_cheese: $5.49",
      "with_cheese_bacon: $5.69",
      "double_patty: $5.99",
      "double_patty_with_cheese: $6.49",
      "double_patty_with_cheese_bacon: $6.69",
    ],
    yummy: true,
  },

  {
    item_name: "fries",
    variants: ["small", "medium", "large"],
    price: [
      "small: $2.99",
      "medium: $3.99",
      "large: $4.99",
    ],
    yummy: false,
  },

  {
    item_name: "mccrispy",
    variants: ["normal", "spicy"],
    price: ["normal: $4.99", "crispy: $5.49"],
    yummy: true
  },
];

mcdonalds_menu.forEach((attr) => console.log(attr.item_name));
mcdonalds_menu.forEach((variant) =>
  variant.variants.forEach((variant_selection) =>
    console.log(variant_selection)
  )
);
mcdonalds_menu.forEach((attr) =>
  attr.price.forEach((price_of_item) => console.log(price_of_item))
);

const bad_food = mcdonalds_menu.filter((mcdonalds_menu)=> mcdonalds_menu.yummy == false);
console.log(bad_food);