import { render } from "./common";
import { productList } from "./data";
import { categoriesList } from "./data";

// lấy được id trên url
const id = new URLSearchParams(window.location.search).get("id");

// Tim trong mang, neu co id nao trung voi id trong mang thi tra ve ket qua
const product = productList.find((item) => item.id == id);
const result = `
    <div class="text-center md:text-left max-w-[620px]">
    <h2 class="text-3xl md:text-5xl font-black pb-5">${product.name}</h2>
    <span class="font-semibold text-[30px] md:text-[40px] text-[#F54748]">$30</span>
    <p class="pt-7">Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.</p>
    <form action="" class="pt-8 pb-10">
    <input
        type="text"
        placeholder="quantity"
        class=" border-2 font-normal rounded-md border-gray-600 pt-3 pb-3 pl-2 w-[180px] mr-5"
    />
  <button
    class="border-0 rounded-md bg-[#111928] text-white cursor-pointer pt-3 pb-3 px-2"
  >
    Add to cart
  </button>
    </form>
    </div>
    <div class="banner text-center">
        <img src="${product.img}" alt="">
    </div>
`;
render("product-detail", result);