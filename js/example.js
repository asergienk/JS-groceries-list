// ADD NEW ITEM TO END OF LIST
var node = document.createElement("li");
var textnode = document.createTextNode("cream");
node.appendChild(textnode);

var list = document.getElementsByTagName('ul')[0];
list.appendChild(node);

// ADD NEW ITEM START OF LIST
node = document.createElement("li");
textnode = document.createTextNode("kale");
node.appendChild(textnode);
list.insertBefore(node, list.childNodes[0]);
// ADD A CLASS OF COOL TO ALL LIST ITEMS
var listItems = document.getElementsByTagName('li');
var listLength = listItems.length;

for (var i = 0; i < listLength; ++i) {
    listItems[i].className = 'cool';
}

// ADD NUMBER OF ITEMS IN THE LIST TO THE HEADING
var heading = document.querySelector('h2');
node = document.createElement('span');
textnode = document.createTextNode(listLength);
node.appendChild(textnode);
heading.appendChild(node);
