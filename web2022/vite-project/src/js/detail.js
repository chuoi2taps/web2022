import { render } from "./common";
import { productList } from "./data";

// lấy được id trên url
const id = new URLSearchParams(window.location.search).get("id");

// Tim trong mang, neu co id nao trung voi id trong mang thi tra ve ket qua
console.log("id", id);
const product = productList.find((item) => item.id == id);
console.log("product", product);
const result = `
    <div>
        <h2>${product.name}</h2>
        <p>Mo ta san pham</p>
        <form action=""></form>
        </div>
        <div>img</div>
`;
render("product-detail", result);