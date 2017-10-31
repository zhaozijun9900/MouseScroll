function josnp (obj){
    //默认配置
    let settings = {
        fnName: "fn"+(+new Date()),
        url:"",
        data:{},
        cd:"callback",
        success: function(){}
 
    }
    // 配置
    Object.assign(settings,obj)

    settings.data[settings.cd] = settings.fnName;

    // 在url中，我需要设置callback，但是callback可能不叫callback，
    // 设置一个固定的cd ：  默认cd:"callback"；
    // 将callback存放在data数据中作为key值，在循环data身数据，拼接成我需要的字符串；
    //如果回掉函数名称不叫callback ，只需要修改固定值cd;

    var arr = [];
    for( key in settings.data) {
        arr.push(key+"="+settings.data[key])
    }
    var queryString = arr.join("&")
    console.log(queryString)

//形参：
    // data 是通过后台调用函数；通过实参传递过来的；  
    //     在全局要有一个同名的函数接收数据；  所以挂在window上， 在全局定义一个函数；相当于在window上面挂了一个属性；
    window[settings.fnName] = function(data){
        settings.success(data)
    }
    let st = document.createElement("script");
    st.src = `${settings.url}?${queryString}`;
    document.getElementsByTagName("head")[0].appendChild(st);
    st.remove();
}