function ajax(params) {
    var url = params.url || '';
    var method = params.method || 'GET';
    var data = params.data || null;
    var callback = params.callback || null;

    var xhr = new XMLHttpRequest();
    xhr.open(method, url, true);
    xhr.onreadystatechange = function () {
        if (xhr.readyState == 4) {
            var data = xhr.responseText;
            typeof(callback) == 'function' && callback(data);
        }
    }

    var body;
    if (data) {
        var bodies = [];
        for (var name in data) {
            bodies.push(name + '=' + encodeURIComponent(data[name]));
        }

        body = bodies.join('&');
        if (body.length) {
            xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
        }
    }

    xhr.send(body);
}

function get(url, callback) {
    ajax({url: url, callback: callback});
}

function post(url, data, callback) {
    ajax({url: url, method: 'POST', data: data, callback: callback});
}

export {ajax, get, post};