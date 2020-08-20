console.log("Hello World");

document.getElementById("slogan").innerText = "We hate our customers!";

all = document.getElementById("all").style.backgroundColor = "c7c3c3";

document.body.style.fontFamily = "Impact";

items = document.querySelectorAll("#hot .item");

items.forEach((item) => {
  item.style.margin = "10px 20px";
  item.style.boxShadow = "2px 2px 10px";
});

menuList = document.querySelector(".navbar-nav");

// create elements
let menuListItem = document.createElement("li"); // create new <li>

let menuListItemLink = document.createElement("a"); // create new <a>

let menuListItemLinkText = document.createTextNode("Newsletter"); // text that says "Newsletter"

// give elements properties before appending
menuListItem.classList.add(
  "nav-item",
  "menu-large",
  "change-cursor",
  "popup-trigger"
);
menuListItemLink.classList.add("nav-link");

// append
menuListItemLink.append(menuListItemLinkText);
menuListItem.append(menuListItemLink);
menuList.append(menuListItem);

//create css code to be injected
var css = ".nav-item a{ cursor: pointer }";

//create this css injection in to html element
var style = document.createElement("style");

//if this
if (style.styleSheet) {
  style.styleSheet.cssText = css;
} else {
  style.appendChild(document.createTextNode(css));
}

const modalTriggers = document.querySelectorAll(".popup-trigger");
const modalCloseTrigger = document.querySelector(".popup-modal__close");
const bodyBlackout = document.querySelector(".body-blackout");

modalTriggers.forEach((trigger) => {
  trigger.addEventListener("click", () => {
    const { popupTrigger } = trigger.dataset;
    const popupModal = document.querySelector(
      `[data-popup-modal="${popupTrigger}"]`
    );

    popupModal.classList.add("is--visible");
    bodyBlackout.classList.add("is-blacked-out");

    popupModal
      .querySelector(".popup-modal__close")
      .addEventListener("click", () => {
        popupModal.classList.remove("is--visible");
        bodyBlackout.classList.remove("is-blacked-out");
      });

    bodyBlackout.addEventListener("click", () => {
      // TODO: Turn into a function to close modal
      popupModal.classList.remove("is--visible");
      bodyBlackout.classList.remove("is-blacked-out");
    });
  });
});

document.getElementsByClassName("onClick")[0].onclick = function () {
  window.prompt("enter email", "submit");
};

//force page to load custom css
// create new link tag
var link = document.createElement("link");

// set properties of link tag
link.href = "/css/custom.css";
link.rel = "stylesheet";
link.type = "text/css";

// Loaded successfully
link.onload = function () {
  console.log("success");
};

// Loading failed
link.onerror = function () {
  console.log("error");
};

// append link element to html
document.body.appendChild(link);
