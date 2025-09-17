import { products } from "../data/products";

const delay = (ms) => new Promise((res) => setTimeout(res, ms));

export async function getProducts(categoryId) {
  await delay(700);
  if (!categoryId) return products;
  return products.filter((p) => p.category === categoryId);
}

export async function getProductById(id) {
  await delay(700);
  return products.find((p) => p.id === id);
}
