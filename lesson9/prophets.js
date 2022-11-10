const requestURL = 'https://byui-cit230.github.io/lessons/lesson-09/data/latter-day-prophets.json';
const cards = document.querySelector('.cards');

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    const prophets = jsonObject['prophets'];
    // console.table(jsonObject);
    prophets.forEach(displayProphets);
});

function displayProphets(prophet) {
    let card = document.createElement('section');
    let suffix = ""
    let sequence = prophet.order.valueOf()
    if (sequence == 1) {
      suffix = "st";
    } else if (sequence == 2) {
      suffix = "nd";
    } else if (sequence == 3) {
      suffix = "rd"
    } else {
      suffix = "th"
    }
  
    //h2 name
  let h2 = document.createElement('h2');
  h2.innerHTML = `<h2>${prophet.name} ${prophet.lastname}<br> ${prophet.order}${suffix} President</h2>`
  card.appendChild(h2);

  //p birth date
  let p1 = document.createElement('p');
  p1.textContent = `Date of Birth: ${prophet.birthdate}`;
  card.appendChild(p1);

  //p birth place
  let p2 = document.createElement('p');
  p2.textContent = `Place of birth: ${prophet.birthplace}`;
  card.appendChild(p2);

  //img
  let image = document.createElement('img');
  image.src = prophet.imageurl;
  image.setAttribute('alt', prophet.order);
  card.appendChild(image);
  
  document.querySelector('div.cards').appendChild(card);
}