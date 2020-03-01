const foodList = document.querySelector('#food-list');
console.log(foodList);

// Render Food Elements
function renderFood(doc){
    let li = document.createElement('li');
    let name = document.createElement('span');
    let type = document.createElement('span');
   

    li.setAttribute('data-id', doc.id);
    name.textContent = doc.data().name;
    type.textContent = doc.data().type;
   

    li.appendChild(name);
    li.appendChild(type);


    foodList.appendChild(li);

}

// Get Food Data
db.collection('food').get().then(snapshot => {
    snapshot.docs.forEach(doc => {
        renderFood(doc);
    });
});