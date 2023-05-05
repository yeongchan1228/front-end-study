let titleElement = document.querySelector("#title");

if (titleElement instanceof Element) {
  titleElement.innerHTML = "other";
}

if (titleElement !== null) {
  titleElement.innerHTML = "other";
}

if (titleElement?.innerHTML != undefined) {
  titleElement.innerHTML = "other";
}

let linkElement = document.querySelector(".link");
if (linkElement instanceof HTMLAnchorElement) {
  linkElement.href = "https://kakao.com";
}

let buttonElement = document.querySelector("#button");
buttonElement?.addEventListener("click", function () {
  console.log("Clicked!!");
});
