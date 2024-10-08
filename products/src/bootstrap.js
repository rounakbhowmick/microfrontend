// import faker from "faker";

// let products = "";

// for (let i = 0; i < 3; i++) {
//   const name = faker.commerce.productName();
//   products += `<div>${name}</div>`;
// }

// document.querySelector("#dev-products").innerHTML = products;

import faker from "faker";

const mount = (el) => {
  let products = "";

  for (let i = 0; i < 5; i++) {
    const name = faker.commerce.productName();
    products += `<div>${name}</div>`;
  }

  el.innerHTML = products;
};
if (process.env.NODE_ENV === "development") {
  console.log("came");
  const el = document.querySelector("#dev-products");

  // Assuming our container doesn't have an element
  // with id 'dev-products'....
  if (el) {
    // We are probably running in isolation
    mount(el);
  }
}

export { mount };
