const d = new Date();
const year = d.getFullYear();

document.querySelector("#currentyear").textContent = year;
document.querySelector("#pagelastupdated").innerHTML = `Last update: ${document.lastModified}`;