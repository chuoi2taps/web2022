import { render } from "./common";
import { userInformation } from "./data";
import { recentPost } from "./data";
import { featureWork} from "./data";
// selector đến element product
// khai báo hàm show product
function showUser(users) {
    // kiểm tra
    if (!Array.isArray(userInformation) || userInformation.length == 0) return [];
    // xử lý
    let result = "";
    for (let i = 0; i < users.length; i++) {
        const user = users[i];
        result += `
        <div class="grid md:grid-cols-3">
            <div class="md:col-span-2 order-2 md:order-1 text-center md:text-left">
              <h2 class=" text-4xl font-bold md:text-5xl md:leading-[60px]">Hi, I am ${user.name},
                <br> Creative Technologist</h2>
              <p class="text-base pt-6">${user.description}</p>
              <div class="py-6">
                <a href="" class="border border-1 border-red-600 inline-block rounded p-2 bg-[#FF6464] text-white font-bold hover:underline">Download Resume</a>
              </div>
            </div>
            <div class="md:col-span-1 order-1 md:order-2">
              <a href=""><img src="${user.img}" width="243px" height="243px" class="mx-auto md:ml-auto md:mr-0" alt=""></a>
            </div>
          </div>
        `;
    }
    // return
    return result;
}
render("user-information", showUser(userInformation));
function showPost(posts){
    if(!Array.isArray(recentPost)|| recentPost.length == 0) return[];
    let result = "";
    for(let i = 0; i< posts.length; i++){
      const post = posts[i];
      result += `
      <div class="post border rounded border-white bg-white px-5 py-8"> 
              <div class="mb-4"><a href="" class="text-4xl font-bold text-[#21243D] hover:underline">${post.name}</a></div>
              <div class="mb-4 text-[#21243D]"><span class="mr-2">12 Feb 2020</span>|
              <span class="ml-2 ">${post.tag}</span></div>
              <p class="text-[#21243D]">${post.description}</p>
            </div>
      `
    }
    return result;
}
render("recent-post", showPost(recentPost));

function showFeature(features){
  if(!Array.isArray(featureWork)|| featureWork.length == 0) return[];
    let result = "";
    for(let i = 0; i< features.length; i++){
      const feature = features[i];
      result += `
      <div>
          <a href ="/workdetail.html?id=${feature.id}"><img src="${feature.img}" width="246px" height="246px" class="rounded w-full" alt=""></a>
          </div>
          <div>
            <h3><a href="/workdetail.html?id=${feature.id}" class="text-[30px] text-[#21243D] font-bold hover:underline">${feature.name}</a></h3>
            <div class="flex space-x-4 items-center py-5">
              <span class="inline-block bg-[#21243D] py-1 px-2 font-bold text-white rounded-full">${feature.year}</span>
              <span class="text-[#8695A4]">${feature.cate}</span>
            </div>
            <p class="text-[#21243D]">
              ${feature.description}
            </p>
          </div>
      `
}
  return result;
}
render("feature-works", showFeature(featureWork))
