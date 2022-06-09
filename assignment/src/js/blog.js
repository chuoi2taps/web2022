import { render } from "./common";
import { blogPost } from "./data";
function showBlog(blogs){
    if(!Array.isArray(blogPost) || blogPost.length == 0) return []
    let result = "";
    for(let i = 0; i < blogs.length; i++){
        const blog = blogs[i];
        result += `
        <div class="post border-b">
                    <div class="my-4">
                        <a href="" class="text-3xl text-[#21243D] font-bold">${blog.name}</a>
                    </div>
                    <div class="my-4">
                        <span class="mr-2">${blog.date}</span>|
                        <span class="ml-2">${blog.tag}</span>
                    </div>
                    <div class="my-4">
                        <p>${blog.description}</p>
                    </div>
                </div>
        `
    }
    return result;
}
render("blog-post", showBlog(blogPost))