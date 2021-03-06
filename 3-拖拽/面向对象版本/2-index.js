window.onload = function() {

	function Drag(IdNanme) {
		this.box = document.getElementById(IdNanme);
		this.disX = 0;
		this.disY = 0;
	}

	Drag.prototype.inti = function() {
		var _this = this // --> Drag实例化对象
		this.box.onmousedown = function(ev){
			_this.down(ev);
		}
	}

	Drag.prototype.down = function(ev) {
		var _this = this;  // this--> Drag实例化对象；
		this.disX = ev.clientX - this.box.offsetLeft; 
		this.disY = ev.clientY - this.box.offsetTop;
		
		document.onmousemove = function(ev){
			_this.move(ev);  //_this--> Drag实例化对象；
		}		
		document.onmouseup = function(){
			_this.up();  //_this--> Drag实例化对象；
		}
		
	}
	
	Drag.prototype.move = function(ev) {
		this.box.style.left = ev.clientX - this.disX + 'px';
		this.box.style.top = ev.clientY - this.disY + 'px';
	}

	Drag.prototype.up = function() {
		document.onmouseup = document.onmousemove = null;
	}

	var d = new Drag("box"); // this->实例化对象
	d.inti();

}