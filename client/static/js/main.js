//GENERAL GET
/*function btn_get() {

    request.open('GET', url + spec1);
    request.send();

    request.onload = () => text.value += request.responseText;
}*/

//GENERAL POST
/*function btn_post() {

    var xhttp = new XMLHttpRequest();
    
    xhttp.open('POST', url + spec1);
    xhttp.setRequestHeader('Content-Type', 'application/json');

    xhttp.onload = function() {
        text.value += this.responseText;
    };

    const body = {"name": in_name.value, "grade": in_grade.value};
    
    xhttp.send(JSON.stringify(body));
}*/

//GENERAL DELETE
/*function btn_delete() {

    var find = document.getElementById('find');

    request.open('DELETE', url + spec1 + '/' + find.value);
    request.setRequestHeader('Content-Type', 'application/json');

    request.onload = function() {
        text.value += this.responseText;
    }

    request.send()

}*/

//FUNCTION FOR LOGIN//


//FUNCTION FOR QUIZ//
function nextCard(card_ID) {
    let request = new XMLHttpRequest();
    let display = document.getElementById("display-area");

    request.open('GET', "/flashcards/" + card_ID);
    request.send();

    request.onload = () => display.value += request.responseText;
}

//FUNCTION FOR WORKSPACE//

count = 1;

function addRow(tableID) {
    let table = document.getElementById(tableID);
    let newRow = table.insertRow(-1);
    
    let CardNum = newRow.insertCell(0);
    let Keyword = newRow.insertCell(1);
    let Definition = newRow.insertCell(2);

    // INCLUDE INFORMATION FROM DATABASE

    //JSON.parse() incoming string

    let key = document.getElementById('key');
    let def = document.getElementById('def')

    var fillNum = document.createTextNode(count++);
    var fillKey = document.createTextNode(key.value);
    var fillDef = document.createTextNode(def.value);
    
    CardNum.appendChild(fillNum);
    Keyword.appendChild(fillKey);
    Definition.appendChild(fillDef);
}

function delRow(tableID) {
    let table = document.getElementById(tableID);
    
    //DELETE FROM DATABASE AS WELL

    table.deleteRow(-1);
    count--;
}

function newDeck() {
    var xhttp = new XMLHttpRequest();
    
    xhttp.open('POST', "localhost:4000/decks");
    xhttp.setRequestHeader('Content-Type', 'application/json');

    let deck_name = document.getElementById("deck_name");
    let msg = "Success";

    xhttp.onload = function() {
        msg += this.responseText;
    };

    const body = {"name": deck_name.value};
    
    xhttp.send(JSON.stringify(body));
}

//should delete from database and then remove row automatically
function deleteCard() {
    var deck_id = document.getElementById('key');

    request.open('DELETE', 'localhost:4000/flashcards/' + deck_id.value);
    request.setRequestHeader('Content-Type', 'application/json');

    request.onload = function() {
        delRow(deck_id);
    }

    request.send()
}

//FUNCTION FOR VIEW//
