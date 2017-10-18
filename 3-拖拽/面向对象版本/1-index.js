window.onload = function() {

	function Drag(IdNanme) {
		this.box = document.getElementById(IdNanme);
		this.disX = 0;
		this.disY = 0;
	}

	Drag.prototype.inti = function() {
		var _this = this // --> Drag实例化对象
		this.box.addEventListener("mousedown", function(ev) {
			_this.down(ev)
		})
	}

	Drag.prototype.down = function(ev) {
		var _this = this;
		this.disX = ev.clientX - this.box.offsetLeft;
		this.disY = ev.clientY - this.box.offsetTop;

		var move = function(ev) {
			_this.move(ev);
		}
		var up = function() {
			_this.up(move, up);
		}

		document.addEventListener("mousemove", move);
		document.addEventListener("mouseup", up);
	}

	Drag.prototype.move = function(ev) {
		this.box.style.left = ev.clientX - this.disX + 'px';
		this.box.style.top = ev.clientY - this.disY + 'px';
	}

	Drag.prototype.up = function(move, up) {
		document.removeEventListener("mousemove", move);
		document.removeEventListener("mouseup", up);
	}

	var d = new Drag("box"); // this->实例化对象
	d.inti();

}