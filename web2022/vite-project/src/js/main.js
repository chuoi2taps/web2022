import { render } from "./common";
import { productList } from "./data";
import { categoriesList } from "./data";
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
        <a href="/detail.html?id=${product.id}"><img src="${product.img}" class="rounded-3xl" alt="" /></a>
        <h3 class="text-[#F54748] pt-5 font-bold">
            <a href="/detail.html?id=${product.id}">${product.name}</a>
        </h3>
        <div class="flex pt-4 items-start">
            <span class=""><img src="${product.icon}" alt="" /></span>
            <h3 class="pl-1">30 Minutes</h3>
            <span><img src="${product.icon}" alt="" class="pl-5" /></span>
            <h3 class="pl-1">Snack</h3>
        </div>
    </div>
        `;
    }
    // return
    return result;
}
render("product", showProducts(productList));
function showCategories(categories){
    //kiểm tra
    if(!Array.isArray(categoriesList) || categoriesList.length == 0) return [];

    //xử lý
    let result = ""
    for(let i = 0; i<categories.length; i++){
        const category = categories[i];
        result += 
        `<div class = "column">
        <a href = ""><img src = "${category.img}" alt = ""/></a>
        <a href=""><h3 class="px-2.5 font-bold">${category.name}</h3></a>
        </div>`
    }
    //trả về
    return result;
}
render("categories", showCategories(categoriesList));
