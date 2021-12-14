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
function login () {
    let email = document.getElementById('email');
    let password = document.getElementById('password');

    var xhttp = new XMLHttpRequest();
    xhttp.open("POST", "http://localhost:4000/api/auth/login");
    xhttp.setRequestHeader("Content-Type", "application/json");
    xhttp.send(JSON.stringify({
        "email": email,
        "password": password
    }));

    xhttp.onreadystatechange = function () {
        if (this.readyState == 4) {
            const objects = JSON.parse(this.responseText);
            if (object['status'] == 'ok') {
                localStorage.setItem("jwt", object['acessToken']);
                console.log("Good");
            }).then((result) => {
                if (result.isConfirmed) {
                    window.location.href = './index.html';
                }
            });
            } else {

            }
        }
    }

}

//FUNCTION FOR QUIZ//
function nextCard(card_ID) {
  let request = new XMLHttpRequest();
  let display = document.getElementById("display-area");

  request.open("GET", "http://localhost:4000/api/flashcards/" + card_ID);
  request.send();

  request.onload = () => (display.value += request.responseText);
}

//FUNCTION FOR WORKSPACE//
function loadTable(event, showTab) {
  var i, tabcontent, tablinks;

  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace("active", "");
  }

  document.getElementById(showTab).style.display = "block";
  event.currentTarget.className += " active";
}

count = 1;

function addRow(tableID) {
  let table = document.getElementById(tableID);
  let newRow = table.insertRow(-1);

  let CardNum = newRow.insertCell(0);
  let Keyword = newRow.insertCell(1);
  let Definition = newRow.insertCell(2);

  // INCLUDE INFORMATION FROM DATABASE

  //JSON.parse() incoming string

  let key = document.getElementById("key");
  let def = document.getElementById("def");

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

function showAllCards() {
    let request = new XMLHttpRequest();
    let display = document.getElementById("please-work");

  request.open("GET", "http://localhost:4000/api/flashcards/");
  request.setRequestHeader("Accept", "application/json");

  request.send();

  request.onload = () => (display.value += request.responseText);
}

function showAllDecks(deck_id) {
    let request = new XMLHttpRequest();
    let display = document.getElementsByClassName("box");

    request.open('GET', "http://localhost:4000/api/decks/");
    request.setRequestHeader("Accept", "application/json");
    
    request.send();

    request.onload = () => display.value += request.responseText;
}

function newDeck() {
  var xhttp = new XMLHttpRequest();

  xhttp.open("POST", "http://localhost:4000/api/decks");
  //xhttp.setRequestHeader('Content-Type', 'application/json');
  xhttp.setRequestHeader("Accept", "application/json");

  let deck_name = document.getElementById("deck_name");
  let msg = "Success";

  xhttp.onload = function () {
    msg += this.responseText;
  };

  const body = { deck_id: 1, deck_name: deck_name.value };

  xhttp.send(JSON.stringify(body));
}

//should delete from database and then remove row automatically
function deleteCard() {
  var deck_id = document.getElementById("key");

  request.open(
    "DELETE",
    "http://localhost:4000/api/flashcards/" + deck_id.value
  );
  request.setRequestHeader("Content-Type", "application/json");

  request.onload = function () {
    delRow(deck_id);
  };

  request.send();
}

//FUNCTION FOR VIEW//
function generate_deck() {
  var ref = document.getElementById("genTable")[0];

  var table = document.createElement("table");
  var tableRef = document.createElement("tref");

  for (var i = 0; i < 2; i++) {
    var row = document.createElement("tr");

    for (var j = 0; j < 2; i++) {
      var row = document.createElement("tr");

      for (var j = 0; j < 2; j++) {
        var cell = document.createElement("td");
        var text = document.createTextNode(i + "Card Name");

        cell.appendChild(text);
        row.appendChild(cell);
      }

      tableRef.appendChild(row);
    }

    table.appendChild(tableRef);
    //ref.appendChild(table);
    table.setAttribute("border", 2);
  }
}

function pullDecks() {
  let xhr = new XMLHttpRequest();
  xhr.open("GET", "http://localhost:4000/decks");
  xhr.setRequestHeader("Accept", "application/json");
  xhr.onreadystatechange = function () {
    console.log(xhr.responseText);
    var deckDatas = JSON.parse(xhr.responseText);
    var string = JSON.stringify(deckDatas);
    console.log(string);
    document.getElementById("deckData").innerHTML = string;
  };
  xhr.send();
}
