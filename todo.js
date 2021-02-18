var listTasks = document.getElementsByTagName("li");
var i;

for (i = 0; i < listTasks.length; i++) {
  var box = document.createElement("box");
  var txt = document.createTextNode("\u00D7");
  box.className = "close";
  box.appendChild(text);
  listTasks[i].appendChild(box);
}

var close = document.getElementsByClassName("close");
var i;
for (i = 0; i < close.length; i++) {
  close[i].onclick = function() {
    var div = this.parentElement;
    div.style.display = "none";
  }
}


function newTask() {
  var li = document.createElement("li");
  var inputVal = document.getElementById("input").value;
  var qer = document.createTextNode(inputVal);
  li.appendChild(qer);
  if (inputVal === '') {
    alert("please write there!");
  } else {
    document.getElementById("list").appendChild(li);
  }
  document.getElementById("input").value = "";

  var box = document.createElement("box");
  var text = document.createTextNode("\u00D7");
  box.className = "close";
  box.appendChild(text);
  li.appendChild(box);

  for (i = 0; i < close.length; i++) {
    close[i].onclick = function() {
      var div = this.parentElement;
      div.style.display = "none";
    }
  }
}