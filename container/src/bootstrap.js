// import "products/ProductIndex";
import { mount as productsMount } from "products/ProductIndex";
import { mount as cartMount } from "cart/CartShow";

console.log("container");

productsMount(document.querySelector("#dev-products"));
cartMount(document.querySelector("#my-cart"));
