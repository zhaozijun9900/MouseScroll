//拖拽函数
box.addEventListener("mousedown", down);
//鼠标按下时执行代码
function down(ev) {
	var disX = ev.clientX - box.offsetLeft;
	var disY = ev.clientY - box.offsetTop;
}