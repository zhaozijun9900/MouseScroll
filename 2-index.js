//拖拽函数
<<<<<<< HEAD
<<<<<<< HEAD
var box = document.querySelector("div");
=======
box.addEventListener("mousedown", down);

function down(ev) {
	var disX = ev.clientX - box.offsetLeft;
	var disY = ev.clientY - box.offsetTop;
}
>>>>>>> down
=======
document.addEventListener("mousemove", move);

function move(ev) {
	var x = ev.clientX - disX;
	var y = ev.clientY - disY;

	box.style.left = x + "px";
	box.style.top = y + "px";
}
>>>>>>> move
