//拖拽函数
box.addEventListener("mousedown", down);

function down(ev) {
	var disX = ev.clientX - box.offsetLeft;
	var disY = ev.clientY - box.offsetTop;
}