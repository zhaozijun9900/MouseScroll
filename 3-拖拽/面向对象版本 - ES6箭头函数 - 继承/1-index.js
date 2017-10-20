window.onload = function() {

	function Drag(IdNanme) {
		console.log(this)
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

		function move(ev) {
			_this.move(ev);
		}

		function up() {
			_this.up(move, up);
		}

		document.addEventListener("mousemove", move);
		document.addEventListener("mouseup", up);
	}

	Drag.prototype.move = function(ev) {
		var l = ev.clientX - this.disX;
		var t = ev.clientY - this.disY;
		this.box.style.left = l + 'px';
		this.box.style.top = t + 'px';
	}

	Drag.prototype.up = function(move, up) {
		document.removeEventListener("mousemove", move);
		document.removeEventListener("mouseup", up);
	}
	//属性的继承  -- 类式继承（构造继承）
	function Drag2() {
		//	console.log(this)  //Drag2 {};
		Drag.call(this, "box1"); // 必须使用call 调用，改变this指向！！！
	}

	//拷贝继承 //赋值 与 赋址	
	for(var attr in Drag.prototype) {
		//--------------hasOwnProperty如果不写会获取到父亲.prototype-----------------//
		if(Drag.prototype.hasOwnProperty(attr)) {
			Drag2.prototype[attr] = Drag.prototype[attr];
		}
	}

	Drag2.prototype.move = function(ev) {
		var l = ev.clientX - this.disX;
		var t = ev.clientY - this.disY;

		var max = window.innerHeight - this.box.offsetHeight - 40;
		if(t < 40){
			t = 0
		} else if(t > max){
			 t = window.innerHeight - this.box.offsetHeight;
		}
		this.box.style.left = l + 'px';
		this.box.style.top = t + 'px';
	}

	var d = new Drag("box"); // this->实例化对象
	var d1 = new Drag2("box1"); // this->实例化对象

	d.inti();
	d1.inti();

}