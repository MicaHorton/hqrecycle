const itemList = document.querySelector('#item-list');

// Render Item Elements
function renderItem(doc) {
    //Create List and Span Element
    let li = document.createElement('li');
    let name = document.createElement('span');
    name.textContent = doc.data().name;
    
    //Color Span Element
    if (doc.data().type == 'r') {
        name.style.color = 'blue';
    };

    if (doc.data().type == 'l') {
        console.log(doc.data().type);
        name.style.color = 'red';
    };

    if (doc.data().type == 'c') {
        console.log(doc.data().type);
        name.style.color = 'green';
    };

    //Add Span Element to List Element, Add List Element to ItemList Div
    li.setAttribute('data-id', doc.id);
    li.appendChild(name);
    itemList.appendChild(li);

    
}

// Get Item Data
db.collection('items').orderBy('name').get().then(snapshot => {
    snapshot.docs.forEach(doc => {
        renderItem(doc);
    });
});