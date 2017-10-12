//拖拽函数
document.addEventListener("mouseup",up);

function up() {
	document.addEventListener("mousemove",move);
	document.addEventListener("mouseup",up);
}