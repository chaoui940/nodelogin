function newElement() {
  // this code doesn't work, but it gives you an idea
  var li = document.createElement("li")
  var newEntry = document.getElementById( "inp").value
  var u = document.createTextNode(newEntry)
  li.appendChild(u)
document.getElementById("myUL").appendChild(li)
document.getElementById("inp").value = "2";
}

