//拖拽函数
document.addEventListener("mousemove", move);

function move(ev) {
	var x = ev.clientX - disX;
	var y = ev.clientY - disY;

	box.style.left = x + "px";
	box.style.top = y + "px";
}