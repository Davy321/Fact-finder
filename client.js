var pics = [
	"images/1.png",
	"images/2.jpg",
	"images/3.jpg",
	"images/4.jpg",
	"images/5.jpg",
];

var img = document.getElementById("image");
var btn = document.getElementById("nextImage");
var imageCounter = 1;

btn.addEventListener("click", function(){
	if (imageCounter < 5) {
		img.src = pics[imageCounter]
		counter = imageCounter++;
	} else {
		document.getElementById("p2").style.display = "block";
	}
});