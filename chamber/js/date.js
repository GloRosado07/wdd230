const d = new Date();
const year = d.getFullYear();

document.querySelector("#currentyear").textContent = year;
document.querySelector("#pagelastupdated").innerHTML = `Last update: ${document.lastModified}`;

// element to output to
const datefieldUK = document.querySelector(".date");

// derive the current date using a date object
const now = new Date();
const fulldateUK = new Intl.DateTimeFormat("en-UK", {
	dateStyle: "full"}).format(now);

datefieldUK.innerHTML = `<em>${fulldateUK}</em>`;

if(d.getDay() === 2 || d.getDay() === 1) {
	const banner = document.querySelector("#banner");
	banner.style.display = "block";
}
