const itemList = document.querySelector('#item-list');

// Render Item Elements
function renderItem(doc) {
    //Create List and Span Element
    let li = document.createElement('li');
    let name = document.createElement('span');
    name.textContent = doc.data().name;
    
    //Color Span Element
    if (doc.data().type = 'r') {
        console.log(doc.data().type);
        name.style.color = 'blue';
    };

    //Add Span Element to List Element, Add List Element to ItemList Div
    li.setAttribute('data-id', doc.id);
    li.appendChild(name);
    itemList.appendChild(li);



   // if databas

    /*
    let li = document.createElement('li');
    let name = document.createElement('span');
    let type = document.createElement('span');
   

    li.setAttribute('data-id', doc.id);
    name.textContent = doc.data().name;
    type.textContent = doc.data().type;
   

    li.appendChild(name);
    li.appendChild(type);


    itemList.appendChild(li); */

}

// Get Item Data
db.collection('items').get().then(snapshot => {
    snapshot.docs.forEach(doc => {
        renderItem(doc);
    });
});