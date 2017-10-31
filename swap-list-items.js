
function swap() {
  var id1 = window.prompt("Please choose your first ID");
  var id2 = window.prompt("Please choose your second ID");
  var first = document.getElementById(id1).innerHTML;
  var second = document.getElementById(id2).innerHTML;
  document.getElementById(id2).innerHTML = first;
  document.getElementById(id1).innerHTML = second;
}
swap();
