function ajax(json) {

    //默认的配置
    var settings = {
        url: '',
        method: 'get',
        async: true,
        success: function () { },
        fail: function () { },
        data: {},
        dataType: 'json'  //数据类型    
    }

    //有配置走配置，没配置走默认
    for (var attr in json) {
        settings[attr] = json[attr];
    }
    //序列化操作，把对象转成字符串，可以去看第6个课件
    var arr = [];
    for (var attr in settings.data) {
        arr.push(attr + '=' + settings.data[attr]);
    }
    settings.data = arr.join('&');
    var ajax = new XMLHttpRequest;
    if (settings.method === 'get') {
        ajax.open('get', settings.url + '?' + settings.data, settings.async);
        ajax.onreadystatechange = listener;
        ajax.send();
    } else if (settings.method === 'post') {
        ajax.open('post', settings.url, settings.async);
        ajax.onreadystatechange = listener;
        ajax.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
        ajax.send(settings.data);
    }
    function listener() {
        //4代表完成
        if (ajax.readyState === 4) {
            //200-207之前算成功  
            if (ajax.status >= 200 && ajax.status <= 207) {
                //说明我要json
                if (settings.dataType === 'json') {
                    settings.success(eval('(' + ajax.responseText + ')'));
                } else if (settings.dataType === 'xml') {
                    settings.success(ajax.responseXML);
                } else if (settings.dataType === 'str') {
                    settings.success(ajax.responseText);
                }

            } else {
                settings.fail(ajax.status);
            }
        }
    }
}