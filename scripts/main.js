import Slider from "./slider.js";
import {
  CheckNavPosition,
  HandleBurgerClick,
  HandleNavLinkClick,
} from "./navigation.js";
import ChangeClient from "./clients.js";
import { swipingStart, swipingMove, swipingEnd } from "./swiper.js";

const burger = document.querySelector(".navigation__burger");
const nav = document.querySelector(".navigation");
const navLinks = document.querySelectorAll(".navigation__link");

window.addEventListener("scroll", () => CheckNavPosition(nav));
burger.addEventListener("click", () => HandleBurgerClick(nav, burger));
navLinks.forEach((link) =>
  link.addEventListener("click", () => HandleNavLinkClick(nav, burger))
);
const TeamSlider = new Slider(".team__slide", true);

const smallClients = document.querySelectorAll(".clients__client--small");
const allItems = document.querySelectorAll("[data-client]");

for (const client of smallClients) {
  client.addEventListener("click", (e) =>
    ChangeClient(e, smallClients, allItems)
  );
}

const swiper = document.querySelector(".process__boxWrapper");

swiper.addEventListener("mouseleave", () => {
  isDown = false;
});

swiper.addEventListener("mouseup", () => {
  isDown = false;
});

swiper.addEventListener("touchstart", swipingStart);
swiper.addEventListener("mousedown", swipingStart);
swiper.addEventListener("touchmove", swipingMove);
swiper.addEventListener("mousemove", swipingMove);
swiper.addEventListener("touchend", swipingEnd);
swiper.addEventListener("mouseup", swipingEnd);
