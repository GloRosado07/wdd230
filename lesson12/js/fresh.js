const requestJSON = 'json/fruit.json';
const firstName = document.querySelector('#name');
const email = document.querySelector('#email');
const phone = document.querySelector('#phone');
const select1 = document.querySelector('#fruit-option1');
const select2 = document.querySelector('#fruit-option2');
const select3 = document.querySelector('#fruit-option3');
const instructions = document.querySelector('#comments');
let fruitsData = [];
const submitBtn = document.querySelector('#add-order');
const orderDetails = document.querySelector('.order_details');

fetch(requestJSON)
.then(function(response){
    return response.json();
})
.then(function(fruits) {
    fruitsData = fruits;
    fruits.forEach(displayFruit);     
})

function displayFruit(fruit) {
    let fruitOption1 = document.createElement('option');
    fruitOption1.text = `${fruit.name}`;
    fruitOption1.value = `${fruit.id}`;
    select1.append(fruitOption1);

    let fruitOption2 = document.createElement('option');
    fruitOption2.text = `${fruit.name}`;
    fruitOption2.value = `${fruit.id}`;
    select2.append(fruitOption2);

    let fruitOption3 = document.createElement('option');
    fruitOption3.text = `${fruit.name}`;
    fruitOption3.value = `${fruit.id}`;
    select3.append(fruitOption3);
}
  
submitBtn.addEventListener('click', addToOrder);

function addToOrder(event) {

    // prevent page reload
    event.preventDefault();

    let nameOutput = document.createElement('p');
    nameOutput.textContent = `${'Name: ' + firstName.value}`;
    orderDetails.append(nameOutput);

    let emailOutput = document.createElement('p');
    emailOutput.textContent = `${'Email: ' + email.value}`;
    orderDetails.append(emailOutput);

    let phoneOutput = document.createElement('p');
    phoneOutput.textContent = `${'Phone: ' + phone.value}`;
    orderDetails.append(phoneOutput);

    let selectedFruitId1 = select1.value;
    let selectedFruitData1 = getFruitInfo(selectedFruitId1);
    console.log(selectedFruitData1);

    let fruitOutput1 = document.createElement('p');
    fruitOutput1.textContent = `${'Selected fruit #1: ' + selectedFruitData1.name}`;
    orderDetails.append(fruitOutput1);

    let selectedFruitId2 = select2.value;
    let selectedFruitData2 = getFruitInfo(selectedFruitId2);
    console.log(selectedFruitData2);

    let fruitOutput2 = document.createElement('p');
    fruitOutput2.textContent = `${'Selected fruit #2: ' + selectedFruitData2.name}`;
    orderDetails.append(fruitOutput2);

    let selectedFruitId3 = select3.value;
    let selectedFruitData3 = getFruitInfo(selectedFruitId3);
    console.log(selectedFruitData3);

    let fruitOutput3 = document.createElement('p');
    fruitOutput3.textContent = `${'Selected fruit #3: ' + selectedFruitData3.name}`;
    orderDetails.append(fruitOutput3);

    let instructionsOutput = document.createElement('p');
    instructionsOutput.textContent = `${'Additional Instructions: ' + instructions.value}`;
    orderDetails.append(instructionsOutput);

    let now = new Date();
    let fulldateUK = new Intl.DateTimeFormat("en-UK", {
        dateStyle: "full"}).format(now);

    let dateOutput = document.createElement('p');
        dateOutput.textContent = `${'Date: ' + fulldateUK}`;
        orderDetails.append(dateOutput);    

    let totalCalories = selectedFruitData1.nutritions.calories 
        + selectedFruitData2.nutritions.calories 
        + selectedFruitData3.nutritions.calories;

    let totalCaloriesOutput = document.createElement('p');
    totalCaloriesOutput.textContent = `${'Total Calories: ' + totalCalories}`;
    orderDetails.append(totalCaloriesOutput);

    let totalCarbohydrates = selectedFruitData1.nutritions.carbohydrates 
        + selectedFruitData2.nutritions.carbohydrates 
        + selectedFruitData3.nutritions.carbohydrates;

    let totalCarbohydratesOutput = document.createElement('p');
    totalCarbohydratesOutput.textContent = `${'Total Carbohydrates: ' + totalCarbohydrates}`;
    orderDetails.append(totalCarbohydratesOutput);

    let totalFat = selectedFruitData1.nutritions.fat 
        + selectedFruitData2.nutritions.fat 
        + selectedFruitData3.nutritions.fat;

    let totalFatOutput = document.createElement('p');
    totalFatOutput.textContent = `${'Total Fat: ' + totalFat}`;
    orderDetails.append(totalFatOutput);

    let totalProtein = selectedFruitData1.nutritions.protein 
        + selectedFruitData2.nutritions.protein 
        + selectedFruitData3.nutritions.protein;

    let totalProteinOutput = document.createElement('p');
    totalProteinOutput.textContent = `${'Total Protein: ' + totalProtein}`;
    orderDetails.append(totalProteinOutput);

    let totalSugar = selectedFruitData1.nutritions.sugar 
        + selectedFruitData2.nutritions.sugar 
        + selectedFruitData3.nutritions.sugar;

    let totalSugarOutput = document.createElement('p');
    totalSugarOutput.textContent = `${'Total Sugar: ' + totalSugar}`;
    orderDetails.append(totalSugarOutput);

}

function getFruitInfo(fruitId) {
    let fruitObject = [];
    fruitsData.forEach(function(fruit) {
        if (fruit.id == fruitId) {
            fruitObject = fruit;
        }
    });
    return fruitObject;
}
