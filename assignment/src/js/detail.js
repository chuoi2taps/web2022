import { render } from "./common";
import { featureWork} from "./data"
// lấy được id trên url
const id = new URLSearchParams(window.location.search).get("id");

// Tim trong mang, neu co id nao trung voi id trong mang thi tra ve ket qua
const feature = featureWork.find((item) => item.id == id);
const result = `
<div class="py-5">
<a href=""><h2 class="text-4xl font-bold">${feature.name}</h2></a>
</div>
<div>
<div class="flex space-x-4 items-center py-5">
  <span class="inline-block bg-[#FF7C7C] py-1 px-2 font-bold text-white rounded-full">${feature.year}</span>
  <span class="text-[#8695A4]">${feature.cate}, User Experience Design</span>
</div>
<p class="text-[#21243D]">
  ${feature.description}
</p>
</div>
<div>
  <div class="my-5">
  <img src="${feature.img}" alt="" class="w-full">
</div>
</div>
`;
render("feature-detail", result);