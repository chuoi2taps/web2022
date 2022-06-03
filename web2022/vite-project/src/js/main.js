import { render } from "./common";
import { productList } from "./data";
// selector đến element product
// khai báo hàm show product
function showProducts(products) {
    // kiểm tra
    if (!Array.isArray(productList) || productList.length == 0) return [];

    // xử lý
    let result = "";
    for (let i = 0; i < products.length; i++) {
        const product = products[i];
        result += `
        <div class="item">
            <div class="item-image">
                <img src="${product.img}" alt="">
            </div>
            <div class="item-content">
                <h3><a href="./detail.html?id=${product.id}">${product.name}</a></h3>
                <div class="flex">
                    <span>30 times</span>
                    <span>snack</span>
                </div>
            </div>
        </div>
        `;
    }
    // return
    return result;
}

render("product", showProducts(productList));