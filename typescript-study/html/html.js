var titleElement = document.querySelector("#title");
if (titleElement instanceof Element) {
    titleElement.innerHTML = "other";
}
if (titleElement !== null) {
    titleElement.innerHTML = "other";
}
if ((titleElement === null || titleElement === void 0 ? void 0 : titleElement.innerHTML) != undefined) {
    titleElement.innerHTML = "other";
}
var linkElement = document.querySelector(".link");
if (linkElement instanceof HTMLAnchorElement) {
    linkElement.href = "https://kakao.com";
}
var buttonElement = document.querySelector("#button");
buttonElement === null || buttonElement === void 0 ? void 0 : buttonElement.addEventListener("click", function () {
    console.log("Clicked!!");
});
