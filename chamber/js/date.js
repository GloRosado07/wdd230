const d = new Date();
const year = d.getFullYear();
const currentDay = d.getDay();


document.querySelector("#currentyear").textContent = year;
document.querySelector("#pagelastupdated").innerHTML = `Last update: ${document.lastModified}`;

// element to output to
const datefieldUK = document.querySelector(".date");

// derive the current date using a date object
const now = new Date();
const fulldateUK = new Intl.DateTimeFormat("en-UK", {
	dateStyle: "full"}).format(now);

datefieldUK.innerHTML = `<em>${fulldateUK}</em>`;

//remove  the banner if not Mon or Tues
if (currentDay >= 1 && currentDay <= 2) {

    document.querySelector(".banner").style.display = "block";

} else document.querySelector(".banner").style.display = "none";