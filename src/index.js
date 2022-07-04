import "./styles.css";
import { faker } from "@faker-js/faker";
import "lazysizes";
// import a plugin
import "lazysizes/plugins/parent-fit/ls.parent-fit";

function Image(data) {
    return `
  <a href="" class="group">
    <div class="aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-w-7 xl:aspect-h-8">
        <img
        alt=""
        data-src=${data.url}
        class="duration-700 ease-in-out group-hover:opacity-75 object-cover lazyload blur-up"
        />
        
    </div>
    <h3 class="mt-4 text-sm text-gray-700">${data.name}</h3>
    <p class="mt-1 text-lg font-medium text-gray-900">${data.username}</p>
  </a>
  `;
}

// data- : 사용자가 커스텀하게 정의한 속성이다.
// src : 브라우저에서 js 보다 src가 먼저 읽어 옴. 
// import "lazysizes"; 이거쓰면 data-src에 있는것을 먼저 읽어서 src로 재배포 해줌.

const list = Array.from({ length: 50 }).map((i) => ({
    url: faker.image.imageUrl(undefined, undefined, undefined, true),
    name: faker.name.findName(),
    username: faker.internet.userName(),
}));

document.getElementById("app").innerHTML = `
<div class="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
<div class="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
  ${list.map((data) => Image(data)).join("")}
</div>
</div>
`;