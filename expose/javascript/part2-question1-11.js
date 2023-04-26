// function discountPrices(prices, discount) {
//   const discounted = [];
//   const finalPrice = 0;
//   for (let i = 0; i < prices.length; i++) {
//     const discountedPrice = prices[i] * (1 - discount);
//     finalPrice = Math.round(discountedPrice * 100) / 100;
//     discounted.push(finalPrice);
//   }
// //   console.log(i);
// console.log(length)
//   //   console.log(discountedPrice);
//   //   console.log(finalPrice);

//   return discounted;
// }

// discountPrices([100, 200, 300], 0.5);
// function discountPrices(prices, discount) {
//   const discounted = [];
//   const length = prices.length;
//   for (let i = 0; i < length; i++) {
//     const discountedPrice = prices[i] * (1 - discount);
//     discounted.push(discountedPrice);
//   }
//   //   console.log(i);
//   //   console.log(length);
//   //   console.log(discountedPrice);
//   //   console.log(finalPrice);

//   return discounted;
// }

// console.log(discountPrices([100, 200, 300], 0.5));
let student = {
  name: "Sarah",
  major: "Computer Science",
  "Grad Year": "2022",
  greeting: function () {
    console.log("Hello!");
  },
  "Favorite Teacher": {
    name: "Thomas Powell",
    course: "CSE110",
  },
  courseLoad: ["CSE 110", "CSE 134", "VIS 41"],
};

// console.log(student["name"]);
// console.log(student["Grad Year"]);
console.log(student["Favorite Teacher"]["name"]);
