const countDownDate = new Date("Jan 1, 2022 23:59:59").getTime();

// Update the count down every 1 second
let x = setInterval(function () {
  // Get today's date and time
  let now = new Date().getTime();

  // Find the distance between now and the count down date
  let distance = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds
  let days = Math.floor(distance / (1000 * 60 * 60 * 24));
  let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Display the result in the element with id="demo"
  document.querySelector(
    ".time"
  ).innerHTML = `${days}D ${hours}H ${minutes}M ${seconds}S`;

  // If the count down is finished, write some text
  if (distance < 0) {
    clearInterval(x);
    document.querySelector(".time").innerHTML = "EXPIRED";
  }
});

const target = document.querySelector("#target");
const time = document.querySelector("#time");
const poem = document.querySelector("#poem");

// target.addEventListener("mouseenter",()=> {
//   time.classList.toggle("hide")
//   poem.classList.toggle("hide")
// })
/*
$("#target").hover(function () {
  $(this).fadeOut(100);
  $(this).fadeIn(500);
});
*/

$("#target")
  .mouseenter(function () {
    $(".time").fadeOut("700");
    setTimeout(function () {
      $("#poem").fadeIn("slow");
    }, 800);
  })
  .mouseleave(function () {
    setTimeout(function () {
      $("#poem").fadeOut(100);
    });

    setTimeout(function () {
      $(".time").fadeIn("slow");
    }, 800);
  });
