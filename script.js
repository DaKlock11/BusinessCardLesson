// CARDS is an array of data containing business card text in object format

// Loop through CARDS and create a brand new div that has all of the
// card text data in that card. Style however you like in style.css
console.log(CARDS);


let parentCardContainer = document.getElementById("cardContainer");

  for (let i = 0; i < CARDS.length; i++) {
  
    let outputValues = CARDS[i];
    let newDiv = document.createElement("div");
    let lineBreak = document.createElement("br");
    
    //Create NAME variable + node and assign class name
    let nameContent = document.createTextNode(outputValues['name']);
    newDiv.className += "nameContentStyle";
    
    
    //Create OCCUPATION node to store occupation
    let occupationContent = document.createTextNode(outputValues['occupation']);
    
    //Create, assign OCCUPATION p element and class
    const occupationTag = document.createElement('p');
    occupationTag.className += 'card-occupation';
    
    //Create phone node to store PHONE 
    let phoneContent = document.createTextNode(outputValues['phone']);
    
    //Create, assign PHONE p element and class
    const phoneTag = document.createElement('p');
    phoneTag.className += 'card-phone';
    
    //Create node to store ADDRESS
    let addressOneContent = document.createTextNode(outputValues['addressLine1']);
    
    //Create, assign ADDRESS p element and class for style
    const addressOneTag = document.createElement('p');
    addressOneTag.className += 'card-addressOne';
    
    let addressTwoContent = document.createTextNode(outputValues['addressLine2']);
    
    const addressTwoTag = document.createElement('p');
    addressTwoTag.className += 'card-addressTwo';
    
    let cityContent = document.createTextNode(outputValues['city']);
    
    const cityTag = document.createElement('p');
    cityTag.className += 'card-city';
    
    let stateContent = document.createTextNode(outputValues['state']);
    
    const stateTag = document.createElement('p');
    stateTag.className += 'card-state';
    
    //Append content to tag
    occupationTag.appendChild(occupationContent);
    phoneTag.appendChild(phoneContent);
    addressOneTag.appendChild(addressOneContent);
    addressTwoTag.appendChild(addressTwoContent);
    cityTag.appendChild(cityContent);
    stateTag.appendChild(stateContent);
    
    //Append tags to newDiv
    newDiv.appendChild(nameContent);
    newDiv.appendChild(lineBreak);
    newDiv.appendChild(occupationTag);
    newDiv.appendChild(phoneTag);
    newDiv.appendChild(addressOneTag);
    newDiv.appendChild(addressTwoTag);
    newDiv.appendChild(cityTag);
    newDiv.appendChild(stateTag);
    //Append newDiv to HTML empty div tag
    parentCardContainer.appendChild(newDiv);
    
}
console.log(cardElement);


/*function arrObjToString (CARDS) {
  let i = "";
  
  
  for (let i = 0; i < CARDS.length; i++) {
    var cardList = CARDS[i]; */
    
    //This was my second try
    /*var newElement = document.createElement('div');
    newElement.innerHTML = CARDS[i];
    document.body.appendChild(newElement); */
    
    //This was my first try
    /*cardList = document.createElement('div');
    document.appendChild(cardList).innerHTML;*/
  //}
//}
//for (let i=0; i<CARDS.length;i++) {
//  document.body.appendChild(CARDS[i]); 
//}

