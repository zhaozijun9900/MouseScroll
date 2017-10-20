window.onload = function() {

	class Drag{
		constructor(IdName){
			//一般情况初始化值都在这里；
			this.box = document.getElementById(IdName);
			this.disX = 0;
			this.disY = 0;		
		};
		itin(){
			this.box.addEventListener("mousedown",(event)=>{
				//console.log(this)   箭头函数的this永远指向父级；
				this.down(event);
			})
		};
		down(event){
			this.disX = event.clientX-this.box.offsetLeft;
			this.disY = event.clientY-this.box.offsetTop;
			
			var move = (event) => {
				this.move(event);   
			}
			var up = (ev) => {
				this.up(ev,move,up);  //必须传值；
			}	
			document.addEventListener("mouseup",up);
			document.addEventListener("mousemove",move);
		};
		move(event){
			this.box.style.left = event.clientX -this.disX+"px";
			this.box.style.top = event.clientY -this.disY+"px";
		};
		up(ev,move,up){
			document.removeEventListener("mouseup",up);
			document.removeEventListener("mousemove",move);
		};
	}

	var n = new Drag("box");
	n.itin();
	
}