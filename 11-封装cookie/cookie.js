function setCookie(key,vl,time){
    if(time){
        var t = new Date;
        t.setDate(t.getDate()+time);
        console.log(t)
        document.cookie = `${key}=${vl};expires=${t}` ;
    }else{
        document.cookie = `${key}=${vl}` ;
    }
}
setCookie("name","zzj")

function getCookie(key){
    var cookieArr = document.cookie.split('; ');
    let hl = ""
    cookieArr.forEach((e)=>{
        let ary = e.split("=") ;
        if(ary[0] == key){
            hl = ary[1];
        }           
    })
    //如果value值存在就retrun出去；否则retrun null
    return hl? hl:null;
}
getCookie("name");

function removCookie(){
   setCookie("name","zzj",-1)   //删除持久性cookie把事件设置成-1
}