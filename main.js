let btn = document.getElementById("btn-icon-block");
let spn_btn = document.getElementById("sponsors-btn");
let loc_btn = document.getElementById("location-btn");
let prj_btn = document.getElementById("projects-btn");
let con_btn = document.getElementById("contacts-btn");

btn.addEventListener("click", (e) => {
  let menu = document.querySelector('.menu');
  if (btn.innerHTML == "&lt;") {
    btn.innerHTML = "&gt;";
    menu.style = "transform: translateX(8px)";
  }
  else {
    btn.innerHTML = "&lt;";
    menu.style = "transform: translateX(-210px)";
  }
});

spn_btn.addEventListener('click', (e) => {
  let spn_blc = document.querySelector('.sponsors-block');
  let spn_blc_icon = document.querySelector('#sponsors-btn span');

  if (spn_blc_icon.innerHTML == "&lt;") {
    spn_blc.style.display = "block";
    spn_blc_icon.innerHTML = "&gt;";
  }
  else {
    spn_blc.style.display = "none";
    spn_blc_icon.innerHTML = "&lt;";
  }
});

loc_btn.addEventListener('click', (e) => {
  let loc_blc = document.querySelector('.location-block');
  let loc_blc_icon = document.querySelector('#location-btn span');

  if (loc_blc_icon.innerHTML == "&lt;") {
    loc_blc.style.display = "block";
    loc_blc_icon.innerHTML = "&gt;";
  }
  else {
    loc_blc.style.display = "none";
    loc_blc_icon.innerHTML = "&lt;";
  }
});

prj_btn.addEventListener('click', (e) => {
  let prj_blc = document.querySelector('.projects-block');
  let prj_blc_icon = document.querySelector('#projects-btn span');

  if (prj_blc_icon.innerHTML == "&lt;") {
    prj_blc.style.display = "block";
    prj_blc_icon.innerHTML = "&gt;";
  }
  else {
    prj_blc.style.display = "none";
    prj_blc_icon.innerHTML = "&lt;";
  }
});

con_btn.addEventListener('click', (e) => {
  let con_blc = document.querySelector('.contacts-block');
  let con_blc_icon = document.querySelector('#contacts-btn span');

  if (con_blc_icon.innerHTML == "&lt;") {
    con_blc.style.display = "block";
    con_blc_icon.innerHTML = "&gt;";
  }
  else {
    con_blc.style.display = "none";
    con_blc_icon.innerHTML = "&lt;";
  }
});

