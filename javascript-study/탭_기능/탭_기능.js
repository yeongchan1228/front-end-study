// eventListener 적용 1번 과정 (evnetListner 3개 사용)
// for (let i = 0; i < tabBtns.length; i++) {
//   openTab(i);
// }

// function openTab(index) {
//   document
//     .getElementsByClassName("tab-button")
//     [index].addEventListener("click", () => {
//       tabBtns.forEach((btn) => btn.classList.remove("orange"));

//       tabBtns[index].classList.add("orange");

//       let tabContents = document.querySelectorAll(".tab-content");
//       tabContents.forEach((content) => content.classList.remove("show"));

//       tabContents[index].classList.add("show");
//     });
// }

// eventListener 적용 2번 과정 (evnetListner 1개 사용)
// document
//   .getElementsByClassName("list")[0]
//   .addEventListener("click", (event) => {
//     if (event.target === tabBtns[0]) {
//       openTab(0);
//     } else if (event.target === tabBtns[1]) {
//       openTab(1);
//     } else if (event.target === tabBtns[2]) {
//       openTab(2);
//     }
//   });

// eventListener 적용 3번 과정 (evnetListner 1개 사용 + dataset 사용)
document
  .getElementsByClassName("list")[0]
  .addEventListener("click", (event) => {
    openTab(parseInt(event.target.dataset.id));
  });

function openTab(index) {
  const tabBtns = document.querySelectorAll(".tab-button");
  tabBtns.forEach((btn) => btn.classList.remove("orange"));
  tabBtns[index].classList.add("orange");

  const tabContents = document.querySelectorAll(".tab-content");
  tabContents.forEach((content) => content.classList.remove("show"));
  tabContents[index].classList.add("show");
}

let car = {
  name: ["람보르기니"],
  price: [50000, 30000, 10000],
  color: "white",
};

document.querySelector(".card-title").innerHTML = car.name;
document.querySelector(".card-price").innerHTML = `(${car.price[0]})`;

// select에서 유저가 선택한 값 가져오기
// eventListener의 input은 인풋값이 변경되었을 때
let capSizes = [28, 30, 32, 34];
let shirtSizes = [100, 105, 110];
let formSelect = document.querySelectorAll(".form-select");
setSelectSize(capSizes, formSelect);
formSelect[0].addEventListener("input", (event) => {
  if (event.currentTarget.value === "셔츠") {
    setSelectSize(shirtSizes, formSelect);
  } else {
    setSelectSize(capSizes, formSelect);
  }
});

function setSelectSize(data, formSelect) {
  formSelect[1].innerHTML = "";
  data.forEach((val) => {
    formSelect[1].insertAdjacentHTML("beforeend", `<option>${val}</option>`);
  });
}

// javascript로 html 생성하기 1번
let pTag = document.createElement("p");
pTag.innerHTML = "Test!";
document.querySelector("#test").appendChild(pTag);

// javascript로 html 생성하기 2번
let tag = "<p> 안녕 </p>";
document.querySelector("#test").insertAdjacentHTML("beforeend", tag);
