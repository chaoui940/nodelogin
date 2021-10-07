function newElement() {
  // this code doesn't work, but it gives you an idea
  let li = document.createElement("li")
  let newEntry = document.getElementById( "inp").value
  let u = document.createTextNode(newEntry)
  li.appendChild(u)
document.getElementById("myUL").appendChild(li)
document.getElementById("inp").value = "2";
}


