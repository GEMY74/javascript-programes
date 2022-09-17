//  ================= drag and drop ========================

var count = document.querySelector(".count span");
var div = document.getElementById("div1");

function allowDrop(ev) {
  ev.preventDefault();
}

function drag(ev) {
  ev.dataTransfer.setData("text", ev.target.id);
}

function drop(ev, el) {
  ev.preventDefault();
  var data = ev.dataTransfer.getData("text");
  el.appendChild(document.getElementById(data));

  count.innerHTML = Number(
    document.getElementsByClassName("droped")[0].children.length
  );
}