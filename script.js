let time = document.getElementById("time");
let H = document.getElementById("H");
let M = document.getElementById("M");
let S = document.getElementById("S");
let am = document.getElementById("am");
let fulldate = document.getElementById("fulldate");
let foling = document.getElementById("foling");
let mainContaint = document.getElementById("mainContaint");
let logo2 = document.getElementById("logo2");
let love2 = document.getElementById("love2");
let rotatetext2 = document.getElementById("rotatetext2");
let lang = document.getElementById("lang");
console.log(logo2);


function timer() {
    let date = new Date();
    let h = date.getHours();
    let m = date.getMinutes();
    let s = date.getSeconds();
    let AM = "";

    if (h > 12) {
        h = h - 12;
    }

    let hou = h < 10 ? "0" + h : h;
    let sec = s < 10 ? "0" + s : s;
    let min = m < 10 ? "0" + m : m;
    let am2 = h < 12 ? "AM" : "PM";

    H.innerHTML = hou;
    M.innerHTML = min;
    S.innerHTML = sec;
    am.innerHTML = am2;




    let day = date.getDate();
    let month = date.getMonth();
    let year = date.getFullYear();
    // console.log(day, month, year)

    fulldate.innerHTML = day + "-" + month + "-" + year;

}
setInterval(timer, 1000);

function droprose() {
    let amount = 10;
    let j = 0;
    while (j < amount) {
        let rosebox = document.createElement('div');
        rosebox.setAttribute("id", "drops")
        let roseimg = document.createElement("img");
        roseimg.src = "images/r3.png";
        rosebox.appendChild(roseimg);
        j++;
        let rain3 = foling.appendChild(rosebox);
        console.log(rain3);

        let posX = Math.random() * foling.offsetWidth;
        let deley = Math.random() * 5;
        rosebox.style.left = posX + "px";
        rosebox.style.animationDelay = deley + "s";
        
    }
}

droprose();

function clean(){
   let circal_4 = document.getElementById("circal_4");
   let circal_5 = document.getElementById("circal_5");

   circal_4.innerHTML = "";
   circal_5.innerHTML = "";

}

setInterval(clean, 4000);



function hidder(){
    mainContaint.style.transform = "rotateY(180deg)";
    mainContaint.style.background = "#fff"
    lang.style.display = "none";
    circal_4.style.display = "none";
    circal_5.style.display = "none";
    logo2.setAttribute("id", "logo");
    rotatetext2.setAttribute("id", "rotatetext")
    love2.setAttribute("id", "love")

}
document.addEventListener("click",hidder);

