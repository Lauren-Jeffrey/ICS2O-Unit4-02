function myFunction() {
  var x = document.getElementById("hideandshowtext");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}
function displayPhrase()
{
    document.getElementById("changetext").innerHTML = 'text changed!';
}
function hideshowimage() {
  var x = document.getElementById("hideandshowimage");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}