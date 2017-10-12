//拖拽函数

<<
<< << < HEAD
var box = document.querySelector("div");

box.addEventListener("mousedown", down);

function down(ev) {
	var disX = ev.clientX - box.offsetLeft;
	var disY = ev.clientY - box.offsetTop;

	document.addEventListener("mousemove", move);

	function move(ev) {
		var x = ev.clientX - disX;
		var y = ev.clientY - disY;
		console.log(box)
		box.style.left = x + "px";
		box.style.top = y + "px";
	}

	document.addEventListener("mouseup", up);

	function up() {
		document.removeEventListener("mousemove", move);
		document.removeEventListener("mouseup", up);
	}

}