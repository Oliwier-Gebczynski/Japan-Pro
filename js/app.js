const jstest = document.querySelector(".jstest");
const main = document.querySelector("#main");


TweenMax.from(jstest, 1.5, { opacity: 0, y: -300 });
TweenMax.from(main, 1.5, { y: 300 })
