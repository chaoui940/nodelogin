function newElement() {
  // this code doesn't work, but it gives you an idea
  const li =document.createElement("li")
  const newEntry = document.getElementById( "inp").value
  const u = document.createTextNode(newEntry)
  li.appendChild(u)
document.getElementById("myUL").appendChild(li)
document.getElementById("inp").value = "Nothing"

  // something like this
  // let todos = []

  /*
  todos.forEach((todo) => {
    document.document.createTextNode(todo)
  })
  */
}