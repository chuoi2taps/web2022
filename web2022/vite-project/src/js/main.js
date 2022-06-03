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
        <div class="column">
        <a href=""><img src="${product.img}" class="rounded-3xl" alt="" /></a>
        <h3 class="text-[#F54748] pt-5 font-bold">
            <a href="">${product.name}</a>
        </h3>
        <div class="flex pt-4 items-start">
            <span class=""><img src="img/Vector.png" alt="" /></span>
            <h3 class="pl-1">30 Minutes</h3>
            <span><img src="img/ForkKnife.png" alt="" class="pl-5" /></span>
            <h3 class="pl-1">Snack</h3>
        </div>
    </div>
        `;
    }
    // return
    return result;
}

render("product", showProducts(productList));