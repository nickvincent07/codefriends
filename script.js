var leftButton = document.getElementById("popup");
var rightButton = document.getElementById("remove");
var quote = document.getElementById("quote");

leftButton.disabled = false;

leftButton.addEventListener("mouseover", function() {
    quote.innerHTML = "AYYYYY";
});

leftButton.addEventListener("click", function() {
    quote.innerHTML = Date();
});

rightButton.addEventListener("click", function() {
    document.body.style.backgroundImage = 'url(https://i.ytimg.com/vi/3g0reUIKCys/maxresdefault.jpg)';
    quote.innerHTML = "";
    leftButton.disabled = true;
});
