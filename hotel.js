var r1 = 0; //number of people in room 1//
var r2 = 0; //number of people in room 2//
var r3 = 0; //number of people in room 3//
var r4 = 0; //number of people in room 4//
var r5 = 0; //number of people in room 5//

function roomOneAdd() {
  r1++; //Adds plus 1 to the number of people in room 1//
    if (r1 <= 3) {
      var guest1Name = document.getElementById('x').value;
      var node = document.createElement("li");
      var textnode = document.createTextNode(guest1Name);
      node.appendChild(textnode);
      document.getElementById("guestOneList").appendChild(node);
    }
    else{
      document.getElementById('oneAddButt').style.visibility = "hidden";
    }
}
function roomOneRemove() {
  r1-=1;
  var list = document.getElementById("guestOneList");
  var select = document.getElementById('roomOneRemove').value;
  list.removeChild(list.childNodes[select]);
  document.getElementById('oneAddButt').style.visibility = "visible";
}

function roomTwoAdd() {
  r2++; //Adds plus 1 to the number of people in room 2//
    if (r2 <= 3) {
      var guest2Name = document.getElementById('y').value;
      var node = document.createElement("li");
      var textnode = document.createTextNode(guest2Name);
      node.appendChild(textnode);
      document.getElementById("guestTwoList").appendChild(node);
    }
    else{
      document.getElementById('twoAddButt').style.visibility = "hidden";
    }
}
function roomTwoRemove() {
  r2-=1;
  var list = document.getElementById("guestTwoList");
  var select = document.getElementById('roomTwoRemove').value;
  list.removeChild(list.childNodes[select]);
  document.getElementById('twoAddButt').style.visibility = "visible";
}

function roomThreeAdd() {
  r3++; //Adds plus 1 to the number of people in room 3//
    if (r3 <= 3) {
      var guest3Name = document.getElementById('z').value;
      var node = document.createElement("li");
      var textnode = document.createTextNode(guest3Name);
      node.appendChild(textnode);
      document.getElementById("guestThreeList").appendChild(node);
    }
    else{
      document.getElementById('threeAddButt').style.visibility = "hidden";
    }
}
function roomThreeRemove() {
  r3-=1;
  var list = document.getElementById("guestThreeList");
  var select = document.getElementById('roomThreeRemove').value;
  list.removeChild(list.childNodes[select]);
  document.getElementById('threeAddButt').style.visibility = "visible";
}

function roomFourAdd() {
  r4++; //Adds plus 1 to the number of people in room 4//
    if (r4 <= 3) {
      var guest4Name = document.getElementById('a').value;
      var node = document.createElement("li");
      var textnode = document.createTextNode(guest4Name);
      node.appendChild(textnode);
      document.getElementById("guestFourList").appendChild(node);
    }
    else{
      document.getElementById('fourAddButt').style.visibility = "hidden";
    }
}
function roomFourRemove() {
  r4-=1;
  var list = document.getElementById("guestFourList");
  var select = document.getElementById('roomFourRemove').value;
  list.removeChild(list.childNodes[select])
  document.getElementById('fourAddButt').style.visibility = "visible";
}

function roomFiveAdd() {
  r5++; //Adds plus 1 to the number of people in room 5//
    if (r5 <= 3) {
      var guest5Name = document.getElementById('b').value;
      var node = document.createElement("li");
      var textnode = document.createTextNode(guest5Name);
      node.appendChild(textnode);
      document.getElementById("guestFiveList").appendChild(node);
    }
    else{
      document.getElementById('fiveAddButt').style.visibility = "hidden";
    }
}
function roomFiveRemove() {
  r5-=1;
  var list = document.getElementById("guestFiveList");
  var select = document.getElementById('roomFiveRemove').value;
  list.removeChild(list.childNodes[select]);
  document.getElementById('fiveAddButt').style.visibility = "visible";
}