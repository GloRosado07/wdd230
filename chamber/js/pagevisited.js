const lastvisit_text = window.localStorage.getItem('lastvisit');
if(lastvisit_text === undefined) {
    lastvisit_text = new Date(Data.now());
}
const last_visit = Date.parse(lastvisit_text);
const FACTOR = 1000 * 60 * 60 * 24;


let daysbetween = Date.now() - last_visit;
let numberOfDays = daysbetween / FACTOR;

window.localStorage.setItem('lastvisit', new Date(Date.now()));

const daysSinceVisit = Math.floor(numberOfDays);
document.getElementById('lastvisit').textContent = daysSinceVisit;
